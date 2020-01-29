import { API_URL } from 'react-native-dotenv';
import axios from 'axios';
import {
  SEND_MESSAGE_FAILURE,
  SEND_MESSAGE_REQUEST,
  SEND_MESSAGE_SUCCESS,
  GET_MESSAGES_FAILURE,
  GET_MESSAGES_REQUEST,
  GET_MESSAGES_SUCCESS,
  RECEIVE_MESSAGE_SUCCESS,
  READ_SUCCESS
} from './chatActionTypes';
import { getToken } from '../../utils/auth';
import { store } from '../../../store';
import { getRequest, postRequest, socket } from '../../utils/socket';


// socket logic
const typing = false;
const debounce = null;

// socket events
socket.on('event:typing', (data) => {

});

socket.on('event:read', (data) => {
  //console.log('message read:');
  //console.log(data);
});

socket.on('message', (data) => {
  //console.log(`message: ${JSON.stringify(data)}`);
  store.dispatch(receiveMessageSuccess(data.conversation, data));
});


export const sendMessage = (conversationId,
  type,
  content) => {
  async function thunk(dispatch) {
    //console.log(`kkkkkkkkkkkkkkkkkkkkkkkkk${content}`);
    const token = await getToken();
    dispatch({ type: SEND_MESSAGE_REQUEST });
    return postRequest(`/conversations/${conversationId}/messages?type=${type}&content=${content}`, token)
      .then((response) => {
        //console.log(JSON.stringify(`yesss${JSON.stringify(response)}`));
        dispatch(sendMessageSuccess(response.conversation, response));
      })
      .catch((error) => {
        //dispatch(`noooo${sendMessageFailure(error)}`);
      });
  }
  // thunk.interceptInOffline = true;
  thunk.meta = {
    retry: true
  };
  return thunk;
};

export const sendMessageSuccess = (conversationId, message) => ({
  type: SEND_MESSAGE_SUCCESS,
  conversationId,
  message

});

export const sendMessageFailure = (error) => ({
  type: SEND_MESSAGE_FAILURE,
  error
});


export const getMessages = (conversationId,
  limit = undefined,
  skip = undefined) => {
  async function thunk(dispatch) {
    const token = await getToken();
    dispatch({ type: GET_MESSAGES_REQUEST });
    return getRequest(`${API_URL}/conversations/${conversationId}/messages`, token, {
      body: {
        ...((limit !== undefined) ? { limit } : { limit: 20 }),
        ...((skip !== undefined) ? { skip } : {}),

      }
    })
      .then((response) => {
        dispatch(getMessagesSuccess(conversationId, response));
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
  messages

});

export const receiveMessageSuccess = (conversationId, message) => ({
  type: RECEIVE_MESSAGE_SUCCESS,
  conversationId,
  message

});

export const getMessagesFailure = (error) => ({
  type: GET_MESSAGES_FAILURE,
  error
});


export const onTyping = (conversationId) => {
  async function thunk(dispatch) {
    const token = await getToken();
    dispatch({ type: SEND_MESSAGE_REQUEST });
    return postRequest(`/conversations/${conversationId}/event/typing`, token)
      .then((response) => {
        //console.log(JSON.stringify(response.data));
        //dispatch(sendMessageSuccess(response));
      })
      .catch((error) => {
        //dispatch(sendMessageFailure(error));
      });
  }
  // thunk.interceptInOffline = true;
  thunk.meta = {
    retry: true
  };
  return thunk;
};

export const onRead = (conversationId, message) => {
  async function thunk(dispatch) {
    console.log(`messsageg${JSON.stringify(message)}`);
    const token = await getToken();
    return postRequest(`/conversations/${conversationId}/event/read`, token, { messageId: message.id })
      .then((response) => {
        //console.log(JSON.stringify(`respo on reaadd${response}`));
        dispatch(onReadSuccess(conversationId));
      })
      .catch((error) => console.log(JSON.stringify(error)));
  }
  // thunk.interceptInOffline = true;
  thunk.meta = {
    retry: true
  };
  return thunk;
};

export const onReadSuccess = (conversationId) => ({
  type: READ_SUCCESS,
  conversationId
});