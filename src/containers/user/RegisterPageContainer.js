import { connect } from 'react-redux';
import RegisterPage from '../../pages/register/RegisterPage';
import { userRegisterKind } from '../../actions/register/registerAction';

const mapStateToProps = (state) => {
  // console.log('rrrrrr ------', state);
  return { test: 'tt' };
};

const mapDispatchToProps = (dispatch) => ({
  onRegisterKind: (userKind) => {
    dispatch(userRegisterKind(userKind));
  },
});

const Register = connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterPage);

export default Register;
