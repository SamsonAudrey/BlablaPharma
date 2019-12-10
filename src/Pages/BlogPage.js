import React from "react";
import { Button, View, Text } from "react-native";

export default class BlogPage extends React.Component {
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
