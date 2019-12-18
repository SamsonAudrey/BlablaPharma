import * as React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

export default class PharmacistsListItems extends React.Component {
  render() {
    const {
      data: {
        firstName, lastName, gender, city
      },
    } = this.props;
    return (
      <View>
        {firstName}
        {lastName}
        {gender}
        {city}
      </View>
    );
  }
}
