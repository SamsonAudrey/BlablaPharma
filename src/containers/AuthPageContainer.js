import { connect } from "react-redux";
import AuthPage from "../Pages/AuthPage";

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {};
};

const Auth = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthPage);

export default Auth;
