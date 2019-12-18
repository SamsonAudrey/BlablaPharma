import {
  PHARMACISTS_SEARCH,
} from '../actions/actionTypes';

export default function pharmacists(state = {}, action) {
  switch (action.type) {
    case PHARMACISTS_SEARCH:
      return action.payload.pharmacists;
    default:
      return state;
  }
}
