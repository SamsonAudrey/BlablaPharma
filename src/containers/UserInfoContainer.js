import { connect } from "react-redux";
import UserInfoPage from "../Pages/UserInfoPage";
import { logout } from "../actions/userAction"

const mapStateToProps = state => {
  return { test: "tt" };
};

const mapDispatchToProps = dispatch => {
  return {
    onUserLogout: () => {
      dispatch(logout());
    }
  };
};

const UserInfo = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserInfoPage);

export default UserInfo;
