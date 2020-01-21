import {
  BLOG_SEARCH_SUCCESS,
} from '../actions/actionTypes';

export default function blog(state = {}, action) {
  switch (action.type) {
    case BLOG_SEARCH_SUCCESS:
      return action.payload.blog;
    default:
      return state;
  }
}
