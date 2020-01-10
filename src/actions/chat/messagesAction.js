import { API_URL } from 'react-native-dotenv';
import axios from 'axios';
import {
  SEND_MESSAGE_FAILURE,
  SEND_MESSAGE_REQUEST,
  SEND_MESSAGE_SUCCESS,
  GET_MESSAGES_FAILURE,
  GET_MESSAGES_REQUEST,
  GET_MESSAGES_SUCCESS
} from './chatActionTypes';

export const sendMessage = (conversationId,
  type,
  content) => {
  function thunk(dispatch) {
    dispatch({ type: SEND_MESSAGE_REQUEST });
    return axios
      .post(`${API_URL}/conversations/${conversationId}/messages`, null, {
        params: {
          type,
          content
        }
      })
      .then((response) => {
       console.log(JSON.stringify(response.data))
        dispatch(sendMessageSuccess(response.data));
      })
      .catch((error) => {
        dispatch(sendMessageFailure(error));
      });
  }
  // thunk.interceptInOffline = true;
  thunk.meta = {
    retry: true
  };
  return thunk;
};

export const sendMessageSuccess = (message) => ({
  type: SEND_MESSAGE_SUCCESS,
  payload: {
    message
  }
});

export const sendMessageFailure = (error) => ({
  type: SEND_MESSAGE_FAILURE,
  error
});


export const getMessages = (conversationId,
  limit = undefined,
  skip = undefined) => {
  function thunk(dispatch) {
    dispatch({ type: GET_MESSAGES_REQUEST });
    return axios
      .get(`${API_URL}/conversations/${conversationId}/messages`, null, {
        body: {
          ...((limit !== undefined) ? { limit } : { limit: 20 }),
          ...((skip !== undefined) ? { skip } : {}),

        }
      })
      .then((response) => {
        dispatch(getMessagesSuccess(conversationId, response.data));
      })
      .catch((error) => {
        dispatch(getMessagesFailure(error));
      });
  }
  // thunk.interceptInOffline = true;
  thunk.meta = {
    retry: true
  };
  return thunk;
};

export const getMessagesSuccess = (conversationId, messages) => ({
  type: GET_MESSAGES_SUCCESS,
  conversationId,
  payload: {
    messages
  }
});

export const getMessagesFailure = (error) => ({
  type: GET_MESSAGES_FAILURE,
  error
});
