import { API_URL } from 'react-native-dotenv';
import axios from 'axios';
import {
  USER_PERSONNAL_INFO_SEARCH_FAILURE,
  USER_PERSONNAL_INFO_SEARCH_REQUEST,
  USER_PERSONNAL_INFO_SEARCH_SUCCESS,
  UPDATE_USER_LOCAL_ACCOUNT
} from './userActionTypes';


export const userUpdateRemoteAccount = (account) => {
  console.log("accuuu"+ `${API_URL}/accounts/${account.id}` )
  function thunk(dispatch) {
    dispatch({ type: USER_PERSONNAL_INFO_SEARCH_REQUEST });
    return axios
      .put(`${API_URL}/accounts/${account.id}`, {
        params: {
          firstName: account.firstName,
          lastName: account.lastName,
          birthDayDate: account.birthDayDate,
          newEmail: account.newEmail,
          oldPassword: account.firstName,
          newPassword: account.newPassword,
          picture: account.picture
        }
      })
      .then((response) => {
        console.log("respuu"+ JSON.stringify(response.data))
        dispatch(userUpdateSuccess(response.data));
      })
      .catch((error) => {
        console.log("erruuuu"+ JSON.stringify(error))
        dispatch(userUpdateFailure(error));
      });
  }
  // thunk.interceptInOffline = true;
  thunk.meta = {
    retry: true
  };
  return thunk;
};

export const userUpdateSuccess = (account) => ({
  type: USER_PERSONNAL_INFO_SEARCH_SUCCESS,
  payload: {
    account
  }
});

export const userUpdateFailure = (error) => ({
  type: USER_PERSONNAL_INFO_SEARCH_FAILURE,
  error
});

export const userUpdateLocalAccount = (element, value) => ({
  type: UPDATE_USER_LOCAL_ACCOUNT,
  element,
  value
});
