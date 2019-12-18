import { ERROR_401, ERROR_OTHER, CLEAR_ERROR } from '../actions/actionTypes';


export default function error(state = {}, action) {
  switch (action.type) {
    case ERROR_401:
      return {
        error: '401'
      };
    case ERROR_OTHER:
      return {
        error: action.error.message
      };
    case CLEAR_ERROR:
      return {
        error: undefined
      };
    default:
      return state;
  }
}