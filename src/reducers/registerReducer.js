import {
  REGISTER_FAILURE,
  REGISTER_PATIENT,
  REGISTER_PHARMACIST
} from "../actions/actionTypes";

function register(state = [], action) {
  switch (action.type) {
    case REGISTER_PATIENT:
      return [
        ...state,
        {
          test: "TEST_REGISTER_PAT"
        }
      ];
    case REGISTER_PHARMACIST:
      return [
        ...state,
        {
          text: "TEST_REGISTER_PHARMA"
        }
      ];
    case REGISTER_FAILURE:
      return [
        {
          error: action.payload.error
        }
      ];
    default:
      return state;
  }
}

export default register;
