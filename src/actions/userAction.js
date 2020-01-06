
import { API_URL } from 'react-native-dotenv';
import axios from 'axios';
import {
  CONNECT_USER_SUCCESS,
  CONNECT_USER_FAILURE,
  REFRESH_TOKEN_SUCCESS,
  REFRESH_TOKEN_FAILURE,
  USER_PERSONNAL_INFO_SEARCH_FAILURE,
  USER_PERSONNAL_INFO_SEARCH_REQUEST,
  USER_PERSONNAL_INFO_SEARCH_SUCCESS,
  LOGOUT
} from './userActionTypes';

export const userAuth = (userEmail, userPassword) => {
  function thunk(dispatch) {
    return axios
      .post(`${API_URL}/login`, null, {
        params: {
          email: userEmail,
          password: userPassword
        }
      })
      .then((response) => {
        // console.log(JSON.stringify(response.data))
        dispatch(userAuthSuccess(response.data));
      })
      .catch((error) => {
        dispatch(userAuthFailure(error));
      });
  }
  // thunk.interceptInOffline = true;
  thunk.meta = {
    retry: true
  };
  return thunk;
};

export const userAuthSuccess = (auth) => ({
  type: CONNECT_USER_SUCCESS,
  payload: {
    accesstoken: auth.token,
    refreshToken: auth.refreshToken,
    account: auth.account
  }
});

export const userAuthFailure = (error) => ({
  type: CONNECT_USER_FAILURE,
  error
});

export const refreshToken = (refreshTokenValue) => {
  function thunk(dispatch) {
    return axios
      .post(`${API_URL}/auth/token`, null, {
        params: {
          refreshToken: refreshTokenValue
        }
      })
      .then((response) => {
        dispatch(refreshTokenSuccess(response.data));
      })
      .catch((error) => {
        dispatch(refreshTokenFailure(error));
      });
  }
  // thunk.interceptInOffline = true;
  thunk.meta = {
    retry: true
  };
  return thunk;
};

export const refreshTokenSuccess = (refresh) => ({
  type: REFRESH_TOKEN_SUCCESS,
  payload: {
    accesstoken: refresh.token,
  }
});

export const refreshTokenFailure = (error) => ({
  type: REFRESH_TOKEN_FAILURE,
  error
});

export const logout = () => ({
  type: LOGOUT
});

export const userSearch = (accountId) => {
  function thunk(dispatch) {
    dispatch({ type: USER_PERSONNAL_INFO_SEARCH_REQUEST });
    return axios
      .get(`${API_URL}/accounts/${accountId}`)
      .then((response) => {
        // console.log("yessssssssssssssss")
        dispatch(userSearchSuccess(response.data));
      })
      .catch((error) => {
        // console.log("errrrrrrrrr")
        dispatch(userSearchFailure(error));
      });
  }
  // thunk.interceptInOffline = true;
  thunk.meta = {
    retry: true
  };
  return thunk;
};

export const userSearchSuccess = (account) => ({
  type: USER_PERSONNAL_INFO_SEARCH_SUCCESS,
  payload: {
    account
  }
});

export const userSearchFailure = (error) => ({
  type: USER_PERSONNAL_INFO_SEARCH_FAILURE,
  error
});




