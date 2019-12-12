import { connect } from "react-redux";
import AuthPage from "../Pages/AuthPage";
import { userAuth } from "../actions/userAction";

const mapStateToProps = state => {
  console.log(state);
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    onUserAuth: (email, password) => {
      dispatch(userAuth(email, password));
    }
  };
};

const Auth = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthPage);

export default Auth;
