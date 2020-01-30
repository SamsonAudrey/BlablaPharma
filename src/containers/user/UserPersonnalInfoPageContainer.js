import { connect } from 'react-redux';
import {
  logout, userDelete, userPharmacistSearch, userSearch
} from '../../actions/user/userAction';
import { createLoadingSelector } from '../../utils/loadingSelector';
import UserPersonnalInfoPage from '../../pages/userInfo/UserPersonnalInfoPage';


const loadingSelector = createLoadingSelector(['USER_PERSONNAL_INFO_SEARCH']);
const loadingPharmaSelector = createLoadingSelector(['USER_PERSONNAL_INFO_PHARMA_SEARCH']);

const mapStateToProps = (state) => {
  return {
    account: state.user.account,
    pharmacistAccount: state.user.pharmacistAccount,
    isFetching: loadingSelector(state),
    isFetchingPharma: loadingPharmaSelector(state)
  };
};

const mapDispatchToProps = (dispatch) => ({
  onUserSearch: (userid) => {
    dispatch(userSearch(userid));
  },
  onUserPharmaSearch: (userid) => {
    dispatch(userPharmacistSearch(userid));
  },
  onDeleteAccount: (userid) => {
    dispatch(userDelete(userid));
  },
  onUserLogout: () => {
    dispatch(logout());
  }
});

const UserPersonnalInfoPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPersonnalInfoPage);

export default UserPersonnalInfoPageContainer;
