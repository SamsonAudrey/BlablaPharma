import { connect } from 'react-redux';
import ChatPage from '../../pages/chat/ChatPage';

const mapStateToProps = (state) => ({
  isConnected: state.connection.isConnected
});

const mapDispatchToProps = (dispatch) => ({
  // dispatching plain actions
  increment: () => dispatch({ type: 'INCREMENT' }),
  decrement: () => dispatch({ type: 'DECREMENT' }),
  reset: () => dispatch({ type: 'RESET' })
});

const Chat = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatPage);

export default Chat;
