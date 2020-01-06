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
  limitValue = 20,
) => {
  console.log(`rrrrrrrrrrrrrr${qValue
  }${genderValue
  }${professionLabelValue
  }${limitValue}`);
  function thunk(dispatch) {
    const TEMPO_URL = 'https://api.blablapharma.fr';
    dispatch({ type: PHARMACISTS_SEARCH_REQUEST });
    return axios
      .get(`${TEMPO_URL}/pharmacists/search`, {
        params: {
          ...((qValue !== undefined) ? { q: qValue } : { q: '' }),
          ...((genderValue !== undefined && genderValue !== '') ? { gender: genderValue } : {}),
          ...((professionLabelValue !== undefined && professionLabelValue !== '') ? { professionLabel: professionLabelValue } : {}),
          ...((limitValue !== undefined) ? { limit: limitValue } : {}),
        }
      })
      .then((response) => {
        if (response.data.length !== 0) {
          dispatch(pharmacistsSearchSuccess(response.data));
          console.log(`founnd${response.data}`);
        } else {
          console.log('not founnnnd');
          dispatch(pharmacistsSearchNotFound());
        }
      })
      .catch((error) => {
        dispatch(pharmacistsSearchFailure(error));
        console.log(`erroroororor${error}`);
      });
  }
  // thunk.interceptInOffline = true;
  thunk.meta = {
    retry: true
  };
  return thunk;
};

export const pharmacistsSearchSuccess = (pharmacists) => ({
  type: PHARMACISTS_SEARCH_SUCCESS,
  payload: {
    pharmacists
  }
});

export const pharmacistsSearchNotFound = () => ({
  type: PHARMACISTS_SEARCH_NOT_FOUND
});

export const pharmacistsSearchFailure = (error) => ({
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
