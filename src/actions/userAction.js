import { CONNECT_USER, CONNECT_USER_FAILURE } from "./actionTypes";

import { API_URL } from "react-native-dotenv";
import axios from "axios";
import { store } from "../../store";
import {REGISTER_FAILURE} from "./actionType";

export const userAuth = (userEmail, userPassword) => {
    console.log("enter into user Auth" + userEmail + userPassword);
    console.log(`${API_URL}/login`);
    return fetch(`${API_URL}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        }
    })
        .then(response => {
            console.log("response ");
            store.dispatch(userAuthSuccess(response.data));
        })
        .catch(error => {
            console.log("error " + error);
            store.dispatch(userAuthFailure(error));
        });
    /*
    return axios
      .post(`${API_URL}/login`, {
        email: userEmail,
        password: userPassword
      })
      .then(response => {
        console.log("response ");
        store.dispatch(userAuthSuccess(response.data));
      })
      .catch(error => {
        console.log("error " + error);
        store.dispatch(userAuthFailure(error));
      });

    async function thunk(dispatch) {
      console.log("response ");
      return axios
        .post(`${API_URL}/login`, null, {
          params: {
            email: userEmail,
            password: userPassword
          }
        })
        .then(response => {
          dispatch(userAuthSuccess(response.data));
        })
        .catch(error => {
          dispatch(userAuthFailure(error));
        });
    }
    thunk.interceptInOffline = true;
    thunk.meta = {
      retry: true
    };
    return thunk;
    */
};

export const registerPatient = (firstName, lastName, userBirthDate, userGender, userEmail, userPassword) => {
    console.log("TRY TO REGISTER PATIENT");
    console.log(`${API_URL}/register/basic`);
    return fetch(`${API_URL}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        }
    })
        .then(response => {
            console.log("response ");
            // store.dispatch(registerSuccess(response.data));
        })
        .catch(error => {
            console.log("error " + error);
            store.dispatch(registerFailure(error));
        });
};

export const userAuthSuccess = (account, token, refreshToken) => {
    return {
        type: CONNECT_USER,
        payload: {
            token,
            refreshToken,
            account
        }
    };
};

export const userAuthFailure = error => {
    return {
        type: CONNECT_USER_FAILURE,
        payload: {
            error
        }
    };
};

export const registerSuccess = (test) => {
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
