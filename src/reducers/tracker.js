
import {

  SET_CURRENT_CONVERSATION,
} from '../actions/chat/chatActionTypes';

export default function tracker(state = {}, action) {
  console.log(`state conv${action.type}  ${JSON.stringify(state)}`);
  switch (action.type) {
    case SET_CURRENT_CONVERSATION:
      return { conversation: action.conversationId };
    default:
      return state;
  }
}
