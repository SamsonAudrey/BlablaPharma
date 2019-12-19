import { connect } from 'react-redux';
import AuthPage from '../Pages/AuthPage';
import { userAuth, refreshToken } from '../actions/userAction';
import { clearError } from '../actions/errorAction';
import { createErrorSelector } from '../utils/errorSelector';

const error401Selector = createErrorSelector(['CONNECT_USER_401']);

const mapStateToProps = (state) => {
  console.log(`yooo${JSON.stringify(state)}`);
  return {
    error_401: error401Selector(state),
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
