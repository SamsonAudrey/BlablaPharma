import { connect } from 'react-redux';
import AuthPage from '../../pages/auth/AuthPage';
import { userAuth, refreshToken, forgotPassword } from '../../actions/user/userAction';
import { clearError, clearSuccess } from '../../actions/selectorAction';
import { createErrorSelector } from '../../utils/errorSelector';
import { createSuccessSelector } from '../../utils/successSelector';

const error401Selector = createErrorSelector(['CONNECT_USER_401']);
const error404ForgotPasswordSelector = createErrorSelector(['USER_FORGOT_PASSWORD_404']);
const successForgotPassword = createSuccessSelector(['USER_FORGOT_PASSWORD']);

const mapStateToProps = (state) => {
  return {
    error_401: error401Selector(state),
    isConnected: state.connection.isConnected,
    successForgotPassword: successForgotPassword(state),
    error404ForgotPassword: error404ForgotPasswordSelector(state)
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
  },
  onSuccessClear: () => {
    dispatch(clearSuccess());
  },
  onForgotPassword: (email) => {
    dispatch(forgotPassword(email));
  }
});

const Auth = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthPage);

export default Auth;
