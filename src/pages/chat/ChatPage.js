import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ConversationList from '../../containers/chat/ConversationListContainer';

export default class Chat extends Component {
  render() {
    return (
      <ConversationList
        navigation={this.props.navigation}
      />
    );
  }
}
