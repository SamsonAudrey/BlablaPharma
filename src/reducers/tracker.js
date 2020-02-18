
import {

  SET_CURRENT_CONVERSATION,
} from '../actions/chat/chatActionTypes';

export default function tracker(state = {}, action) {
  switch (action.type) {
    case SET_CURRENT_CONVERSATION:
      return { conversation: action.conversationId };
    default:
      return state;
  }
}
