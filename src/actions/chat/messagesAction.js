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
import { store } from '../../../store';


const socketIOClient = require('socket.io-client');
const sailsIOClient = require('sails.io.js');

const state = store.getState();
console.log('fdsfsdfsff');

const io = socketIOClient.sails ? (socketIOClient)
  : (sailsIOClient(socketIOClient));
io.sails.url = API_URL;
io.sails.transports = ['polling'];
io.sails.reconnection = true;
if (state.user.accessToken) {
  console.log(`rrere${state.user.accessToken}`);
  io.sails.headers = {
    authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50SWQiOjExLCJyb2xlIjoiYmFzaWMiLCJpYXQiOjE1NzkxMDMxMzEsImV4cCI6MTU3OTE4OTUzMSwiYXVkIjoiYXBpIn0.eg_bQato-3k2MXz0S2uCs7aZBtWPaF7bY5vchNoYGm0'
  };
} else {
  console.log('y a pbbpbppbpbpbpbpb');
}

const { socket } = io;
// socket logic
const typing = false;
let debounce = null;

// socket events
socket.on('event:typing', (data) => {
  if (data.conversation === conversation) {
    clearTimeout(debounce);
    debounce = setTimeout(() => document.getElementById('events').innerHTML = '', 2500);
  }
});

socket.on('event:read', (data) => {
  console.log('message read:');
  console.log(data);
});

socket.on('message', (data) => {
  console.log(`message: ${JSON.stringify(data)}`);
  getMessagesSuccess(data.conversation, data);
});


export const sendMessage = (conversationId,
  type,
  content) => {
  function thunk(dispatch) {
    dispatch({ type: SEND_MESSAGE_REQUEST });
    return socket.post(`/conversations/${conversationId}/messages?type=${type}&content=${content}`)
      .then((response) => {
        console.log(JSON.stringify(response.data));
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


export const onTyping = (conversationId) => {
  function thunk(dispatch) {
    dispatch({ type: SEND_MESSAGE_REQUEST });
    return socket.post(`/conversations/${conversationId}/event/typing`)
      .then((response) => {
        console.log(JSON.stringify(response.data));
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

export const messageRead = (conversationId, messageId) => {
  function thunk(dispatch) {
    dispatch({ type: SEND_MESSAGE_REQUEST });
    return socket.post(`/conversations/${conversationId}/event/read`, { messageId })
      .then((response) => {
        console.log(JSON.stringify(response.data));
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
