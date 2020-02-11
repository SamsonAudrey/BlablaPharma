import { connect } from 'react-redux';
import Conversation from '../../components/chat/Conversation';
import {
  getMessages, sendMessage, onTyping, onRead, onTypingChange
} from '../../actions/chat/messagesAction';
import { createConversations, getConversation } from '../../actions/chat/conversationAction';

const mapStateToProps = (state, ownProps) => {
  const { navigation } = ownProps;
  const { otherPerson } = navigation.state.params;
  const { user } = state;
  const conv = state.conversations.length > 0
    ? state.conversations.filter((convers) => convers.members[0].id === otherPerson.id || convers.members[1].id === otherPerson.id)
    : undefined;
    console.log("convvv"+JSON.stringify(conv))

  if(conv && conv.length > 0){
    const sorted = conv.slice().sort((a,b) => { return a.updatedAt > b.updatedAt})
  }
 
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
  }
});

const conversationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Conversation);

export default conversationContainer;
