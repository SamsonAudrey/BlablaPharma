import React, { Component } from 'react';
import { TouchableHighlight, Text, StyleSheet } from 'react-native';

class CButton extends Component {
    render() {
        return (
            <TouchableHighlight
                onPress={this.props.onPress}
                style={[styles.button, this.props.style === 'green' ? styles.buttonGreen : styles.buttonGrey]}>
                <Text
                    style={[styles.buttonText, this.props.style === 'green' ? styles.buttonTextGreen : styles.buttonTextGrey]}>
                    { this.props.title }
                </Text>
            </TouchableHighlight>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        height: 40,
        width: 150,
        borderRadius: 5,
        margin: 5,
        padding: 5,
        justifyContent: 'center'
    },
    buttonGreen: {
        backgroundColor: '#BED469'
    },
    buttonGrey: {
        backgroundColor: '#868788'
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
})

export default CButton
