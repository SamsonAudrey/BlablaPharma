import { connect } from "react-redux";
import AuthPage from "../Pages/AuthPage";
import { userAuth, refreshToken } from "../actions/userAction";
import AuthUtils from "../utils/auth";

const mapStateToProps = state => {
  console.log("yooo"+JSON.stringify(state));
  return {
    error: state.user.error,
    isConnected: state.connection.isConnected
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
)(AuthPage);

export default Auth;
