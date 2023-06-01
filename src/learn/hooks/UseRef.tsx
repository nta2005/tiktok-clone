/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useRef, useEffect } from 'react';

//useReff
//Lưu các giá trị qua một tham chiếu bên ngoài

const UseRef: React.FC = () => {
  const [count, setCount] = useState(60);
  const timerRef = useRef<any>();
  const prevCount = useRef<any>();

  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  const handleStart = () => {
    timerRef.current = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);

    console.log('Start ->', timerRef.current);
  };

  const handleStop = () => {
    clearInterval(timerRef.current);
    console.log('Stop ->', timerRef.current);
  };

  console.log(count, prevCount.current);

  return (
    <div style={{ padding: 22 }}>
      <h1>{count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
};

export default UseRef;
