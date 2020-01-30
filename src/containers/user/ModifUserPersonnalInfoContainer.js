import { connect } from 'react-redux';
import {userPharmacistSearch, userSearch} from '../../actions/user/userAction';
import {userUpdateRemoteAccount, userUpdateRemotePharmaAccount} from '../../actions/user/userModifInfoAction';
import { createLoadingSelector } from '../../utils/loadingSelector';
import { createErrorSelector } from '../../utils/errorSelector';
import { createSuccessSelector } from '../../utils/successSelector';
import ModifUserPersonnalInfo from '../../pages/userInfo/ModifUserPersonnalInfo';
import { clearSuccess, clearError } from '../../actions/selectorAction'

const error403UpdateSelector = createErrorSelector(['USER_PERSONNAL_INFO_UPDATE_403']);
const successUpdateSelector = createSuccessSelector(['USER_PERSONNAL_INFO_UPDATE']);
const successUpdatePharmaSelector = createSuccessSelector(['USER_PERSONNAL_INFO_PHARMA_UPDATE']);
const loadingUpdateSelector = createLoadingSelector(['USER_PERSONNAL_INFO_UPDATE']);

const mapStateToProps = (state) => ({
  account: state.user.account,
  pharmacistAccount: state.user.pharmacistAccount,
  selector: {
    isUpdating: loadingUpdateSelector(state),
    error403Update: error403UpdateSelector(state),
    successUpdate: successUpdateSelector(state),
    successPharmaUpdate: successUpdatePharmaSelector(state)
  }
});

const mapDispatchToProps = (dispatch) => ({
  onUserUpdateRemoteAccount: (account) => {
    dispatch(userUpdateRemoteAccount(account));
  },
  onUserUpdateRemotePharmaAccount: (account) => {
    dispatch(userUpdateRemotePharmaAccount(account));
  },
  onUserSearch: (userid) => {
    dispatch(userSearch(userid));
  },
  onUserPharmaSearch: (userid) => {
    dispatch(userPharmacistSearch(userid));
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
