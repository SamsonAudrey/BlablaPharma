
import {
  CONNECT_USER_SUCCESS,
  CONNECT_USER_FAILURE,
  REFRESH_TOKEN_SUCCESS,
  REFRESH_TOKEN_FAILURE,
  USER_PERSONNAL_INFO_SEARCH_SUCCESS,
  LOGOUT,
  UPDATE_USER_LOCAL_ACCOUNT
} from '../actions/userActionTypes';

export default function user(state = {}, action) {
  switch (action.type) {
    case CONNECT_USER_SUCCESS:
      return {
        accessToken: action.payload.accesstoken,
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
        accessToken: action.payload.accesstoken,
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
        accessToken: state.accesstoken,
        refreshToken: state.refreshToken,
        account: action.payload.account
      };
    case UPDATE_USER_LOCAL_ACCOUNT:
      return {
        ...state,
        account: {
          ...state.account,
          [`${action.element}`]: action.value
        }
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
