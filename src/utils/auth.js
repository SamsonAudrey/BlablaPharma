/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
/*
 * In this script we manage the session of the user with the accessToken and refreshToken
 *
 */
import axios from 'axios';
import { API_URL } from 'react-native-dotenv';
import {
  refreshToken, userAuthFailure
} from '../actions/userAction';
import { store } from '../../store';


axios.interceptors.request.use(
  (config) => {
    const state = store.getState();
    if (state.user.accessToken) {
      config.headers.Authorization = `Bearer ${state.user.accessToken}`;
    }
    // config.headers['Content-Type'] = 'application/json';
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

axios.interceptors.response.use((response) => {
  return response;
},
// Return a successful response back to the calling service

(error) => {
  // Return any error which is not due to authentication back to the calling service
  const originalRequest = error.config;
  if (error.response.status === 401 && originalRequest.url
        === `${API_URL}/auth/token`) {
    // It means the refreshToken is not valid and we must login again
    // So we must navigate to login
    // router.push('/login');
    console.log('il y a pb de refresh');
    return Promise.reject(error);
  }
  if (error.response.status === 401 && !originalRequest._retry) {
    originalRequest._retry = true;
    console.log('Y aaaa pbbbb 400000001111111111');
    checkToken()
      .then(
        () => axios(originalRequest),
        (err) => {
          Promise.reject(err);
        }
      );
  }
  return Promise.reject(error);
});

export async function getToken() {
  return checkToken()
    .then(
      () => {
        const state = store.getState();
        return state.user.accessToken;
      },
      (err) => err
    );
}

const checkToken = () => {
  const state = store.getState();
  return new Promise((resolve, reject) => {
    if (!state.user.accessToken) {
      store.dispatch(userAuthFailure);
      resolve();
    }
    // In case it is the connection and accessToken has not been added to the header

    // If there is no account it means that the user is not connected
    //console.log(`state: ${JSON.stringify(state)}`);
    // In case it is the connection and accessToken has not been added to the header
    state.user.accessToken
      ? (axios.defaults.headers.Authorization = `Bearer ${state.user.accessToken}`)
      : reject();
    // If there is no account it means that the user is not connected
    state.user.account.id
      ? axios
        .get(`${API_URL}/accounts/${state.user.account.id}`) // This line is meant to hit the API
        .then(() => {
          console.log('bahhh ca marchcheh');
          resolve();
        })
        .catch(() => {
          RefreshToken(state)
            .then((response) => {
              if (response.success) {
                resolve();
              } else reject(new TypeError("Token Refreshing didn't worked"));
            })
            .catch((err) => reject(err));
        })
      : reject(new TypeError('The user is not connected'));
  });
};

export function RefreshToken(state) {
  return new Promise((resolve, reject) => {
    state.user.refreshToken
      ? store
        .dispatch(refreshToken(state.user.refreshToken)) // dispatch necessaire?
        .then(
          () => {
            const newState = store.getState();
            console.log(`newstate : ${JSON.stringify(newState)}`);
            const newAccessTokenValue = newState.user.accessToken;
            console.log(`new refresh token : ${newAccessTokenValue}`);
            axios.defaults.headers.Authorization = `Bearer ${newAccessTokenValue}`;
            resolve({ success: true });
          },
          (err) => {
            reject(err);
          }
        )
        .catch((err) => {
          reject(err);
        })
      : reject(new TypeError("Doesn't have any account id"));
  });
}
