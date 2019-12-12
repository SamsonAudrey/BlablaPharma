import { connect } from "react-redux";
import UserInfoPage from "../Pages/UserInfoPage";

const mapStateToProps = state => {
  return { test: "tt" };
};

const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    increment: () => dispatch({ type: "INCREMENT" }),
    decrement: () => dispatch({ type: "DECREMENT" }),
    reset: () => dispatch({ type: "RESET" })
  };
};

const UserInfo = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserInfoPage);

export default UserInfo;
