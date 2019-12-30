
const errorReducer = (state = {}, action) => {
  const { type, error } = action;
  const matches = /(.*)_(REQUEST|SUCCESS|FAILURE|NOT_FOUND|CLEAR_ERROR)/.exec(type);

  if (type === 'CLEAR_ERROR') {
    return null;
  }

  // not a *_REQUEST / *_SUCCESS /  *_FAILURE actions, so we ignore them
  if (!matches) return state;

  const [, requestName, requestState] = matches;

  return {
    ...state,
    // This will add different error status with the type of their action
    // example CONNECT_USER_401 = true OR false
    // To get the result of it you only have to import this in your container
    // and do errorReducer('CONNECT_USER_401') for example
    [`${requestName}_401`]: requestState === 'FAILURE' && error.message === 'Request failed with status code 401',
    [`${requestName}_404`]: requestState === 'NOT_FOUND'
  };
};

export default errorReducer;