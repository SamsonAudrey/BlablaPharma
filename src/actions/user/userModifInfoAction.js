import { API_URL } from 'react-native-dotenv';
import axios from 'axios';
import RNFetchBlob from 'react-native-fetch-blob';
import {
  USER_PERSONNAL_INFO_PHARMA_UPDATE_SUCCESS,
  USER_PERSONNAL_INFO_UPDATE_REQUEST,
  USER_PERSONNAL_INFO_UPDATE_FAILURE, USER_PERSONNAL_INFO_UPDATE_SUCCESS
} from './userActionTypes';
import { getToken } from '../../utils/auth';


export const userUpdateRemoteAccount = (account) => {
  console.log('TEST UPDATE PICTURE');
  console.log(account.picture);
  console.log(RNFetchBlob.wrap(account.picture));
  async function thunk(dispatch) {
    console.log('OUAISOUAISOUAIS');

    const token = await getToken();
    dispatch({ type: USER_PERSONNAL_INFO_UPDATE_REQUEST });
    return axios
      .put(`${API_URL}/accounts/${account.id}`, {
        firstName: account.firstName,
        lastName: account.lastName,
        birthDayDate: account.birthDayDate,
        newEmail: account.newEmail,
        gender: account.gender,
        oldPassword: account.oldPassword,
        newPassword: account.newPassword
      })
      .then((response) => {
        console.log('TESSSST');
        console.log('OKOKOK');
        console.log(token);
        RNFetchBlob.fetch('PUT', `${API_URL}/accounts/${account.id}`, {
          Authorization: token,
          'Content-Type': 'application/octet-stream',
          body: JSON.stringify({
            picture: RNFetchBlob.wrap(account.picture)
          })
        })
          .then((resp) => {
            console.log('OK ', resp);
          })
          .catch((err) => {
            console.log('EROOR', err);
          });

        console.log(`REPONSE ${JSON.stringify(response.data)}`);
        dispatch(userUpdateSuccess(response.data));
      })
      .catch((error) => {
        console.log(`ERROR ${JSON.stringify(error)}`);
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
