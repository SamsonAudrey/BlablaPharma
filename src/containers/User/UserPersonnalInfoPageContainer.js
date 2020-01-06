import { connect } from 'react-redux';
import { userSearch } from '../../actions/userAction';
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
  }
});

const UserPersonnalInfoPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPersonnalInfoPage);

export default UserPersonnalInfoPageContainer;
