import React, { Component } from 'react';
import { TouchableHighlight, Text, StyleSheet } from 'react-native';

class CButton extends Component {
  render() {
    return (
      <TouchableHighlight
        onPress={this.props.onPress}
        underlayColor={this.props.buttonStyle === 'green' ? '#DCF271' : '#e2e2e2'}
        style={[
          styles.button,
          this.props.buttonStyle === 'green' ? styles.buttonGreen : this.props.buttonStyle === 'white' ? styles.buttonWhite : this.props.buttonStyle === 'danger' ? styles.buttonDanger : styles.buttonGrey,
          this.props.long ? { width: 250 } : null]}
      >
        <Text
          style={[styles.buttonText, this.props.buttonStyle === 'green' ? styles.buttonTextGreen : this.props.buttonStyle === 'white' ? styles.buttonTextWhite : styles.buttonTextGrey]}
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
    width: 150,
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
    backgroundColor: '#BED469'
  },
  buttonGrey: {
    backgroundColor: '#868788'
  },
  buttonDanger: {
    backgroundColor: 'red'
  },
  buttonWhite: {
    backgroundColor: 'white',
    borderColor: '#868788',
    borderWidth: 1,
  },
  buttonText: {
    fontSize: 16,
    alignSelf: 'center'
  },
  buttonTextGreen: {
    color: '#868788',
  },
  buttonTextGrey: {
    color: 'white',
  },
  buttonTextWhite: {
    color: '#868788'
  }
});

export default CButton;
