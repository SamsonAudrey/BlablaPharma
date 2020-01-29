import { connect } from 'react-redux';
// eslint-disable-next-line camelcase
import RegisterPage_Patient from '../../pages/register/RegisterPage_Patient';
import { registerPatient, userRegisterInfo } from '../../actions/register/registerAction';
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
    error400Register: errorRegisterSelector(state),
    successRegister: successRegisterSelector(state)
  },
  user: {}
});

const mapDispatchToProps = (dispatch) => ({
  // eslint-disable-next-line no-unused-vars
  onRegisterPatient: (firstName, lastName, birthDate, gender, email, password, picture) => {
    dispatch(registerPatient(firstName, lastName, birthDate, gender, email, password));
    // TODO picture
  },
  onRegisterInfo: (userInfo, userGender) => {
    dispatch(userRegisterInfo(userInfo, userGender));
  },
  onErrorClear: () => {
    dispatch(clearError());
  },
  onSuccessClear: () => {
    dispatch(clearSuccess());
  }
});


const RegisterPatient = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RegisterPage_Patient);

export default RegisterPatient;