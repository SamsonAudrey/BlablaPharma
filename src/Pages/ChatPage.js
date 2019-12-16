"use strict";
import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";

class ListChat extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Chat</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    padding: 10,
    paddingTop: 80
  }
});

export default ListChat;
