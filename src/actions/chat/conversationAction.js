import 'json-circular-stringify';
import {
  CREATE_CONVERSATION_FAILURE,
  CREATE_CONVERSATION_REQUEST,
  CREATE_CONVERSATION_SUCCESS,
  GET_CONVERSATIONS_FAILURE,
  GET_CONVERSATIONS_REQUEST,
  GET_CONVERSATIONS_SUCCESS,
  GET_CONVERSATION_FAILURE,
  GET_CONVERSATION_REQUEST,
  GET_CONVERSATION_SUCCESS,
  DELETE_CONVERSATION_FAILURE,
  DELETE_CONVERSATION_REQUEST,
  DELETE_CONVERSATION_SUCCESS
} from './chatActionTypes';
import { getToken } from '../../utils/auth';
import { getRequest, postRequest, deleteRequest } from '../../utils/socket';

export const createConversations = (memberId) => {
  async function thunk(dispatch) {
    const token = await getToken();
    dispatch({ type: CREATE_CONVERSATION_REQUEST });
    return postRequest(`/conversations?memberId=${memberId}`, token)
      .then(
        (response) => {
          console.log(`cede${JSON.stringify(response)}`);
          dispatch(createConversationSuccess(response));
        },
        (error) => {
          console.log(`errorr${JSON.stringify(error)}`);
          dispatch(createConversationFailure(error));
        }
      );
  }
  // thunk.interceptInOffline = true;
  thunk.meta = {
    retry: true
  };

  return thunk;
};

export const createConversationSuccess = (conversation) => ({
  type: CREATE_CONVERSATION_SUCCESS,
  conversation

});

export const createConversationFailure = (error) => ({
  type: CREATE_CONVERSATION_FAILURE,
  error
});


export const getConversations = () => {
  async function thunk(dispatch) {
    const token = await getToken();
    dispatch({ type: GET_CONVERSATIONS_REQUEST });
    // socket.headers = token;
    // console.log(`dsqdssssssssssssssssssssss${JSON.stringify(socket)}`);
    return getRequest('/conversations', token)
      .then((response) => {
        if (response.message === 'Unauthorized access') {
          console.log('tttt');
        }
        console.log(`refdsfdfdsfss${JSON.stringify(response)}`);
        dispatch(getConversationsSuccess(response));
      },
      (error) => {
        console.log(`ehgiukgh${JSON.stringify(error)}`);
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
  conversations

});

export const getConversationsFailure = (error) => ({
  type: GET_CONVERSATIONS_FAILURE,
  error
});


export const getConversation = (conversationId) => {
  async function thunk(dispatch) {
    const token = await getToken();
    dispatch({ type: GET_CONVERSATION_REQUEST });
    // socket.headers = token;
    console.log(`dsqdssssssssssssssssssssss${conversationId}`);
    return new Promise((resolve, reject) => {
      getRequest(`/conversations/${conversationId}`, token)
        .then((response) => {
          if (response.message === 'Unauthorized access') {
            console.log('tttt');
          }
          console.log(`gettt connnvvvv resssp${JSON.stringify(response)}`);
          dispatch(getConversationSuccess(response));
          resolve(response);
        },
        (error) => {
          console.log(`gettt connnvvvv errr${JSON.stringify(error)}`);
          dispatch(getConversationFailure(error));
          reject(error);
        });
    });
  }
  // thunk.interceptInOffline = true;
  thunk.meta = {
    retry: true
  };

  return thunk;
};


export const getConversationSuccess = (conversation) => ({
  type: GET_CONVERSATION_SUCCESS,
  conversationId: conversation.id,
  messages: conversation.messages

});

export const getConversationFailure = (error) => ({
  type: GET_CONVERSATION_FAILURE,
  error
});


export const deleteConversation = (conversationId) => {
  async function thunk(dispatch) {
    const token = await getToken();
    dispatch({ type: DELETE_CONVERSATION_REQUEST });
    // socket.headers = token;
    return new Promise((resolve, reject) => {
      deleteRequest(`/conversations/${conversationId}`, token)
        .then((response) => {
          if (response.message === 'Unauthorized access') {
            console.log('tttt');
          }
          console.log(`deleteeee connnvvvv resssp${JSON.stringify(response)}`);
          dispatch(deleteConversationSuccess(conversationId));
          resolve(response);
        },
        (error) => {
          console.log(`deleteeee connnvvvv errr${JSON.stringify(error)}`);
          dispatch(deleteConversationFailure(error));
          reject(error);
        });
    });
  }
  // thunk.interceptInOffline = true;
  thunk.meta = {
    retry: true
  };

  return thunk;
};


export const deleteConversationSuccess = (conversationId) => ({
  type: DELETE_CONVERSATION_SUCCESS,
  conversationId

});

export const deleteConversationFailure = (error) => ({
  type: DELETE_CONVERSATION_FAILURE,
  error
});