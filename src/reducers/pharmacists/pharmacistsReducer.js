import {
  PHARMACISTS_SEARCH_SUCCESS
} from '../../actions/actionTypes';

export default function pharmacists(state = {}, action) {
  switch (action.type) {
    case PHARMACISTS_SEARCH_SUCCESS:
      return action.payload.pharmacists;
    default:
      return state;
  }
}
