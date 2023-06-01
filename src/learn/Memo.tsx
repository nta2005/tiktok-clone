/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';

const Memo: React.FC = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ padding: 22 }}>
      <Content />
      <h1>{count}</h1>
      <button onClick={increase}>Click</button>
    </div>
  );
};

const Content: React.FC = React.memo(() => {
  console.log('re-render');
  return <h1>Hello Word</h1>;
});

export default Memo;
