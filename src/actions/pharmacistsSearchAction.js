import { API_URL } from 'react-native-dotenv';
import axios from 'axios';
import {
  SEARCH_UPDATE_TEXT,
  SEARCH_UPDATE_PROFESSION_FILTER,
  SEARCH_UPDATE_GENDER_FILTER,
  PHARMACISTS_SEARCH_SUCCESS,
  PHARMACISTS_SEARCH_FAILURE,
  PHARMACISTS_SEARCH_NOT_FOUND,
  PHARMACISTS_SEARCH_REQUEST
} from './actionTypes';

export const pharmacistsSearch = (
  qValue,
  genderValue,
  professionLabelValue,
  limitValue = 50,
) => {
  function thunk(dispatch) {
    const TEMPO_URL = 'https://api.blablapharma.fr';
    dispatch({ type: PHARMACISTS_SEARCH_REQUEST });
    return axios
      .get(`${TEMPO_URL}/pharmacists/search`, {
        params: {
          ...((qValue !== undefined) ? { q: qValue } : {}),
          ...((genderValue !== undefined) ? { gender: genderValue } : {}),
          ...((professionLabelValue !== undefined) ? { professionLabel: professionLabelValue } : {}),
          ...((limitValue !== undefined) ? { limit: limitValue } : {}),
        }
      })
      .then((response) => {
        if (response.data.length !== 0) {
          dispatch(pharmacistSsearchSuccess(response.data));
        } else {
          dispatch(pharmacistsSearchNotFound());
        }
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

export const pharmacistsSearchNotFound = () => ({
  type: PHARMACISTS_SEARCH_NOT_FOUND
});

export const pharmacistSsearchFailure = (error) => ({
  type: PHARMACISTS_SEARCH_FAILURE,
  error
});

export const updateSearchText = (text) => ({
  type: SEARCH_UPDATE_TEXT,
  text
});

export const updateSearchGenderFilter = (gender) => ({
  type: SEARCH_UPDATE_GENDER_FILTER,
  gender
});

export const updateSearchProfessionFilter = (profession) => ({
  type: SEARCH_UPDATE_PROFESSION_FILTER,
  profession
});
