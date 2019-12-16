import {
  CONNECT_USER,
  CONNECT_USER_FAILURE,
  REFRESH_TOKEN_SUCCESS,
  REFRESH_TOKEN_FAILURE,
  LOGOUT
} from "../actions/actionTypes";

export default function connection(state = {}, action) {
  switch (action.type) {
    case CONNECT_USER:
      return {
        isConnected: true
      };
    case CONNECT_USER_FAILURE:
      return {
        isConnected: false
      };
    case REFRESH_TOKEN_SUCCESS:
      return {
        isConnected: true
      };
    case REFRESH_TOKEN_FAILURE:
      return {
        isConnected: false
      };
    case LOGOUT:
      return {
        isConnected: false
      };
    default:
      return state;
  }
}
