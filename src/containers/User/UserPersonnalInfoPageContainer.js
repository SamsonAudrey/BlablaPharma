import { connect } from 'react-redux';
import {logout, userDelete, userSearch} from '../../actions/user/userAction';
import { createLoadingSelector } from '../../utils/loadingSelector';
import UserPersonnalInfoPage from '../../Pages/User/UserPersonnalInfoPage';


const loadingSelector = createLoadingSelector(['USER_PERSONNAL_INFO_SEARCH']);

const mapStateToProps = (state) => ({
  account: state.user.account,
  isFetching: loadingSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
  onUserSearch: (userid) => {
    dispatch(userSearch(userid));
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
