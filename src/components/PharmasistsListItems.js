import * as React from 'react';
import { View, Text } from 'react-native';

export default class PharmacistsListItems extends React.Component {
  render() {
    const {
      data: {
        item: {
          firstName, lastName, gender, city
        }
      },
    } = this.props;
    return (
      <View>
        <Text>{firstName}</Text>
        <Text>{lastName}</Text>
        <Text>{gender}</Text>
        <Text>{city}</Text>
      </View>
    );
  }
}
