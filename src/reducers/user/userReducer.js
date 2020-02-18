
import {
  CONNECT_USER_SUCCESS,
  CONNECT_USER_FAILURE,
  REFRESH_TOKEN_SUCCESS,
  REFRESH_TOKEN_FAILURE,
  USER_PERSONNAL_INFO_SEARCH_SUCCESS,
  LOGOUT, USER_PERSONNAL_INFO_PHARMA_SEARCH_SUCCESS
} from '../../actions/user/userActionTypes';

export default function user(state = {}, action) {
  console.log("action type" + action.type + JSON.stringify(state))
  switch (action.type) {
    case CONNECT_USER_SUCCESS:
      return {
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
        account: action.payload.account,
        pharmacistAccount: action.payload.pharmacistAccount,
      };
    case CONNECT_USER_FAILURE:
      return {
        accessToken: state.accessToken,
        refreshToken: state.refreshToken,
        account: state.account,
        pharmacistAccount: state.pharmacistAccount,

      };
    case REFRESH_TOKEN_SUCCESS:
      return {
        accessToken: action.payload.accessToken,
        refreshToken: state.refreshToken,
        account: state.account,
        pharmacistAccount: state.pharmacistAccount,
      };
    case REFRESH_TOKEN_FAILURE:
      return {
        accessToken: state.accessToken,
        refreshToken: state.refreshToken,
        account: state.account,
        pharmacistAccount: state.pharmacistAccount,
      };
    case USER_PERSONNAL_INFO_SEARCH_SUCCESS:
      return {
        accessToken: state.accessToken,
        refreshToken: state.refreshToken,
        account: action.payload.account,
        pharmacistAccount: state.pharmacistAccount,
      };
    case USER_PERSONNAL_INFO_PHARMA_SEARCH_SUCCESS:
      return {
        accessToken: state.accessToken,
        refreshToken: state.refreshToken,
        account: state.account,
        pharmacistAccount: action.payload.pharmacistAccount,
      };
    case LOGOUT:
      return {
        accessToken: undefined,
        refreshToken: undefined,
        account: undefined,
        pharmacistAccount: undefined
      };
    default:
      return state;
  }
}
