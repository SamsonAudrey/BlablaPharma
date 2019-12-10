import { connect } from "react-redux";
import ChatPage from "../Pages/ChatPage";

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {};
};

const Chat = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatPage);

export default Chat;
