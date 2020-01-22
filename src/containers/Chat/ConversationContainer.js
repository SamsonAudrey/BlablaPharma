import { connect } from 'react-redux';
import Conversation from '../../components/chat/Conversation';
import {
  getMessages, sendMessage, onTyping, onRead
} from '../../actions/chat/messagesAction';
import { createConversations, getConversation } from '../../actions/chat/conversationAction';

const mapStateToProps = (state, ownProps) => {
  const { navigation } = ownProps;
  console.log(`mmmm${JSON.stringify(state.conversations)}`);
  const { otherPerson } = navigation.state.params;
  const { user } = state;
  console.log(`mmmm${JSON.stringify(otherPerson)}`);
  const conv = state.conversations.filter((convers) => convers.members[0].id === otherPerson.id || convers.members[1].id === otherPerson.id);
  console.log(`convvv${JSON.stringify(conv)}`);
  return {
    conversationId: conv[0] ? conv[0].id : undefined,
    otherPerson,
    messages: conv[0] ? conv[0].messages : undefined,
    user
  };
};

const mapDispatchToProps = (dispatch) => ({
  onGetMessages: (conversationId) => {
    dispatch(getMessages(conversationId));
  },
  onSendMessage: (conversationId, type, content) => {
    dispatch(sendMessage(conversationId, type, content));
  },
  onCreateConversation: (memberId) => {
    dispatch(createConversations(memberId));
  },
  onGetConversation: (conversationId) => dispatch(getConversation(conversationId)),
  onTyping: (conversationId) => {
    dispatch(onTyping(conversationId));
  },
  onRead: (conversationId, messageId) => {
    dispatch(onRead(conversationId, messageId));
  },
});

const conversationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Conversation);

export default conversationContainer;
