/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
/*
 * In this script we manage the session of the user with the accessToken and refreshToken
 *
 */
import axios from 'axios';
import { API_URL } from 'react-native-dotenv';
import {
  refreshToken, userAuthFailure, tokenVerified
} from '../actions/userAction';

// import { store } from '../../store';


const checkTokenGate = (store) => (next) => (action) => {
  switch (action.type) {
    case 'USER_PERSONNAL_INFO_SEARCH_REQUEST'
    || 'USER_PERSONNAL_INFO_UPDATE_REQUEST'
    || 'CONNECT_USER_SUCCESS'
    || 'REGISTER_PHARMACIST': {
      checkToken(store, next, action);
      break;
    }
    default:
      next(action);
  }
};

const checkToken = (store, next, action) => {
  const state = store.getState();
  if (!state.user.accessToken) {
    store.dispatch(userAuthFailure);
    return next(action);
  }
  // In case it is the connection and accessToken has not been added to the header
  axios.defaults.headers.Authorization = `Bearer ${state.user.accessToken}`;
  // If there is no account it means that the user is not connected
  state.user.account.id
    ? axios
      .get(`${API_URL}/accounts/${state.user.account.id}`) // This line is meant to hit the API
      .then(() => {
        console.log('bahhh ca marchcheh');
        store.dispatch(tokenVerified),
        next(action);
      })
      .catch(() => {
        RefreshToken(store)
          .then((response) => {
            if (response.success) {
              store.dispatch(tokenVerified),
              next(action);
            } else {
              store.dispatch(userAuthFailure),
              next(action);
            }
          })
          .catch(() => console.log('pas de refressssh'),
            store.dispatch(userAuthFailure),
            next(action));
      })
    : (store.dispatch(userAuthFailure),
    next(action)
    );
};

export function RefreshToken(store) {
  const state = store.getState();

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
