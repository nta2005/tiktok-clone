/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useReducer, useRef } from 'react';
import { initCounter, initTodo } from './contants';
import { Actions, setJob, addJob, removeJob } from './actions';
import { reducerCounter, reducerTodo } from './reducers';

import logger from './logger';

//useReducer
// Dùng thay thế useState khi có những sate phức tạp
// Ví dụ như mảng có nhiều mảng con, object lồng object

//useState
// 1. Initstate: 0
// 2. Actions: Up (state+1), Down (state-1)

//useReducer
// 1. Initstate: 0
// 2. Actions: Up (state+1), Down (state-1)
// 3. Reducer
// 4. Dispatch

const UseReducer: React.FC = () => {
  document.title = 'Learn Hooks UseReducer';
  const Counter: React.FC = () => {
    const [count, dispatchCount] = useReducer(logger(reducerCounter), initCounter);

    return (
      <>
        <h1>{count}</h1>
        <button onClick={() => dispatchCount(Actions.DOWN_ACTION)}>
          Down
        </button>
        <button onClick={() => dispatchCount(Actions.UP_ACTION)}>Up</button>
      </>
    );
  };

  const Todo: React.FC = () => {
    const [state, dispatch] = useReducer(logger(reducerTodo), initTodo);

    const { job, jobs }: any = state;

    const inputRef = useRef<any>();

    const handleSubmit = () => {
      dispatch(addJob(job));
      dispatch(setJob(''));
      inputRef.current.focus();
    };

    const handleRemove = (index: number) => {
      dispatch(removeJob(index));
    };

    return (
      <>
        <h3>Todo</h3>
        <input
          ref={inputRef}
          aria-label='todo'
          value={job}
          placeholder='Enter todo...'
          onChange={(e: any) => {
            dispatch(setJob(e.target.value));
          }}
        />
        <button onClick={handleSubmit}>Add</button>

        <ul>
          {jobs.map((job: any, index: number) => (
            <li key={index}>
              {job} <span onClick={() => handleRemove(index)}>&times;</span>
            </li>
          ))}
        </ul>
      </>
    );
  };

  return (
    <div style={{ padding: '0 20px' }}>
      <Counter />
      <Todo />
    </div>
  );
};

export default UseReducer;
