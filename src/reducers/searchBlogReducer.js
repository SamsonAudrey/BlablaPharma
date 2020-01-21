import {
  SEARCH_UPDATE_TEXT_BLOG
} from '../actions/actionTypes';

export default function searchBlog(state = {}, action) {
  switch (action.type) {
    case SEARCH_UPDATE_TEXT_BLOG:
      return {
        text: action.text,
      };
    default:
      return state;
  }
}
