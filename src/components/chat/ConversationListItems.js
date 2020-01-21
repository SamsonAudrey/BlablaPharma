import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import CButton from '../Button'
export default class ConversationListItems extends Component {
  

  render() {
    //console.log(`props de item${JSON.stringify(this.props)}`);
    const conversation = this.props.conversation.item;
    const otherPerson = conversation.members[1];
    return (
      <>
        <View>
          <Text onPress={console.log('deecd')}>
            {otherPerson.firstName}
            {' '}
            {otherPerson.lastName}
          </Text>
          {conversation.messages.length > 0 ? (
            <Text>{conversation.messages[0].content}</Text>
          ) : <Text>Pas de message pour l instant</Text>}
        </View>
        <CButton
          onPress={() => this.props.handlPress(conversation.id, otherPerson.id)}
          title="Conv"
        />
      </>
    );
  }
}
