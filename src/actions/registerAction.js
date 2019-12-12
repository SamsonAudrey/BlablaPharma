import {CONNECT_USER, REGISTER_FAILURE} from "./actionTypes";
import {API_URL} from "react-native-dotenv";
import {store} from "../../store";

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
