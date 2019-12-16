import { CONNECT_USER, REGISTER_FAILURE } from "./actionTypes";
import { API_URL } from "react-native-dotenv";
import { store } from "../../store";

export const registerPatient = (
  firstName,
  lastName,
  userBirthDate,
  userGender,
  userEmail,
  userPassword
) => {
  return dispatch => {
    return fetch(`${API_URL}/register/basic`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        birthDayDate: userBirthDate,
        gender: userGender,
        email: userEmail,
        password: userPassword
      })
    })
      .then(response => {
        if (response.ok) {
          console.log("REGISTERED");
        } else {
          console.log("response ", response);
        }
        // dispatch(registerSuccess(response));
      })
      .catch(error => {
        console.log("error " + error);
        dispatch(registerFailure(error));
      });
  };
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
) => {
  return dispatch => {
    return fetch(`${API_URL}/register/pharmacist`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        birthDayDate: userBirthDate,
        gender: userGender,
        email: userEmail,
        password: userPassword,
        professionalId: professionalId,
        professionLabel: professionLabel,
        institutionName: institutionName,
        address: address,
        postalCode: postalCode,
        city: city
      })
    })
      .then(response => {
        if (response.ok) {
          console.log("REGISTERED");
        } else {
          console.log("response ", response);
        }
        // store.dispatch(registerSuccess(response.data));
      })
      .catch(error => {
        console.log("error " + error);
        dispatch(registerFailure(error));
      });
  };
};

export const registerSuccess = test => {
  return {
    type: CONNECT_USER,
    payload: {
      test
    }
  };
};

export const registerFailure = error => {
  return {
    type: REGISTER_FAILURE,
    payload: {
      error
    }
  };
};
