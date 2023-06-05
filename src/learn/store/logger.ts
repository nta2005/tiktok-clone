function logger(reducer: any) {
  return (prevState: any, action: any) => {
    console.group(action.type || action);
    console.log('prevState:', prevState);
    console.log('Action:', action);

    const nextState = reducer(prevState, action);

    console.log('nextState:', nextState);
    console.groupEnd();

    return nextState;
  };
}

export default logger;
