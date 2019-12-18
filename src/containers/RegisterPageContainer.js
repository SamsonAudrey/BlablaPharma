import { connect } from 'react-redux';
import RegisterPage from '../Pages/RegisterPage';
import { refreshToken, userAuth } from '../actions/userAction';
import { userKindForRegister, userRegisterInfo, userRegisterKind } from '../actions/registerAction';

const mapStateToProps = (state) => {
  console.log('rrrrrr ------', state);
  return { test: 'tt' };
};

const mapDispatchToProps = (dispatch, state) => ({
  onRegisterKind: (userKind) => {
    dispatch(userRegisterKind(userKind));
  },
});

const Register = connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterPage);

export default Register;
