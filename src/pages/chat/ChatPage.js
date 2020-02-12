import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet, Text, View } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import NotConnectedPage from '../../components/chat/NotConnectedPage';
import ConversationList from '../../containers/chat/ConversationListContainer';

export default class Chat extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <LinearGradient
          colors={['#BED469', '#BED469', '#BED469']}
        >
          <View style={styles.titleView}>
            <Text style={styles.title}>Messages</Text>
          </View>
        </LinearGradient>
        {this.props.isConnected
          ? (
            <ConversationList
              navigation={this.props.navigation}
            />
          )
          : <NotConnectedPage />}
      </SafeAreaView>
    );
  }
}

let styles = StyleSheet.create({
  titleView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
  title: {
    color: '#fff',
    fontSize: 24
  }
});
