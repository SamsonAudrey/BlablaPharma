import React, { Component } from 'react';
import { TouchableHighlight, Text, StyleSheet } from 'react-native';

class ButtonTitle extends Component {
  render() {
    return (
      <TouchableHighlight
        style={[styles.button, this.props.role === 'patient' ? styles.buttonGreen : styles.buttonGrey]}
      >
        <Text
          style={[styles.buttonText, this.props.role === 'patient' ? styles.buttonTextGreen : styles.buttonTextGrey]}
        >
          { this.props.title }
        </Text>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    height: 40,
    width: 210,
    borderRadius: 5,
    margin: 5,
    padding: 5,
    justifyContent: 'center',
    opacity: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  buttonGreen: {
    backgroundColor: '#ffffff'
  },
  buttonGrey: {
    backgroundColor: '#868788'
  },
  buttonText: {
    fontSize: 20,
    alignSelf: 'center'
  },
  buttonTextGreen: {
    color: '#868788',
  },
  buttonTextGrey: {
    color: 'white',
  },
});

export default ButtonTitle;
