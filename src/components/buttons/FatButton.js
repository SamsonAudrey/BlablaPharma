import React, { Component } from 'react';
import { TouchableHighlight, Text, StyleSheet } from 'react-native';

class FatButton extends Component {
  render() {
    return (
      <TouchableHighlight
        onPress={this.props.onPress}
        style={[styles.button, styles.buttonGreen]}
      >
        <Text
          numberOfLines={2}
          style={styles.buttonText}
        >
          {this.props.title1}
          {'\n'}
          {this.props.title2}
        </Text>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    height: 70,
    width: 180,
    borderRadius: 5,
    // margin: 5,
    padding: 5,
    justifyContent: 'center',
    opacity: 1,
    backgroundColor: '#BED469',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  buttonText: {
    fontSize: 20,
    alignSelf: 'center',
    color: '#fff',
  },
});

export default FatButton;
