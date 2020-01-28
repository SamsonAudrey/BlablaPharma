import { connect } from 'react-redux';
// eslint-disable-next-line camelcase
import RegisterPage_Pharmacist from '../../pages/register/RegisterPage_Pharmacist';
import { registerPharmacist } from '../../actions/register/registerAction';
import { createErrorSelector } from '../../utils/errorSelector';
import { createSuccessSelector } from '../../utils/successSelector';
import { createLoadingSelector } from '../../utils/loadingSelector';
import { clearError, clearSuccess } from '../../actions/selectorAction';

const errorRegisterSelector = createErrorSelector(['REGISTER_400']);
const successRegisterSelector = createSuccessSelector(['REGISTER']);
const loadingRegisterSelector = createLoadingSelector(['REGISTER']);

const mapStateToProps = (state) => ({
  state,
  selector: {
    isUpdating: loadingRegisterSelector(state),
    error400RegisterPharmacist: errorRegisterSelector(state),
    successRegisterPharmacist: successRegisterSelector(state)
  }
});

const mapDispatchToProps = (dispatch) => ({
  onRegisterPharmacist: (firstName, lastName, userBirthDate, userGender, userEmail, userPassword,
    professionalId, professionLabel, institutionName, address, postalCode, city) => {
    dispatch(registerPharmacist(firstName, lastName, userBirthDate, userGender,
      userEmail, userPassword, professionalId, professionLabel, institutionName,
      address, postalCode, city));
  },
  onErrorClear: () => {
    dispatch(clearError());
  },
  onSuccessClear: () => {
    dispatch(clearSuccess());
  }
});

const RegisterPharmacist = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RegisterPage_Pharmacist);

export default RegisterPharmacist;
