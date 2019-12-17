import {
  REGISTER_FAILURE, REGISTER_INFO, REGISTER_KIND,
  REGISTER_PATIENT,
  REGISTER_PHARMACIST
} from "../actions/actionTypes";

function register(state = {}, action) {
  switch (action.type) {
    case REGISTER_PATIENT:
      return {
          accessToken: undefined,
          refreshToken: undefined,
          account: undefined,
          error: undefined
        };
    case REGISTER_PHARMACIST:
      return {
          accessToken: undefined,
          refreshToken: undefined,
          account: undefined,
          error: undefined
        };
    case REGISTER_FAILURE:
      return {
          error: action.payload.error
        };
    case REGISTER_KIND:
      return {
          userKind: action.payload.userKind
        };
    case REGISTER_INFO:
      return {
        userInfo: action.payload.userInfo,
        userGender: action.payload.userGender,
      };
    default:
      return state;
  }
}

export default register;
