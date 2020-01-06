import React, { Component } from 'react';
import { View } from 'react-native';
import GeneralModifInfo from '../../components/GeneralModifInfo';

class SearchPharmacistsPage extends Component {
  render() {
    return (
      <View>
        <GeneralModifInfo
          userUpdateRemoteAccount={this.props.onUserUpdateRemoteAccount}
          userUpdateLocalAccount={this.props.onUserUpdateLocalAccount}
          account={this.props.account}
        />
      </View>
    );
  }
}

export default SearchPharmacistsPage;
