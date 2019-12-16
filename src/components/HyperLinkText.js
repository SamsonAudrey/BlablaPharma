import React, { Component } from 'react';
import { Text, View } from 'react-native';


class HyperLinkText extends Component {

    handlePress= () => {
        const {navigate} = this.props.navigation;
        navigate(this.props.nav)
    };

    render() {
        return (
            <View>
                <Text onPress={()=> this.props.onPress()} style = {this.props.style}>{this.props.text}</Text>
            </View>

        )
    }
}

export default HyperLinkText
