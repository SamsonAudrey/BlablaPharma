import { API_URL } from 'react-native-dotenv';
import axios from 'axios';
import {
  USER_PERSONNAL_INFO_PHARMA_UPDATE_SUCCESS,
  USER_PERSONNAL_INFO_UPDATE_REQUEST,
  USER_PERSONNAL_INFO_UPDATE_FAILURE, USER_PERSONNAL_INFO_UPDATE_SUCCESS
} from './userActionTypes';

export const userUpdateRemoteAccount = (account) => {
  // console.log("accuuu"+ `${API_URL}/accounts/${JSON.stringify(account.newEmail)}`)
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
        console.log(`respuu${JSON.stringify(response.data)}`);
        dispatch(userUpdateSuccess(response.data));
      })
      .catch((error) => {
        console.log(`erruuuu${JSON.stringify(error)}`);
        dispatch(userUpdateFailure(error));
      });
  }
  // thunk.interceptInOffline = true;
  thunk.meta = {
    retry: true
  };
  return thunk;
};

export const userUpdateRemotePharmaAccount = (account) => {
  function thunk(dispatch) {
    dispatch({ type: USER_PERSONNAL_INFO_PHARMA_UPDATE_SUCCESS });
    return axios
      .put(`${API_URL}/pharmacists/${account.id}`, {
        professionalId: account.professionalId,
        professionLabel: account.professionLabel,
        institutionName: account.institutionName,
        address: account.address,
        postalCode: account.postalCode,
        city: account.city,
      })
      .then((response) => {
        dispatch(userPharmaUpdateSuccess(response.data));
      })
      .catch((error) => {
        console.log(`ERROR : ${error}`);
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

export const userPharmaUpdateSuccess = (pharmacistAccount) => ({
  type: USER_PERSONNAL_INFO_PHARMA_UPDATE_SUCCESS,
  payload: {
    pharmacistAccount
  }
});

export const userUpdateFailure = (error) => ({
  type: USER_PERSONNAL_INFO_UPDATE_FAILURE,
  error
});
