import { connect } from 'react-redux';
import UserInfoPage from '../../pages/userInfo/UserInfoPage';
import { logout } from '../../actions/user/userAction';

const mapStateToProps = (state) => {
  return {
    isConnected: state.connection.isConnected
  };
};

const mapDispatchToProps = (dispatch) => ({
  onUserLogout: () => {
    dispatch(logout());
  }
});

const UserInfo = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserInfoPage);

export default UserInfo;
