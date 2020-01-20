import { API_URL } from 'react-native-dotenv';
import axios from 'axios';
import 'json-circular-stringify';
import {
  CREATE_CONVERSATION_FAILURE,
  CREATE_CONVERSATION_REQUEST,
  CREATE_CONVERSATION_SUCCESS,
  GET_CONVERSATIONS_FAILURE,
  GET_CONVERSATIONS_REQUEST,
  GET_CONVERSATIONS_SUCCESS,
} from './chatActionTypes';
import {store} from '../../../store';
import socket from '../../utils/socket';


import socketIOClient from 'socket.io-client';
import sailsIOClient from 'sails.io.js';

console.log('fdsfsdfsff');
const state = store.getState();
const io = socketIOClient.sails ? (socketIOClient)
  : (sailsIOClient(socketIOClient));
io.sails.url = API_URL;
io.sails.transports = ['polling'];
io.sails.reconnection = true;
if(state.user.accessToken){
  io.sails.headers = {
    authorization: `Bearer ${state.user.accessToken}`
    };
}
  


//const { socket } = io;
//console.log(`eeeeeeeeeeeee${JSON.stringify(io.socket)}`);

export const createConversations = (memberId) => {
  function thunk(dispatch) {
    dispatch({ type: CREATE_CONVERSATION_REQUEST });
    return socket
      .post(`/conversations?memberId=${memberId}`,
        (response) => {
          console.log(`cede${JSON.stringify(response)}`);
          dispatch(createConversationSuccess(response.data));
        },
        (error) => {
          dispatch(createConversationFailure(error));
        });
  }
  // thunk.interceptInOffline = true;
  thunk.meta = {
    retry: true
  };

  return thunk;
};

export const createConversationSuccess = (conversation) => ({
  type: CREATE_CONVERSATION_SUCCESS,
  payload: {
    conversation
  }
});

export const createConversationFailure = (error) => ({
  type: CREATE_CONVERSATION_FAILURE,
  error
});


export const getConversations = () => {
  async function thunk(dispatch) {
    // const token = await getToken();
    dispatch({ type: GET_CONVERSATIONS_REQUEST });
    // socket.headers = token;
    //console.log(`dsqdssssssssssssssssssssss${JSON.stringify(socket)}`);
    return socket
      .get('/conversations', (response) => {
        console.log(`refdsfdfdsfss${JSON.stringify(response)}`);
        dispatch(getConversationsSuccess(response));
      },
      (error) => {
        console.log("ehgiukgh"+JSON.stringify(error))
        dispatch(getConversationsFailure(error));
      });
  }
  // thunk.interceptInOffline = true;
  thunk.meta = {
    retry: true
  };

  return thunk;
};

export const getConversationsSuccess = (conversations) => ({
  type: GET_CONVERSATIONS_SUCCESS,
  payload: {
    conversations
  }
});

export const getConversationsFailure = (error) => ({
  type: GET_CONVERSATIONS_FAILURE,
  error
});
