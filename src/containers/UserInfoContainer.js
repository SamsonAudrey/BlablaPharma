import { connect } from "react-redux";
import UserInfoPage from "../Pages/UserInfoPage";

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {};
};

const UserInfo = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserInfoPage);

export default UserInfo;
