/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';

const UseState: React.FC = () => {
  const orders = [100, 200, 300];

  const notReRenderTotal = () => {
    const total = orders.reduce((total, curr) => total + curr);

    // console.log(total);

    return total;
  };

  const [counter, setCounter] = useState(notReRenderTotal);

  const handleIncrease = () => {
    setCounter(counter + 1);
  };

  const RenderTotal = () => {
    return (
      <>
        <h1>{counter}</h1>
        <button onClick={handleIncrease}>Increase</button>
      </>
    );
  };

  //----------------------------------------------------------------------------

  const gifts = ['CPU i9', 'RAM 32GB RGB', 'RGB Keyboard'];

  const [gift, setGift] = useState<any>();

  const randomGift = () => {
    const index = Math.floor(Math.random() * gifts.length);

    setGift(gifts[index]);
  };

  const RenderGift = () => {
    return (
      <>
        <h1>{gift || 'Chưa có phần thưởng'}</h1>
        <button onClick={randomGift}>Lấy thưởng</button>
      </>
    );
  };

  //----------------------------------------------------------------------------

  const courses = [
    { id: 1, name: 'Javascript' },
    { id: 2, name: 'HTML,CSS' },
    { id: 3, name: 'Native' },
  ];

  const [checked, setChecked] = useState<any>();
  const [checked2, setChecked2] = useState<any>([]);

  const handleSubmit = () => {
    console.log({ id: checked });
  };

  const handleSubmit2 = () => {
    console.log(checked2);
  };

  const RenderCourse = () => {
    return (
      <>
        {courses.map((course) => (
          <div key={course.id}>
            <input
              aria-label='none'
              type='radio'
              checked={checked === course.id}
              onChange={() => setChecked(course.id)}
            />
            {course.name}
          </div>
        ))}

        <button onClick={handleSubmit}>Register</button>
      </>
    );
  };

  const isChecked = (id: number) => {
    return checked2.includes(id) ? true : false;
  };

  const handleCheck = (id: number) => {
    setChecked2((prev: any) => {
      return isChecked(id)
        ? checked2.filter((item: number) => item !== id)
        : [...prev, id];
    });
  };

  const RenderCourse2 = () => {
    return (
      <>
        {courses.map((course) => (
          <div key={course.id}>
            <input
              aria-label='none'
              type='checkbox'
              checked={isChecked(course.id)}
              onChange={() => handleCheck(course.id)}
            />
            {course.name}
          </div>
        ))}

        <button onClick={handleSubmit2}>Register</button>
      </>
    );
  };

  //----------------------------------------------------------------------------

  const getJobs = () => {
    const storeJobs = JSON.parse(localStorage.getItem('jobs')!) || [];
    console.log(storeJobs);
    return storeJobs;
  };

  const [job, setJob] = useState<any>('');
  const [jobs, setJobs] = useState<any>(getJobs);

  const handleAdd = () => {
    setJobs((prev: any) => {
      const newJobs = [...prev, job];

      const jsonJobs = JSON.stringify(newJobs);
      localStorage.setItem('jobs', jsonJobs);

      return newJobs;
    });
    setJob('');
  };

  const TodoList = () => {
    return (
      <>
        <input
          aria-label='none'
          value={job}
          onChange={(e) => setJob(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>

        <ul>
          {jobs!.map((item: string, index: number) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </>
    );
  };

  return (
    <div style={{ padding: 32 }}>
      {/* <RenderTotal /> */}
      {/* <RenderGift /> */}
      {/* <RenderCourse /> */}
      {/* <RenderCourse2 /> */}
      <TodoList />
    </div>
  );
};

export default UseState;
