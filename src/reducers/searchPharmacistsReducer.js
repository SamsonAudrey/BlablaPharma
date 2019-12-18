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
        filter: state.filter
      };
    case SEARCH_UPDATE_PROFESSION_FILTER:
      return {
        text: state.text,
        filter: {
          gender: state.gender,
          profession: action.profession
        }
      };
    case SEARCH_UPDATE_GENDER_FILTER:
      console.log(`genderr${action.gender}`);
      return {
        text: state.text,
        filter: {
          genderFilter: action.gender,
          professionFilter: state.profession
        }
      };
    default:
      return state;
  }
}
