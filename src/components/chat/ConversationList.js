import React, { Component } from 'react';
import {
  FlatList, View, Text
} from 'react-native';
import ConversationListItems from './ConversationListItems';

export default class ConversationList extends Component {
  componentDidMount() {
    this.props.onGetConversations();
  }

  handlPress = (conversationId, otherPerson) => {
    const { navigate } = this.props.navigation;
    navigate('Conversation', {
      conversationId,
      otherPerson
    });
  }

  handleRefresh = () => {
    this.props.onGetConversations();
  }

  getOtherPerson = (conversation) => {
    const { user } = this.props;
    console.log(JSON.stringify(conversation))
    const onePers = conversation.members[0];
    const secPers = conversation.members[1];
    console.log(onePers.id +'rrr'+ user.account.id)
    if (onePers.id === user.account.id) {
      return secPers;
    }
    return onePers;
  }

  render() {
    const isFetching = this.props.isFetching === true ? 'isFetching' : '';
    console.log("ueueu"+this.props.user)
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
