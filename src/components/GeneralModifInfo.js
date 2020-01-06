import React, { Component } from 'react';
import {
  TextInput, View, Button, StyleSheet, Dimensions
} from 'react-native';

export default class GeneralModif extends Component {
  render() {
    const { userUpdateRemoteAccount } = this.props;
    const { userUpdateLocalAccount } = this.props;
    const { account } = this.props;
    return (
      <>
        <View style={styles.searchBarContainer}>
          <TextInput
            placeholder="FirstName"
            style={styles.textInputSearch}
            underlineColorAndroid="transparent"
            onChangeText={(text) => userUpdateLocalAccount('firstName', text)}
            value={account.firstName}
          />
        </View>
        <View>
          <TextInput
            placeholder="FirstName"
            style={styles.textInputSearch}
            underlineColorAndroid="transparent"
            onChangeText={(text) => userUpdateRemoteAccount(account)}
            value={account.lastName}
          />
        </View>
      </>
    );
  }
}

let styles = StyleSheet.create({
  searchBarContainer: {
    width: Dimensions.get('window').width - 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    borderBottomWidth: 2,
    marginVertical: 10,
    borderColor: 'lightgray',
    flex: 1
  },
  textInputSearch: {
    flex: 8,
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 10,
    height: 40,
    paddingLeft: 10
  },
  textSearchButton: {
    flex: 1,
    backgroundColor: 'lightgray',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    height: 40
  }
});
