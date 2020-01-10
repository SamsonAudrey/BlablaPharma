import { connect } from 'react-redux';
import Conversation from '../../components/chat/Conversation';
import { getMessages, sendMessage } from '../../actions/chat/messagesAction';

const mapStateToProps = (state, ownProps) => {
  const { navigation } = ownProps;
  //console.log("mmmm"+JSON.stringify(state.conversations));
  const { conversationId } = navigation.state.params;
  const conv = state.conversations.filter((convers) => convers.id === conversationId);
  console.log("convvv"+JSON.stringify(conv))
  return {
    conversationId,
    messages: conv[0].messages,
    accountId: state.user
  };
};

const mapDispatchToProps = (dispatch) => ({
  onGetMessages: (conversationId) => {
    dispatch(getMessages(conversationId));
  },
  onSendMessage: (conversationId, type, content) => {
    dispatch(sendMessage(conversationId, type, content));
  }
});

const conversationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Conversation);

export default conversationContainer;
