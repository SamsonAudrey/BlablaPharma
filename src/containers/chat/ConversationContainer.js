import { connect } from 'react-redux';
import Conversation from '../../components/chat/Conversation';
import {
  getMessages, sendMessage, onTyping, onRead, onTypingChange
} from '../../actions/chat/messagesAction';
import { createConversations, getConversation, setCurrentConversation } from '../../actions/chat/conversationAction';

const mapStateToProps = (state, ownProps) => {
  const { navigation } = ownProps;
  const { otherPerson } = navigation.state.params;
  const { user } = state;
  const conv = state.conversations.length > 0
    // eslint-disable-next-line max-len
    ? state.conversations.filter((convers) => convers.members[0].id === otherPerson.id || convers.members[1].id === otherPerson.id)
    : undefined;
  return {
    conversationId: conv ? conv.length > 0 ? conv[0].id : undefined : undefined,
    otherPerson,
    messages: conv ? conv.length > 0 ? conv[0].messages : undefined : undefined,
    user,
    isConnected: state.connection,
    isTyping: conv ? conv.length > 0 ? conv[0].isTyping : false : false,
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
  onRead: (conversationId, message) => {
    dispatch(onRead(conversationId, message));
  },
  onClearIsTyping: (conversationId) => {
    dispatch(onTypingChange(conversationId, false));
  },
  onSetCurrentConversation: (conversationId) => {
    dispatch(setCurrentConversation(conversationId));
  }
});

const conversationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Conversation);

export default conversationContainer;
