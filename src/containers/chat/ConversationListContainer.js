import { connect } from 'react-redux';
import ConversationList from '../../components/chat/ConversationList';
import { getConversations, deleteConversation } from '../../actions/chat/conversationAction';
import { createLoadingSelector } from '../../utils/loadingSelector';

const loadingSelector = createLoadingSelector(['GET_CONVERSATIONS']);

const mapStateToProps = (state) => ({
  user: state.user,
  conversations: state.conversations,
  isFetching: loadingSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
  onGetConversations: () => {
    dispatch(getConversations());
  },
  onDelete: (conversationId) => {
    dispatch(deleteConversation(conversationId));
  }
});

const conversationListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConversationList);

export default conversationListContainer;
