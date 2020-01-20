import { connect } from 'react-redux';
import ConversationList from '../../components/chat/ConversationList';
import { getConversations } from '../../actions/chat/conversationAction'
import { createLoadingSelector } from '../../utils/loadingSelector';
import { checkTokenGate } from '../../utils/auth'

const loadingSelector = createLoadingSelector(['GET_CONVERSATIONS']);

const mapStateToProps = (state) => {
  return {
    conversations: state.conversations,
    isFetching: loadingSelector(state)
  };
};

const mapDispatchToProps = (dispatch) => ({
  onGetConversations: () => {
    dispatch(getConversations());
  }
});

const conversationListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConversationList);

export default conversationListContainer;
