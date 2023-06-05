import * as Actions from './constants';

const getTodos = () => {
  const storeTodos = JSON.parse(localStorage.getItem('todos')!) || [];
  return storeTodos;
};

const setTodos = (todos: any) => {
  const json = JSON.stringify(todos);
  localStorage.setItem('todos', json);
};

const initState = {
  todos: getTodos(),
  todoInput: '',
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case Actions.SET_TODO_INPUT:
      return {
        ...state,
        todoInput: action.payload,
      };

    case Actions.CREATE_TODO_INPUT:
      const newTodos = [...state.todos, action.payload];

      setTodos(newTodos);

      return {
        ...state,
        todos: newTodos,
      };

    case Actions.REMOVED_TODO_INPUT:
      const todos = [...state.todos];

      todos.splice(action.payload, 1);

      setTodos(todos);

      return {
        ...state,
        todos: todos,
      };

    case Actions.UPDATE_TODO_INPUT:
      const updateTodos = [...state.todos];

      updateTodos[action.payload] = state.todoInput;

      setTodos(updateTodos);

      return {
        ...state,
        todos: updateTodos,
      };

    default:
      throw new Error(`Invalid action ${action.type}`);
  }
};

export { initState };

export default reducer;
