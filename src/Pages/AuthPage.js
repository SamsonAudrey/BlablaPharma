import React from "react";
import { View, Text } from "react-native";

export default class AuthPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text> Pharmacist </Text>
      </View>
    );
  }
}
