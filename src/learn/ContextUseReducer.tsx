/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useRef } from 'react';
import { StoreProvider, useStore, Actions } from './store';

export default function ContextUseReducer() {
  document.title = 'Learn Context + useReducer';

  return (
    <StoreProvider>
      <App />
    </StoreProvider>
  );
}

const App: React.FC = () => {
  const [button, setButton] = useState<string>('Add');
  const [newIndex, setIndex] = useState(0);
  const [state, dispatch] = useStore();
  const { todos, todoInput } = state;

  const inputRef = useRef<any>();

  const handleSubmit = () => {
    if (todoInput) {
      dispatch(Actions.createTodoInput(todoInput));
      dispatch(Actions.setTodoInput(''));
      inputRef.current.focus();
    }
  };

  const handleRemove = (index: number) => {
    dispatch(Actions.removeTodoInput(index));
  };

  const handleEdit = (index: number) => {
    setButton('Update');
    setIndex(index);
    dispatch(Actions.setTodoInput(todos[index]));
    inputRef.current.focus();
  };

  const handleUpdate = (index: number) => {
    setButton('Add');
    dispatch(Actions.updateTodoInput(index));
    dispatch(Actions.setTodoInput(''));
    inputRef.current.focus();
  };

  return (
    <div>
      <input
        ref={inputRef}
        aria-label='input'
        value={todoInput}
        placeholder='Enter todo...'
        onChange={(e) => dispatch(Actions.setTodoInput(e.target.value))}
      />

      <button
        onClick={button === 'Add' ? handleSubmit : () => handleUpdate(newIndex)}
      >
        {button}
      </button>
      <ul>
        {todos.map((todo: any, index: any) => (
          <li key={index} style={{ margin: '5px' }}>
            {todo}
            <button style={{ marginLeft: 5 }} onClick={() => handleEdit(index)}>
              Edit
            </button>

            <button
              style={{ marginLeft: 5 }}
              onClick={() => handleRemove(index)}
            >
              &times;
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
