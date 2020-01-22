
import {
  UPDATE_CONVERSATION_SUCCESS,
  CREATE_CONVERSATION_SUCCESS,
  GET_CONVERSATIONS_SUCCESS,
  GET_CONVERSATION_SUCCESS,
  SEND_MESSAGE_SUCCESS,
  GET_MESSAGES_SUCCESS,
  RECEIVE_MESSAGE_SUCCESS
} from '../actions/chat/chatActionTypes';


import {
  LOGOUT
} from '../actions/userActionTypes';

export default function conversation(state = {}, action) {
  console.log(`yugkukh${action.type}`);
  switch (action.type) {
    case UPDATE_CONVERSATION_SUCCESS:
      return {
        state
      };
    case GET_CONVERSATIONS_SUCCESS:
      return action.payload.conversations;
    case GET_CONVERSATION_SUCCESS:

      const conversationGetItem = state.filter((conv) => conv.id === action.conversationId);
      return state.map((item) => {
        if (item !== conversationGetItem[0]) {
        // console.log(`hhhh${JSON.stringify(conversationItem2[0])}bbbbbbbb${JSON.stringify(item)}`);
          return item;
        }
        return {
          ...item,
          messages: action.messages

        };
      });
    case CREATE_CONVERSATION_SUCCESS:
      const conversationItem0 = state.filter((conv) => conv.id === action.conversationId);
      if (!conversationItem0) {
        return { ...state, conversation: action.payload.conversation };
      }
      return state.map((item) => {
        if (item !== conversationItem2[0]) {
          // console.log(`hhhh${JSON.stringify(conversationItem2[0])}bbbbbbbb${JSON.stringify(item)}`);
          return item;
        }
        return {
          ...item,
          messages:
            [action.messages, ...item.messages]

        };
      });
    case SEND_MESSAGE_SUCCESS:
      console.log(`iiii${JSON.stringify(action)}`);
      const conversationItem1 = state.filter((conv) => conv.id === action.conversationId);
      return state.map((item) => {
        if (item !== conversationItem1[0]) {
          // console.log(`hhhh${JSON.stringify(conversationItem2[0])}bbbbbbbb${JSON.stringify(item)}`);
          return item;
        }
        return {
          ...item,
          messages:
            [action.message, ...item.messages]

        };
      });
    case GET_MESSAGES_SUCCESS:
      console.log(`iiii${JSON.stringify(action)}`);
      const conversationItem2 = state.filter((conv) => conv.id === action.conversationId);
      return state.map((item) => {
        if (item !== conversationItem2[0]) {
          // console.log(`hhhh${JSON.stringify(conversationItem2[0])}bbbbbbbb${JSON.stringify(item)}`);
          return item;
        }
        return {
          ...item,
          messages:
            [action.messages]

        };
      });
    case RECEIVE_MESSAGE_SUCCESS:
      console.log(`iiii${JSON.stringify(action)}`);
      const conversationReceivedItem = state.filter((conv) => conv.id === action.conversationId);
      return state.map((item) => {
        if (item !== conversationReceivedItem[0]) {
          // console.log(`hhhh${JSON.stringify(conversationItem2[0])}bbbbbbbb${JSON.stringify(item)}`);
          return item;
        }
        return {
          ...item,
          messages:
            [action.message, ...item.messages]

        };
      });
    case LOGOUT:
      return {};
    default:
      return state;
  }
}
