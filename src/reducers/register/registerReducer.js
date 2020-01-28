import {
  REGISTER_FAILURE,
  REGISTER_PATIENT,
  REGISTER_PHARMACIST, REGISTER_SUCCESS
} from '../../actions/actionTypes';

function register(state = {}, action) {
  switch (action.type) {
    case REGISTER_PATIENT:
      return {
      };
    case REGISTER_PHARMACIST:
      return {
      };
    case REGISTER_SUCCESS:
      return {
      };
    case REGISTER_FAILURE:
      return {
      };
    default:
      return state;
  }
}

export default register;
