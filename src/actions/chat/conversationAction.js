import { API_URL } from 'react-native-dotenv';
import axios from 'axios';
import {
  CREATE_CONVERSATION_FAILURE,
  CREATE_CONVERSATION_REQUEST,
  CREATE_CONVERSATION_SUCCESS,
  GET_CONVERSATIONS_FAILURE,
  GET_CONVERSATIONS_REQUEST,
  GET_CONVERSATIONS_SUCCESS,
} from './chatActionTypes';


export const createConversation = (memberId) => {
  function thunk(dispatch) {
    dispatch({ type: CREATE_CONVERSATION_REQUEST });
    return axios
      .post(`${API_URL}/conversations`, null, {
        params: {
          memberId
        }
      })
      .then((response) => {
        // console.log(JSON.stringify(response.data))
        dispatch(createConversationSuccess(response.data));
      })
      .catch((error) => {
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
  function thunk(dispatch) {
    dispatch({ type: GET_CONVERSATIONS_REQUEST });
    return axios
      .get(`${API_URL}/conversations`)
      .then((response) => {
        console.log(`ress${JSON.stringify(response.data)}`);
        dispatch(getConversationsSuccess(response.data));
      })
      .catch((error) => {
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
