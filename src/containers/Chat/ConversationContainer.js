import { connect } from 'react-redux';
import Conversation from '../../components/chat/Conversation';
import { getMessages, sendMessage } from '../../actions/chat/messagesAction';
import { createConversations, getConversation } from '../../actions/chat/conversationAction';

const mapStateToProps = (state, ownProps) => {
  const { navigation } = ownProps;
  // console.log("mmmm"+JSON.stringify(state.conversations));
  const { conversationId, memberId } = navigation.state.params;
  const conv = state.conversations.filter((convers) => convers.id === conversationId);
  console.log(`convvv${JSON.stringify(conv)}`);
  return {
    conversationId,
    memberId,
    messages: conv ? conv[0].messages : undefined,
    accountId: state.user
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
  onGetConversation: (conversationId) => {
    return dispatch(getConversation(conversationId));
  }
});

const conversationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Conversation);

export default conversationContainer;
