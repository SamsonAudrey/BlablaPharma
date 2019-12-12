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
            body: {
                "firstName": "Jeanee",
                "lastName": "Dupontee",
                "birthDayDate": "2000-12-31",
                "gender": "male",
                "email": "mytest2@email.com",
                "password": "Pa$$Ex@mple1234"
            }
        })
            .then(response => {
                console.log("response ", response.data);
                dispatch(registerSuccess(response));
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
    return fetch(`http://localhost:1337/register/basic`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        }
    })
        .then(response => {
            console.log("response ", response);
            // store.dispatch(registerSuccess(response.data));
        })
        .catch(error => {
            console.log("error " + error);
            store.dispatch(registerFailure(error));
        });
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
