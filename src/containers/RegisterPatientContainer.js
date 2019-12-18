import { connect } from 'react-redux';
import RegisterPage_Patient from '../Pages/RegisterPage_Patient';
import { registerPatient, userRegisterInfo } from '../actions/registerAction';

const mapStateToProps = (state) => ({
  state
});

const mapDispatchToProps = (dispatch) => ({
  onRegisterPatient: (firstName, lastName, birthDate, gender, email, password) => {
    dispatch(registerPatient(firstName, lastName, birthDate, gender, email, password));
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
