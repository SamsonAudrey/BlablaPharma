/*
 * In this script we manage the session of the user with the accessToken and refreshToken
 *
 */
import axios from "axios";
import { API_URL } from "react-native-dotenv";
import { store } from "../../store";
import { refreshToken, logout } from "../actions/userAction";

export function checkToken() {
  const state = store.getState();

  return new Promise((resolve, reject) => {
    console.log("rrr" + JSON.stringify(state));
    // In case it is the connection and accessToken has not been added to the header
    state.user.accessToken
      ? (axios.defaults.headers.Authorization =
          "Bearer " + state.user.accessToken)
      : null;
    // If there is no account it means that the user is not connected
    state.user.account.id
      ? axios
          .get(`${API_URL}/accounts/${state.user.account.id}`) // This line is meant to hit the API
          .then(() => {
            resolve();
          })
          .catch(() => {
            RefreshToken()
              .then(response => {
                if (response.success) {
                  resolve();
                } else reject(new TypeError("Token Refreshing didn't worked"));
              })
              .catch(err => reject(err));
          })
      : reject(new TypeError("The user is not connected"));
  });
}

export function RefreshToken() {
  const state = store.getState();

  return new Promise((resolve, reject) => {
    state.user.refreshToken
      ? store
          .dispatch(refreshToken(state.user.refreshToken)) //dispatch necessaire?
          .then(
            () => {
              const newState = store.getState();
              console.log("newstate" + JSON.stringify(newState));
              const newAccessTokenValue = newState.user.accessToken;
              console.log("new refresh token : " + newAccessTokenValue);
              axios.defaults.headers.Authorization =
                "Bearer " + newAccessTokenValue;
              resolve({ success: true });
            },
            err => {
              reject(err);
            }
          )
          .catch(err => {
            reject(err);
          })
      : reject(new TypeError("Doesn't have any account id"));
  });
}

export function Logout() {
  store.dispatch(logout());
}
