import * as Actions from './contants';

const setJob = (payload: any) => {
  return {
    type: Actions.SET_JOB,
    payload,
  };
};

const addJob = (payload: any) => {
  return {
    type: Actions.ADD_JOB,
    payload,
  };
};

const removeJob = (payload: any) => {
  return {
    type: Actions.REMOVE_JOB,
    payload,
  };
};

export { Actions, setJob, addJob, removeJob };
