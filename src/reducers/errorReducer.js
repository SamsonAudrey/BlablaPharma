import { ERROR_401, CLEAR_ERROR } from '../actions/actionTypes';


export default function error(state = {}, action) {
  switch (action.type) {
    case ERROR_401:
      console.log("lllll")
      return {
        error: '401'
      };
    case CLEAR_ERROR:
      return {
        error: undefined
      };
    default:
      return state;
  }
}