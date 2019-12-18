/* eslint-disable linebreak-style */
import { REGISTER_INFO, REGISTER_KIND } from '../actions/actionTypes';


export default function navigation(state = {}, action) {
  switch (action.type) {
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
