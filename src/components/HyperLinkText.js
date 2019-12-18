import React, { Component } from 'react';
import { Text, View } from 'react-native';


class HyperLinkText extends Component {
  render() {
    return (
      <View>
        <Text onPress={() => this.props.onPress()} style={this.props.style}>{this.props.text}</Text>
      </View>

    );
  }
}

export default HyperLinkText;
