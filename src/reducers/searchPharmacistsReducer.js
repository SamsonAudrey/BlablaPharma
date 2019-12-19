import {
  SEARCH_UPDATE_PROFESSION_FILTER,
  SEARCH_UPDATE_GENDER_FILTER,
  SEARCH_UPDATE_TEXT
} from '../actions/actionTypes';

export default function searchPharmacists(state = {}, action) {
  switch (action.type) {
    case SEARCH_UPDATE_TEXT:
      return {
        text: action.text,
        gender: state.gender,
        profession: state.profession
      };
    case SEARCH_UPDATE_PROFESSION_FILTER:
      return {
        text: state.text,
        gender: state.gender,
        profession: action.profession
      };
    case SEARCH_UPDATE_GENDER_FILTER:
      return {
        text: state.text,
        gender: action.gender,
        profession: state.profession
      };
    default:
      return state;
  }
}
