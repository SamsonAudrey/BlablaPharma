import {
  BLABLAPHARMACISTS_SEARCH_SUCCESS
} from '../actions/actionTypes';

export default function blablapharmacists(state = {}, action) {
  switch (action.type) {
    case BLABLAPHARMACISTS_SEARCH_SUCCESS:
      return action.payload.blablapharmacists;
    default:
      return state;
  }
}
