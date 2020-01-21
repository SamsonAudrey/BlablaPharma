import React, { Component } from 'react';
import {
  FlatList, View, Text
} from 'react-native';
import ConversationListItems from './ConversationListItems';
import ConversationContainer from '../../containers/Chat/ConversationContainer';


export default class ConversationList extends Component {
  componentDidMount() {
    this.props.onGetConversations();
  }

  handlPress = (conversationId, memberId) => {
    const { navigate } = this.props.navigation;
    navigate('Conversation', {
      conversationId,
      memberId
    });
  }

  handleRefresh = () => {
    this.props.onGetConversations();
  }

  render() {
    const isFetching = this.props.isFetching === true ? 'isFetching' : '';
    return (
      <>
        <Text>{isFetching}</Text>
        {this.props.conversations.length > 0 ? (
          <FlatList
            data={this.props.conversations}
            renderItem={(conversation) => (
              <ConversationListItems
                conversation={conversation}
                handlPress={this.handlPress}
              />
            )}
            refreshing={this.props.isFetching}
            onRefresh={this.handleRefresh}
            keyExtractor={(item) => item.id.toString()}
            ItemSeparatorComponent={() => (
              <View style={{ height: 0.5, backgroundColor: '#E5E5E5' }} />
            )}
          />
        ) : (
          <Text
            onPress={this.handleRefresh}
          >
            {' '}
Vous n avez pas de conversation pour le moment
          </Text>
        )}
      </>
    );
  }
}
