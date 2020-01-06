import axios from 'axios';
import {
  SEARCH_UPDATE_TEXT,
  SEARCH_UPDATE_GENDER_FILTER,
  BLABLAPHARMACISTS_SEARCH_SUCCESS,
  BLABLAPHARMACISTS_SEARCH_FAILURE,
  BLABLAPHARMACISTS_SEARCH_NOT_FOUND,
  BLABLAPHARMACISTS_SEARCH_REQUEST
} from './actionTypes';

export const blablapharmacistsSearch = (
  qValue,
  genderValue,
  professionLabelValue,
  limitValue = 20,
) => {
  function thunk(dispatch) {
    const TEMPO_URL = 'https://api.blablapharma.fr';
    dispatch({ type: BLABLAPHARMACISTS_SEARCH_REQUEST });
    return axios
      .get(`${TEMPO_URL}/pharmacists/search`, {
        params: {
          ...((qValue !== undefined) ? { q: qValue } : {}),
          ...((genderValue !== undefined) ? { gender: genderValue } : {}),
          ...({ professionLabel: 'pharmacistBlablapharma' }),
          ...((limitValue !== undefined) ? { limit: limitValue } : {}),
        }
      })
      .then((response) => {
        if (response.data.length !== 0) {
          dispatch(blablapharmacistsSearchSuccess(response.data));
        } else {
          dispatch(blablapharmacistsSearchNotFound());
        }
      })
      .catch((error) => {
        dispatch(blablapharmacistSsearchFailure(error));
      });
  }
  // thunk.interceptInOffline = true;
  thunk.meta = {
    retry: true
  };
  return thunk;
};

export const blablapharmacistsSearchSuccess = (blablapharmacists) => ({
  type: BLABLAPHARMACISTS_SEARCH_SUCCESS,
  payload: {
    blablapharmacists
  }
});

export const blablapharmacistsSearchNotFound = () => ({
  type: BLABLAPHARMACISTS_SEARCH_NOT_FOUND
});

export const blablapharmacistSsearchFailure = (error) => ({
  type: BLABLAPHARMACISTS_SEARCH_FAILURE,
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
