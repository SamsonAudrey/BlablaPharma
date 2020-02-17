import { API_URL } from 'react-native-dotenv';
import axios from 'axios';
import {
  BLOG_SEARCH_FAILURE,
  BLOG_SEARCH_NOT_FOUND,
  BLOG_SEARCH_REQUEST,
  BLOG_SEARCH_SUCCESS,
  SEARCH_UPDATE_TEXT_BLOG,
} from '../actionTypes';

export const blogSearch = (
  qValue,
  limitValue = 20,
  sortValue = 'createdAt'
) => {
  function thunk(dispatch) {
    const TEMPO_URL = 'https://api.staging.blablapharma.fr';
    dispatch({ type: BLOG_SEARCH_REQUEST });
    return axios
      .get(`${API_URL}/articles`, {
        params: {
          ...((qValue !== undefined) ? { q: qValue } : { q: '' }),
          ...((limitValue !== undefined) ? { limit: limitValue } : {}),
          ...((sortValue !== undefined) ? { sort: sortValue } : { sort: 'createdAt' }),
        }
      })
      .then((response) => {
        if (response.data.length !== 0) {
          dispatch(blogSearchSuccess(response.data));
        } else {
          //console.log('NOT FOUND');
          dispatch(blogSearchNotFound());
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

export const blogSearchSuccess = (blog) => ({
  type: BLOG_SEARCH_SUCCESS,
  payload: {
    blog
  }
});

export const blogSearchNotFound = () => ({
  type: BLOG_SEARCH_NOT_FOUND
});

export const blogSearchFailure = (error) => ({
  type: BLOG_SEARCH_FAILURE,
  error
});

export const updateSearchTextBlog = (text) => ({
  type: SEARCH_UPDATE_TEXT_BLOG,
  text
});
