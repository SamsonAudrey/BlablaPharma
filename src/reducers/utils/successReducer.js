
const successReducer = (state = {}, action) => {
  const { type } = action;
  const matches = /(.*)_(FAILURE|SUCCESS|REQUEST|NOT_FOUND)/.exec(type);

  // not a *_REQUEST / *_SUCCESS /  *_FAILURE actions, so we ignore them
  if (!matches) return state;

  if (type === 'CLEAR_SUCCESS') {
    return null;
  }

  const [, requestName, requestState] = matches;
  return {
    ...state,
    // Store whether a request is happening at the moment or not
    // e.g. will be true when receiving GET_TODOS_REQUEST
    //      and false when receiving GET_TODOS_SUCCESS / GET_TODOS_FAILURE
    [requestName]: requestState === 'SUCCESS',
  };
};

export default successReducer;