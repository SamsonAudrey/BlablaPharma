import { connect } from 'react-redux';
import RegisterPage_Pharmacist from '../../Pages/User/RegisterPage_Pharmacist';
import { registerPharmacist } from '../../actions/register/registerAction';

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  onRegisterPharmacist: (firstName, lastName, userBirthDate, userGender, userEmail, userPassword,
    professionalId, professionLabel, institutionName, address, postalCode, city) => {
    dispatch(registerPharmacist(firstName, lastName, userBirthDate, userGender, userEmail, userPassword,
      professionalId, professionLabel, institutionName, address, postalCode, city));
  }
});

const RegisterPharmacist = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RegisterPage_Pharmacist);

export default RegisterPharmacist;
