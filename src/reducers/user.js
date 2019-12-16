import {
  CONNECT_USER,
  CONNECT_USER_FAILURE,
  REFRESH_TOKEN_SUCCESS,
  REFRESH_TOKEN_FAILURE,
  LOGOUT
} from "../actions/actionTypes";

export default function user(state = {}, action) {
  switch (action.type) {
    case CONNECT_USER:
      return {
        accessToken: action.payload.accesstoken + 5,
        refreshToken: action.payload.refreshToken,
        account: action.payload.account
      };
    case CONNECT_USER_FAILURE:
      return {
        accessToken: state.accesstoken,
        refreshToken: state.refreshToken,
        account: state.account,
        error: action.payload.error
      };
    case REFRESH_TOKEN_SUCCESS:
      return {
        accessToken: action.payload.accesstoken,
        refreshToken: state.refreshToken,
        account: state.account
      };
    case REFRESH_TOKEN_FAILURE:
      return {
        accessToken: state.accesstoken,
        refreshToken: state.refreshToken,
        account: state.account,
        error: action.payload.error
      };
    case LOGOUT:
      return {
        accessToken: undefined,
        refreshToken: undefined,
        account: undefined
      };
    default:
      return state;
  }
}
