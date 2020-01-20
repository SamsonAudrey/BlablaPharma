import { connect } from 'react-redux';
// eslint-disable-next-line camelcase
import RegisterPage_Patient from '../../Pages/User/RegisterPage_Patient';
import { registerPatient, userRegisterInfo } from '../../actions/register/registerAction';
import { createErrorSelector } from '../../utils/errorSelector';
import { createSuccessSelector } from '../../utils/successSelector';
import { createLoadingSelector } from '../../utils/loadingSelector';
import {clearError, clearSuccess} from '../../actions/selectorAction';

const errorRegisterSelector = createErrorSelector(['REGISTER_400']);
const successRegisterSelector = createSuccessSelector(['REGISTER']);
const loadingRegisterSelector = createLoadingSelector(['REGISTER']);


const mapStateToProps = (state) => {
  console.log(state);
  return ({
    state,
    selector: {
      isUpdating: loadingRegisterSelector(state),
      error400Register: errorRegisterSelector(state),
      successRegister: successRegisterSelector(state)
    }
  });
};

const mapDispatchToProps = (dispatch) => ({
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
