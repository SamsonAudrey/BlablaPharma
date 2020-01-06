
import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class UserPersonnalInfoPage extends Component {
  componentDidMount() {
    const { account } = this.props;
    this.props.onUserSearch(account.id);
  }

  render() {
    const { account } = this.props;
    const { navigate } = this.props.navigation;
    return (
      <>
        <View>
          <Text>{account.firstName}</Text>
          <Text>{account.lastName}</Text>
          <Text>{account.gender}</Text>
        </View>
        <Button
          title="Modify Personnal Info"
          onPress={() => {
            /* Navigate to the authentication page */
            navigate('ModifUserPersonnalInfo');
          }}
        />
      </>
    );
  }
}

export default UserPersonnalInfoPage;
