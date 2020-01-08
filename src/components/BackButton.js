import React, { Component } from 'react';
import { TouchableHighlight, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

class BackButton extends Component {
  render() {
    return (
      <TouchableHighlight
        onPress={this.props.onPress}
        style={styles.button}
      >
        <Ionicons name="ios-arrow-back" size={32} color="#707070" />
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: 150,
    margin: 5,
    marginLeft: 10,
    padding: 5,
    justifyContent: 'center',

  }
});

export default BackButton;
