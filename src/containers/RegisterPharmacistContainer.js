import { connect } from 'react-redux';
import RegisterPage_Pharmacist from '../Pages/RegisterPage_Pharmacist'
import { registerPharmacist } from "../actions/registerAction";

const mapStateToProps = state => {
    return state
}

const mapDispatchToProps = dispatch => {
    return {
        onRegisterPharmacist: (firstName, lastName, userBirthDate, userGender, userEmail, userPassword,
                     professionalId, professionLabel,institutionName, address, postalCode, city) => {
            dispatch(registerPharmacist(firstName, lastName, userBirthDate, userGender, userEmail, userPassword,
                professionalId, professionLabel,institutionName, address, postalCode, city));
        }
    }
};

const RegisterPharmacist = connect(
    mapStateToProps,
    mapDispatchToProps,
)(RegisterPage_Pharmacist);

export default RegisterPharmacist;
