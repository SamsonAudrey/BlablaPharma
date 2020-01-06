import { connect } from 'react-redux';
import { userUpdateLocalAccount, userUpdateRemoteAccount } from '../../actions/userModifInfoAction';
import { createLoadingSelector } from '../../utils/loadingSelector';
import ModifUserPersonnalInfo from '../../Pages/User/ModifUserPersonnalInfo';


const loadingSelector = createLoadingSelector(['USER_PERSONNAL_INFO_SEARCH']);

const mapStateToProps = (state) => ({
  account: state.user.account,
  isFetching: loadingSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
  onUserUpdateRemoteAccount: (account) => {
    console.log(`rereremooote`)
    dispatch(userUpdateRemoteAccount(account));
  },
  onUserUpdateLocalAccount: (element, value) => {
    console.log('lololoolcaaal');
    dispatch(userUpdateLocalAccount(element, value));
  }
});

const ModifUserPersonnalInfoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ModifUserPersonnalInfo);

export default ModifUserPersonnalInfoContainer;
