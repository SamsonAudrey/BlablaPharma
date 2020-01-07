import { connect } from 'react-redux';
import { userSearch } from '../../actions/userAction';
import { userUpdateRemoteAccount } from '../../actions/userModifInfoAction';
import { createLoadingSelector } from '../../utils/loadingSelector';
import { createErrorSelector } from '../../utils/errorSelector';
import { createSuccessSelector } from '../../utils/successSelector';
import ModifUserPersonnalInfo from '../../Pages/User/ModifUserPersonnalInfo';
import { clearSuccess, clearError } from '../../actions/selectorAction'

const error403UpdateSelector = createErrorSelector(['USER_PERSONNAL_INFO_UPDATE_403']);
const successUpdateSelector = createSuccessSelector(['USER_PERSONNAL_INFO_UPDATE']);
const loadingUpdateSelector = createLoadingSelector(['USER_PERSONNAL_INFO_UPDATE']);

const mapStateToProps = (state) => ({
  account: state.user.account,
  selector: {
    isUpdating: loadingUpdateSelector(state),
    error403Update: error403UpdateSelector(state),
    successUpdate: successUpdateSelector(state)
  }
});

const mapDispatchToProps = (dispatch) => ({
  onUserUpdateRemoteAccount: (account) => {
    // console.log(`rereremooote`)
    dispatch(userUpdateRemoteAccount(account));
  },
  onUserSearch: (userid) => {
    dispatch(userSearch(userid));
  },
  onClearSuccess: () => {
    dispatch(clearSuccess());
  },
  onClearError: () => {
    dispatch(clearError());
  }
});

const ModifUserPersonnalInfoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ModifUserPersonnalInfo);

export default ModifUserPersonnalInfoContainer;
