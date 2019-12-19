import * as React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

export default class PharmacistsListItems extends React.Component {
  render() {
    const {
      data: {
        item: {
          firstName, lastName, gender, city
        }
      },
    } = this.props;
    console.log("oooooooooooooooo" + JSON.stringify(firstName));
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
