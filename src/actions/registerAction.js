import {CONNECT_USER, REGISTER_FAILURE} from "./actionTypes";
import { API_URL } from "react-native-dotenv";
import {store} from "../../store";

export const registerPatient = (firstName, lastName, userBirthDate, userGender, userEmail, userPassword) => {
    console.log("TRY TO REGISTER PATIENT");
    console.log(`http://localhost:1337/register/basic`);
    return dispatch => {
        return fetch(`http://localhost:1337/register/basic`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "firstName": firstName,
                "lastName": lastName,
                "birthDayDate": "2000-12-31",
                "gender": userGender,
                "email": userEmail,
                "password": "Pa$$Ex@mple1234"
            })
        })
            .then(response => {
                console.log("response ", response);
                // dispatch(registerSuccess(response));
            })
            .catch(error => {
                console.log("error " + error);
                dispatch(registerFailure(error));
            });
    }
};


export const registerPharmacist = (firstName, lastName, userBirthDate, userGender, userEmail, userPassword,
                                   professionalId, professionLabel,institutionName, address, postalCode, city) => {
    console.log("TRY TO REGISTER PHARMACIST");
    console.log(`http://localhost:1337/register/pharmacist`);
    return dispatch => {
        return fetch(`http://localhost:1337/register/pharmacist`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "firstName": firstName,
                "lastName": lastName,
                "birthDayDate": "2000-12-31",
                "gender": userGender,
                "email": userEmail,
                "password": "Pa$$Ex@mple1234",
                "professionalId": "123456789"+professionalId,
                "professionLabel": professionLabel,
                "institutionName": institutionName,
                "address": address,
                "postalCode": postalCode,
                "city": city
            })
        })
            .then(response => {
                console.log("response ", response);
                // store.dispatch(registerSuccess(response.data));
            })
            .catch(error => {
                console.log("error " + error);
                dispatch(registerFailure(error));
            });
    }
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
