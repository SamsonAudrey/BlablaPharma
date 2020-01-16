import {
  CONNECT_USER_SUCCESS,
  CONNECT_USER_FAILURE,
  REFRESH_TOKEN_SUCCESS,
  REFRESH_TOKEN_FAILURE,
  LOGOUT,
  TOKEN_VERIFIED
} from '../actions/user/userActionTypes';

export default function connection(state = {}, action) {
  switch (action.type) {
    case CONNECT_USER_SUCCESS || TOKEN_VERIFIED:
      console.log('1');
      return {
        isConnected: true
      };
    case CONNECT_USER_FAILURE:
      console.log('2');
      return {
        isConnected: false
      };
    case REFRESH_TOKEN_SUCCESS:
      console.log('3');
      return {
        isConnected: true
      };
    case REFRESH_TOKEN_FAILURE:
      console.log('4');
      return {
        isConnected: false
      };
    case LOGOUT:
      console.log('5');
      return {
        isConnected: false
      };
    default:
      return state;
  }
}
