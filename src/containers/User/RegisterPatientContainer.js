import { connect } from 'react-redux';
// eslint-disable-next-line camelcase
import RegisterPage_Patient from '../../Pages/User/RegisterPage_Patient';
import { registerPatient, userRegisterInfo } from '../../actions/registerAction';

const mapStateToProps = (state) => ({
  state
});

const mapDispatchToProps = (dispatch) => ({
  onRegisterPatient: (firstName, lastName, birthDate, gender, email, password, picture) => {
    dispatch(registerPatient(firstName, lastName, birthDate, gender, email, password, picture));
  },
  onRegisterInfo: (userInfo, userGender) => {
    dispatch(userRegisterInfo(userInfo, userGender));
  }
});


const RegisterPatient = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RegisterPage_Patient);

export default RegisterPatient;
