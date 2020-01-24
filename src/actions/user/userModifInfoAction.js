import { API_URL } from 'react-native-dotenv';
import axios from 'axios';
import {
  USER_PERSONNAL_INFO_UPDATE_SUCCESS,
  USER_PERSONNAL_INFO_UPDATE_REQUEST,
  USER_PERSONNAL_INFO_UPDATE_FAILURE
} from './userActionTypes';

export const userUpdateRemoteAccount = (account) => {
  //console.log("accuuu"+ `${API_URL}/accounts/${JSON.stringify(account.newEmail)}`)
  function thunk(dispatch) {
    dispatch({ type: USER_PERSONNAL_INFO_UPDATE_REQUEST });
    return axios
      .put(`${API_URL}/accounts/${account.id}`, {
        firstName: account.firstName,
        lastName: account.lastName,
        birthDayDate: account.birthDayDate,
        newEmail: account.newEmail,
        gender: account.gender,
        oldPassword: account.oldPassword,
        newPassword: account.newPassword,
        picture: account.picture
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
  type: USER_PERSONNAL_INFO_UPDATE_SUCCESS,
  payload: {
    account
  }
});

export const userUpdateFailure = (error) => ({
  type: USER_PERSONNAL_INFO_UPDATE_FAILURE,
  error
});
