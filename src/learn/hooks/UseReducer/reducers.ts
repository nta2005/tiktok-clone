import * as Actions from './contants';

const reducerCounter = (state: any, action: any) => {
  switch (action) {
    case Actions.UP_ACTION:
      return state + 1;
    case Actions.DOWN_ACTION:
      return state - 1;
    default:
      throw new Error('Unexpected action');
  }
};

const reducerTodo = (state: any, action: any) => {
  switch (action.type) {
    case Actions.SET_JOB:
      return {
        ...state,
        job: action.payload,
      };

    case Actions.ADD_JOB:
      return {
        ...state,
        jobs: [...state.jobs, action.payload],
      };

    case Actions.REMOVE_JOB:
      const newJobs = [...state.jobs];
      newJobs.splice(action.payload, 1);
      return {
        ...state,
        jobs: newJobs,
      };

    default:
      throw new Error(`Invalid action ${action.type}`);
  }
};

export { reducerCounter, reducerTodo };
