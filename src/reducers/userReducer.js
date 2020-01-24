
import {
  CONNECT_USER_SUCCESS,
  CONNECT_USER_FAILURE,
  REFRESH_TOKEN_SUCCESS,
  REFRESH_TOKEN_FAILURE,
  USER_PERSONNAL_INFO_SEARCH_SUCCESS,
  LOGOUT
} from '../actions/user/userActionTypes';

export default function user(state = {}, action) {
  switch (action.type) {
    case CONNECT_USER_SUCCESS:
      return {
        accessToken: action.payload.accessToken + 5,
        refreshToken: action.payload.refreshToken,
        account: action.payload.account
      };
    case CONNECT_USER_FAILURE:
      return {
        accessToken: state.accessToken,
        refreshToken: state.refreshToken,
        account: state.account
      };
    case REFRESH_TOKEN_SUCCESS:
      return {
        accessToken: action.payload.accessToken,
        refreshToken: state.refreshToken,
        account: state.account
      };
    case REFRESH_TOKEN_FAILURE:
      return {
        accessToken: state.accessToken,
        refreshToken: state.refreshToken,
        account: state.account
      };
    case USER_PERSONNAL_INFO_SEARCH_SUCCESS:
      return {
        accessToken: state.accessToken,
        refreshToken: state.refreshToken,
        account: action.payload.account
      };
    case LOGOUT:
      return {
        accessToken: undefined,
        refreshToken: undefined,
        account: undefined,
      };
    default:
      return state;
  }
}
