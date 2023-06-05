import * as Actions from './constants';

const setTodoInput = (payload: any) => ({
  type: Actions.SET_TODO_INPUT,
  payload,
});

const createTodoInput = (payload: any) => ({
  type: Actions.CREATE_TODO_INPUT,
  payload,
});

const removeTodoInput = (payload: any) => ({
  type: Actions.REMOVED_TODO_INPUT,
  payload,
});

const updateTodoInput = (payload: any) => ({
  type: Actions.UPDATE_TODO_INPUT,
  payload,
});

export { setTodoInput, createTodoInput, removeTodoInput, updateTodoInput };
