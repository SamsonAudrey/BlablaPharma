import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';


class Loading extends Component {
  render() {
    return (
      <ActivityIndicator size="large" color="#707070" style={{ marginVertical: '5%' }} />
    );
  }
}

export default Loading;
