import { connect } from 'react-redux';
import AuthPage from '../Pages/AuthPage';
import { userAuth, refreshToken } from '../actions/userAction';
import { clearError } from '../actions/errorAction'

const mapStateToProps = (state) => {
  console.log(`yooo${JSON.stringify(state)}`);
  return {
    error: state.error.error,
    isConnected: state.connection.isConnected
  };
};

const mapDispatchToProps = (dispatch, state) => ({
  onUserAuth: (email, password) => {
    dispatch(userAuth(email, password));
  },
  onTokenRefresh: () => {
    dispatch(refreshToken(state.refreshToken));
  },
  onErrorClear: () => {
    dispatch(clearError());
  }
});

const Auth = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthPage);

export default Auth;
