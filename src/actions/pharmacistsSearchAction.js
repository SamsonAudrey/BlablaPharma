import { API_URL } from 'react-native-dotenv';
import axios from 'axios';
import {
  SEARCH_UPDATE_TEXT,
  SEARCH_UPDATE_PROFESSION_FILTER,
  SEARCH_UPDATE_GENDER_FILTER,
  PHARMACISTS_SEARCH_SUCCESS,
  ERROR_OTHER
} from './actionTypes';

export const pharmacistsSearch = (
  qValue,
  genderValue,
  professionLabelValue,
  limitValue = 50,
) => {
  function thunk(dispatch) {
    const TEMPO_URL = 'https://api.blablapharma.fr';
    return axios
      .get(`${TEMPO_URL}/pharmacists/search`, {
        params: {
          ...((qValue === undefined) ? { q: qValue } : {}),
          ...((genderValue === undefined) ? { gender: genderValue } : {}),
          ...((professionLabelValue === undefined) ? { professionLabel: professionLabelValue } : {}),
          ...((limitValue === undefined) ? { limit: limitValue } : {}),
        }
      })
      .then((response) => {
        dispatch(pharmacistSsearchSuccess(response.data));
      })
      .catch((error) => {
        dispatch(pharmacistSsearchFailure(error));
      });
  }
  // thunk.interceptInOffline = true;
  thunk.meta = {
    retry: true
  };
  return thunk;
};

export const pharmacistSsearchSuccess = (pharmacists) => ({
  type: PHARMACISTS_SEARCH_SUCCESS,
  payload: {
    pharmacists
  }
});

export const pharmacistSsearchFailure = (error) => ({
  type: ERROR_OTHER,
  error
});

export const updateSearchText = (text) => ({
  type: SEARCH_UPDATE_TEXT,
  text
});

export const updateSearchProfessionFilter = (profession) => ({
  type: SEARCH_UPDATE_PROFESSION_FILTER,
  profession
});

export const updateSearchGenderFilter = (gender) => ({
  type: SEARCH_UPDATE_GENDER_FILTER,
  gender
});
