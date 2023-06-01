import React, { useState, useCallback } from 'react';

// useCallback giúp tránh tạo ra những hàm mới 
// một cách không cần thiết trong function component

// Component con sử dụng React memo thì
// props có định dạng tham chiếu phải dùng useCallback để
// tránh trường hợp re-render của component con

// Định dạng tham chiếu bao gồm: Object, Array, Function

const UseCallback: React.FC = () => {
  const [count, setCount] = useState(0);

  const handleIncrease = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div style={{ padding: 22 }}>
      <Content onIncrease={handleIncrease} />
      <h1>{count}</h1>
    </div>
  );
};

//Children component
const Content = React.memo((props: any) => {
  console.log('re-render');
  return (
    <>
      <h1>Hello Word</h1>
      <button onClick={props.onIncrease}>Click</button>
    </>
  );
});

export default UseCallback;
