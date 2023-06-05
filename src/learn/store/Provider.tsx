import { useReducer } from 'react';
import Context from './Context';
import reducer, { initState } from './reducer';

import logger from './logger';

const Provider = ({ children }: any) => {
  const [state, dispatch] = useReducer<any>(logger(reducer), initState);

  return (
    <Context.Provider value={[state, dispatch]}>
      <div style={{ padding: '20px 30px' }}>{children}</div>
    </Context.Provider>
  );
};

export default Provider;
