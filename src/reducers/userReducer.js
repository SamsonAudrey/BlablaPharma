import { CONNECT_USER, CONNECT_USER_FAILURE } from "../actions/actionTypes";

export default function useReducer(state = {}, action) {
  switch (action.type) {
    case CONNECT_USER:
      return {
        accessToken: action.payload.token,
        refreshToken: action.payload.refreshToken
      };
    case CONNECT_USER_FAILURE:
      return {
        error: action.payload.error
      };
    default:
      return state;
  }
}
