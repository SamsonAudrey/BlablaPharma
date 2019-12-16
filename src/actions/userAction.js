import {
  CONNECT_USER,
  CONNECT_USER_FAILURE,
  REFRESH_TOKEN_SUCCESS,
  REFRESH_TOKEN_FAILURE,
  LOGOUT
} from "./actionTypes";

import { API_URL } from "react-native-dotenv";
import axios from "axios";

export const userAuth = (userEmail, userPassword) => {
  function thunk(dispatch) {
    return axios
      .post(`${API_URL}/login`, null, {
        params: {
          email: "nathan.traneau@wanadoo.fr",
          password: "Blabla97!"
        }
      })
      .then(response => {
        dispatch(userAuthSuccess(response.data));
      })
      .catch(error => {
        dispatch(userAuthFailure(error));
      });
  }
  //thunk.interceptInOffline = true;
  thunk.meta = {
    retry: true
  };
  return thunk;
};

export const userAuthSuccess = auth => {
  return {
    type: CONNECT_USER,
    payload: {
      accesstoken: auth.token,
      refreshToken: auth.refreshToken,
      account: auth.account
    }
    thunk.interceptInOffline = true;
    thunk.meta = {
      retry: true
    };
    return thunk;
    */
};

export const userAuthFailure = error => {
  return {
    type: CONNECT_USER_FAILURE,
    payload: {
      error: error.message
    }
  };
};

export const refreshToken = refreshTokenValue => {
  function thunk(dispatch) {
    return axios
      .post(`${API_URL}/auth/token`, null, {
        params: {
          refreshToken: refreshTokenValue
        }
      })
      .then(response => {
        dispatch(refreshTokenSuccess(response.data));
      })
      .catch(error => {
        dispatch(refreshTokenFailure(error));
      });
  }
  //thunk.interceptInOffline = true;
  thunk.meta = {
    retry: true
  };
  return thunk;
};

export const refreshTokenSuccess = refresh => {
  return {
    type: REFRESH_TOKEN_SUCCESS,
    payload: {
      accesstoken: refresh.token
    }
  };
};

export const refreshTokenFailure = error => {
  return {
    type: REFRESH_TOKEN_FAILURE,
    payload: {
      error: error.message
    }
  };
};

export const logout = () => {
  return {
    type: LOGOUT
  };
};
