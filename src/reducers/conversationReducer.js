
import {
  UPDATE_CONVERSATION_SUCCESS,
  CREATE_CONVERSATION_SUCCESS,
  GET_CONVERSATIONS_SUCCESS,
  GET_CONVERSATION_SUCCESS,
  SEND_MESSAGE_SUCCESS,
  GET_MESSAGES_SUCCESS,
  RECEIVE_MESSAGE_SUCCESS,
  READ_SUCCESS,
  DELETE_CONVERSATION_SUCCESS
} from '../actions/chat/chatActionTypes';


import {
  LOGOUT
} from '../actions/userActionTypes';

export default function conversation(state = {}, action) {
  switch (action.type) {
    case UPDATE_CONVERSATION_SUCCESS:
      return {
        state
      };
    case GET_CONVERSATIONS_SUCCESS:
      return action.conversations;
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
    case DELETE_CONVERSATION_SUCCESS:
      return state.filter((conv) => conv.id !== action.conversationId);
    case CREATE_CONVERSATION_SUCCESS:
      /* if (conversationCreateItem) {
        return state.map((item) => {
          if (item !== conversationCreateItem[0]) {
            console.log(`hhhh${JSON.stringify(conversationItem2[0])}bbbbbbbb${JSON.stringify(item)}`);
            return item;
          }
          return {
            ...item,
            messages:
            [action.conversation.messages]

          };
        });
      } */
      return [...state, action.conversation];

    case SEND_MESSAGE_SUCCESS:
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
    case READ_SUCCESS:
      const conversationReadItem = state.filter((conv) => conv.id === action.conversationId);
      return state.map((item) => {
        if (item !== conversationReadItem[0]) {
          // console.log(`hhhh${JSON.stringify(conversationItem2[0])}bbbbbbbb${JSON.stringify(item)}`);
          return item;
        }
        // We modify the read element of the last message
        const mess = item.messages[0];
        mess.read = true;
        return {
          ...item,
          messages: [
            mess,
            ...item.messages.split(0)[1]
          ]
        };
      });

    case LOGOUT:
      return {};
    default:
      return state;
  }
}
