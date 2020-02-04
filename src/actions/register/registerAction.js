import { API_URL } from 'react-native-dotenv';
import {
  REGISTER_FAILURE,
  REGISTER_INFO,
  REGISTER_KIND,
  REGISTER_SUCCESS
} from '../actionTypes';

export const registerPatient = (
  firstName,
  lastName,
  userBirthDate,
  userGender,
  userEmail,
  userPassword,
  imageUri
) => (dispatch) => {
  console.log(imageUri);
  fetch(`${API_URL}/register/basic`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      firstName,
      lastName,
      birthDayDate: userBirthDate,
      gender: userGender,
      email: userEmail,
      password: userPassword,
      picture: imageUri
    })
  })
    .then((response) => {
      if (response.ok) {
        console.log('REGISTERED');
        console.log(response);
        dispatch(registerSuccess());
      } else {
        console.log('NOT REGISTERED');
        console.log('response ', response);
        dispatch(registerFailureEmail(response));
      }
      // dispatch(registerSuccess(response));
    })
    .catch((error) => {
      console.log(`error ${error}`);
      dispatch(registerFailure(error));
    });
};


export const registerPharmacist = (
  firstName,
  lastName,
  userBirthDate,
  userGender,
  userEmail,
  userPassword,
  professionalId,
  professionLabel,
  institutionName,
  address,
  postalCode,
  city
) => (dispatch) => fetch(`${API_URL}/register/pharmacist`, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    firstName,
    lastName,
    birthDayDate: userBirthDate,
    gender: userGender,
    email: userEmail,
    password: userPassword,
    professionalId,
    professionLabel,
    institutionName,
    address,
    postalCode,
    city
  })
})
  .then((response) => {
    if (response.ok) {
      console.log('REGISTERED');
      dispatch(registerSuccess());
    } else {
      console.log('NOT REGISTERED ERROR : ', response);
      dispatch(registerFailureEmail(response));
    }
  })
  .catch((error) => {
    console.log(`error ${error}`);
    dispatch(registerFailure(error));
  });

export const registerSuccess = () => ({
  type: REGISTER_SUCCESS,
});

export const registerFailure = (error) => ({
  type: REGISTER_FAILURE,
  error
});

export const registerFailureEmail = (response) => ({
  type: REGISTER_FAILURE,
  error: response
});

export const userRegisterKind = (userKind) => ({
  type: REGISTER_KIND,
  payload: {
    userKind
  }
});

export const userRegisterInfo = (userInfo, userGender) => ({
  type: REGISTER_INFO,
  payload: {
    userInfo,
    userGender
  }
});
