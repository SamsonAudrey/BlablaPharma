import { API_URL } from 'react-native-dotenv';
import {
  CONNECT_USER_SUCCESS,
  REGISTER_FAILURE,
  REGISTER_INFO,
  REGISTER_KIND
} from '../actionTypes';

export const registerPatient = (
  firstName,
  lastName,
  userBirthDate,
  userGender,
  userEmail,
  userPassword
) => (dispatch) => fetch(`${API_URL}/register/basic`, {
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
    password: userPassword
  })
})
  .then((response) => {
    if (response.ok) {
      console.log('REGISTERED');
    } else {
      console.log('NOT REGISTERED');
      console.log('response ', response);
    }
    // dispatch(registerSuccess(response));
  })
  .catch((error) => {
    console.log(`error ${error}`);
    dispatch(registerFailure(error));
  });

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
    } else {
      console.log('NOT REGISTERED');
      console.log('response ', response);
    }
  })
  .catch((error) => {
    console.log(`error ${error}`);
    dispatch(registerFailure(error));
  });

export const registerFailure = (error) => ({
  type: REGISTER_FAILURE,
  payload: {
    error
  }
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