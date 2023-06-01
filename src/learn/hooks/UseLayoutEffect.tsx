/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect, useLayoutEffect } from 'react';

//useEffect
//1. Cập nhật lại state
//2. Cập nhật DOM (mutated)
//3. Render lại UI
//4. Gọi cleanup function nếu deps thay đổi
//5. Gọi useEffect callback

//useLayoutEffect
//1. Cập nhật lại state
//2. Cập nhật DOM (mutated)
//3. Gọi cleanup function nếu deps thay đổi (sync)
//4. Gọi useLayoutEffect callback (sync)
//5. Render lại UI

const UseLayoutEffect: React.FC = () => {
  const [count, setCount] = useState(0);

  //   useEffect(() => {
  //     count > 3 && setCount(0);
  //   }, [count]);

  useLayoutEffect(() => {
    count > 3 && setCount(0);
  }, [count]);

  const handleRun = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ padding: 32 }}>
      <h1>{count}</h1>
      <button onClick={handleRun}>Run</button>
    </div>
  );
};

export default UseLayoutEffect;
