function logger(reducer: any) {
  return (prevState: any, action: any) => {
    console.group(action.type || action);
    console.log('PreState:', prevState);
    console.log('Action:', action);

    const newState = reducer(prevState, action);

    console.log('NewState:', newState);
    console.groupEnd();

    return newState;
  };
}

export default logger;
