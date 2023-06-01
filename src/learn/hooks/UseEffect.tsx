/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react';

const UseEffect: React.FC = () => {
  //1. useEffect(callback) (ít dùng)
  // - Gọi callback mỗi khi component re-render
  // - Gọi callback sau khi component thêm element vào DOM
  //2. useEffect(callback,[])
  // - Chỉ gọi callback 1 lần sau khi component mounted
  //3. useEffect(callback,[dependencies])
  // - Callback sẽ được gọi lại mỗi khi dependencies thay đổi

  //----------------------------------------------------------------
  // 1. Callback luôn được gọi sau khi component mounted
  // 2. Cleanup function luôn được gọi trước khi component unmounted
  // 3. Cleanup function luôn được gọi trước khi callback được gọi (trừ lần mounted)

  const [show, setShow] = useState<boolean>(false);

  const tabs = ['posts', 'comments', 'albums'];

  const Content: React.FC = () => {
    const [title, setTitle] = useState('');
    const [posts, setPosts] = useState([]);
    const [type, setType] = useState('posts');
    const [showGoToTop, setShowGoToTop] = useState(false);

    const [width, setWidth] = useState(window.innerWidth);

    //console.log(type);

    // useEffect(() => {
    //   console.log('Mounted');
    // });

    // return <h1>Hello Word!</h1>;

    //console.log('Render');

    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //       .then((res) => res.json())
    //       .then((posts) => {
    //         setPosts(posts);
    //       });
    //   }, []);

    useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/${type}`)
        .then((res) => res.json())
        .then((posts) => {
          setPosts(posts);
        });
    }, [type]);

    useEffect(() => {
      const handleScroll = () => {
        // if (window.scrollY >= 200) {
        //   setShowGoToTop(true);
        // } else {
        //   setShowGoToTop(false);
        // }

        setShowGoToTop(window.scrollY >= 200);
      };

      window.addEventListener('scroll', handleScroll);
      //console.log('addEventListener');

      return () => {
        window.removeEventListener('scroll', handleScroll);
        //console.log('removeEventListener');
      };
    }, []);

    useEffect(() => {
      const handleResize = () => {
        setWidth(window.innerWidth);
      };
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    return (
      <div>
        <h1>{width}</h1>
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setType(tab)}
            style={
              type === tab ? { color: 'white', backgroundColor: 'black' } : {}
            }
          >
            {tab}
          </button>
        ))}
        <input
          aria-label='none'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <ul>
          {posts.map((post: any) => (
            <li key={post.id}>{post.title || post.name}</li>
          ))}
        </ul>

        {showGoToTop && (
          <button
            style={{ position: 'fixed', right: 20, bottom: 20 }}
            onClick={() => window.scrollTo(0, 0)}
          >
            Go to top
          </button>
        )}
      </div>
    );
  };

  const Content2: React.FC = () => {
    const [countdown, setCountdown] = useState(180);
    const [count, setCount] = useState(1);
    const [avatar, setAvatar] = useState<any>();
    const [value, setValue] = useState<any>();

    // useEffect(() => {
    //   const timerId = setInterval(() => {
    //     setCountdown((prev) => {
    //       const result = prev - 1;
    //       if (result === 0) {
    //         clearInterval(timerId);
    //       }
    //       return result;
    //     });

    //     console.log('Countdown...');
    //   }, 1000);

    //   return () => clearInterval(timerId);
    // }, []);

    useEffect(() => {
      console.log(`Mounted or Re-render lần ${count}`);

      return () => {
        console.log(`Cleanup lần ${count}`);
      };
    }, [count]);

    const Counter = () => {
      return (
        <>
          <h1>{count}</h1>
          <button onClick={() => setCount(count + 1)}>Click me!</button>
        </>
      );
    };

    useEffect(() => {
      return () => {
        avatar && URL.revokeObjectURL(avatar.preview);
      };
    }, [avatar]);

    const clearBeforeChoose = (event: any) => {
      event.target.value = null;
    };

    const handlePreviewAvatar = (event: any) => {
      const file = event.target.files[0];

      console.log(file);

      file.preview = URL?.createObjectURL(file);

      setAvatar(file);
    };

    return (
      <div>
        {/* <h1>{countdown}</h1> */}
        {/* <Counter /> */}

        <input
          aria-label='none'
          //multiple
          type='file'
          //onClick={clearBeforeChoose}
          onChange={handlePreviewAvatar}
        />

        {avatar && <img src={avatar.preview} alt='avatar' width='80%' />}
      </div>
    );
  };

  const Content3: React.FC = () => {
    //Fake comments (Learn useEffect)
    function emitComment(id: any) {
      setInterval(() => {
        window.dispatchEvent(
          new CustomEvent(`lesson-${id}`, {
            detail: `Nội dung comment của lesson ${id}`,
          })
        );
      }, 2000);
    }

    emitComment(1);
    emitComment(2);
    emitComment(3);

    const lessons = [
      {
        id: 1,
        name: 'ReactJS là gì? Tại sao nên học ReactJS?',
      },

      {
        id: 2,
        name: 'SPA/MPA gì?',
      },

      {
        id: 3,
        name: 'Arrow function',
      },
    ];

    const [lessonId, setLessonId] = useState(1);

    useEffect(() => {
      const handleComment = ({ detail }: any) => {
        console.log(detail);
      };

      window.addEventListener(`lesson-${lessonId}`, handleComment);
      return () => {
        window.removeEventListener(`lesson-${lessonId}`, handleComment);
      };
    }, [lessonId]);

    return (
      <>
        <ul>
          {lessons.map((lesson) => (
            <li
              key={lesson.id}
              style={{ color: lessonId === lesson.id ? 'red' : 'black' }}
              onClick={() => setLessonId(lesson.id)}
            >
              {lesson.name}
            </li>
          ))}
        </ul>
      </>
    );
  };

  return (
    <div style={{ padding: 32 }}>
      <button onClick={() => setShow(!show)}>Tonggle</button>
      {/* {show && <Content />} */}
      {/* {show && <Content2 />} */}
      {show && <Content3 />}
    </div>
  );
};

export default UseEffect;
