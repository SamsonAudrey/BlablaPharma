import { API_URL } from 'react-native-dotenv';
import axios from 'axios';
import RNFetchBlob from 'react-native-fetch-blob';
import ImgToBase64 from 'react-native-image-base64';
import {
  USER_PERSONNAL_INFO_PHARMA_UPDATE_SUCCESS,
  USER_PERSONNAL_INFO_UPDATE_REQUEST,
  USER_PERSONNAL_INFO_UPDATE_FAILURE, USER_PERSONNAL_INFO_UPDATE_SUCCESS
} from './userActionTypes';
import { getToken } from '../../utils/auth';


export const userUpdateRemoteAccount = (account) => {
  console.log('TEST UPDATE PICTURE');
  console.log(account.picture);
  const { Blob } = RNFetchBlob.polyfill;
  const { fs } = RNFetchBlob;
  window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
  window.Blob = Blob;

  let photoBlob = null;
  const imageFile = RNFetchBlob.wrap(account.picture);


  function thunk(dispatch) {
    console.log('OUAISOUAISOUAIS');

    dispatch({ type: USER_PERSONNAL_INFO_UPDATE_REQUEST });
    Blob.build(imageFile, { type: 'image/jpg' })
      .then((blob) => {
        photoBlob = blob;
        return axios
          .put(`${API_URL}/accounts/${account.id}`, {
            firstName: account.firstName,
            lastName: account.lastName,
            birthDayDate: account.birthDayDate,
            newEmail: account.newEmail,
            gender: account.gender,
            oldPassword: account.oldPassword,
            newPassword: account.newPassword,
            picture: null
          })
          .then((response) => {
            console.log('TESSSST');

            photoBlob.close();

            console.log(`REPONSE ${JSON.stringify(response.data)}`);
            dispatch(userUpdateSuccess(response.data));
          })
          .catch((error) => {
            console.log(`ERROOOOOOR ${JSON.stringify(error)}`);
            dispatch(userUpdateFailure(error));
          });
      }).catch((error) => {
        console.log(`ERROR ${JSON.stringify(error)}`);
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
