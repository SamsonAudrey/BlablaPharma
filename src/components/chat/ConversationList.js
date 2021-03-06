import React, { Component } from 'react';
import {
  FlatList, View
} from 'react-native';
import ConversationListItems from './ConversationListItems';
import NoConversations from './NoConversations';

export default class ConversationList extends Component {
  componentDidMount() {
    this.props.onGetConversations();
  }

  handlePress = (conversationId, otherPerson) => {
    const { navigate } = this.props.navigation;
    navigate('Conversation', {
      conversationId,
      otherPerson
    });
  };

  handleRefresh = () => {
    this.props.onGetConversations();
  };

  getOtherPerson = (conversation) => {
    const { user } = this.props;
    const onePers = conversation.members[0];
    const secPers = conversation.members[1];
    if (onePers.id === user.account.id) {
      return secPers;
    }
    return onePers;
  };

  render() {
    return (
      <>
        {this.props.conversations.length > 0 ? (
          <FlatList
            data={this.props.conversations.reverse()}
            renderItem={(conversation) => (
              <ConversationListItems
                conversation={conversation}
                handlePress={this.handlePress}
                onDelete={this.props.onDelete}
                otherPerson={this.getOtherPerson(conversation.item)}
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
          <>
            {this.props.onGetConversations()}
            <NoConversations />
          </>
        )}
      </>
    );
  }
}
