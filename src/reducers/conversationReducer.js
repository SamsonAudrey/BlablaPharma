
import {
  UPDATE_CONVERSATION_SUCCESS,
  GET_CONVERSATIONS_SUCCESS,
  SEND_MESSAGE_SUCCESS,
  GET_MESSAGES_SUCCESS
} from '../actions/chat/chatActionTypes';

export default function conversation(state = {}, action) {
  switch (action.type) {
    case UPDATE_CONVERSATION_SUCCESS:
      return {
        state
      };
    case GET_CONVERSATIONS_SUCCESS:
      return action.payload.conversations;
    case SEND_MESSAGE_SUCCESS:
      const conversationItem1 = state.filter((conv) => conv.id === action.conversationId);
      return {
        ...state,
        [conversationItem1]: {
          ...state[conversationItem1],
          messages: { ...state[conversationItem1].messages, messages: action.payload.messages }
        }
      };
    case GET_MESSAGES_SUCCESS:
      // console.log(`iiii${JSON.stringify(state)}`);
      const conversationItem2 = state.filter((conv) => conv.id === action.conversationId);
      return state.map((item) => {
        if (item !== conversationItem2[0]) {
          // console.log(`hhhh${JSON.stringify(conversationItem2[0])}bbbbbbbb${JSON.stringify(item)}`);
          return item;
        }
        return {
          ...item,
          messages: {
            ...item.messages, messages: action.payload.messages
          }
        };
      });
    default:
      return state;
  }
}
