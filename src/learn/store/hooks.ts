import { useContext } from 'react';
import Context from './Context';

const useStore = () => {
  const [state, dispatch] = useContext<any>(Context);

  return [state, dispatch];
};

export { useStore };
