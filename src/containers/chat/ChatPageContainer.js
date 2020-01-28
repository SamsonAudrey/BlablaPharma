import { connect } from 'react-redux';
import ChatPage from '../Pages/ChatPage';

const mapStateToProps = (state) => ({ test: 'tt' });

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
