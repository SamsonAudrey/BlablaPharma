import React from 'react';
import {
  StyleSheet, Text, View
} from 'react-native';

export default class SceneBlog extends React.Component {
  render() {
    return (
      <View style={styles.scene}>
        <Text>En construction</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scene: {
    alignItems: 'center',
  }
});
