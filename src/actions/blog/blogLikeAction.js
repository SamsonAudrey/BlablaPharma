import { API_URL } from 'react-native-dotenv';
import axios from 'axios';
import {
  BLOG_SEARCH_FAILURE
} from '../actionTypes';
import { blogSearch } from './blogSearchAction';

export const blogLike = (
  id
) => {
  function thunk(dispatch) {
    const TEMPO_URL = 'https://api.staging.blablapharma.fr';
    return axios
      .post(`${API_URL}/articles/${id}/likes`)
      .then((response) => {
        if (response.data.length !== 0) {
          dispatch(blogSearch(''));
        } else {
          //console.log('NOT LIKED');
        }
      })
      .catch((error) => {
        dispatch(blogSearchFailure(error));
        //console.log(`ERROR : ${error}`);
      });
  }
  // thunk.interceptInOffline = true;
  thunk.meta = {
    retry: true
  };
  return thunk;
};


export const blogDislike = (
  id
) => {
  function thunk(dispatch) {
    const TEMPO_URL = 'https://api.staging.blablapharma.fr';
    return axios
      .delete(`${TEMPO_URL}/articles/${id}/likes`)
      .then((response) => {
        if (response.data.length !== 0) {
          dispatch(blogSearch(''));
        } else {
          //console.log('NOT DISLIKED');
        }
      })
      .catch((error) => {
        dispatch(blogSearchFailure(error));
        //console.log(`ERROR : ${error}`);
      });
  }
  // thunk.interceptInOffline = true;
  thunk.meta = {
    retry: true
  };
  return thunk;
};

export const blogSearchFailure = (error) => ({
  type: BLOG_SEARCH_FAILURE,
  error
});
