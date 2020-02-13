import { connect } from 'react-redux';
import ConversationList from '../../components/chat/ConversationList';
import { getConversations, deleteConversation } from '../../actions/chat/conversationAction';
import { createLoadingSelector } from '../../utils/loadingSelector';
import { instanceOf } from 'prop-types';

const loadingSelector = createLoadingSelector(['GET_CONVERSATIONS']);

const mapStateToProps = (state) => {
  const convs = state.conversations;
  const withoutEmptyConv = convs instanceof Array ? convs[0] ? convs.filter((conv) => conv.messages[0]) : {} : {};
  const sortedConv = withoutEmptyConv[0] ? withoutEmptyConv.slice().sort((a, b) => a.messages[0].updatedAt > b.messages[0].updatedAt) : {};

  return {
    user: state.user,
    conversations: sortedConv,
    isFetching: loadingSelector(state)
  };
};

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
