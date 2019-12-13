import { connect } from "react-redux";
import AuthPage from "../Pages/AuthPage";
import { userAuth, refreshToken } from "../actions/userAction";
import AuthUtils from "../utils/auth";

const mapStateToProps = state => {
  console.log(state);
  return {
    error: state.error,
    accessToken: state.accessToken
  };
};

const mapDispatchToProps = (dispatch, state) => {
  return {
    onUserAuth: (email, password) => {
      dispatch(userAuth(email, password));
    },
    onTokenRefresh: () => {
      dispatch(refreshToken(state.refreshToken));
    }
  };
};

const Auth = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthPage, AuthUtils);

export default Auth;
