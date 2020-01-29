import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity, Button
} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import CButton from '../buttons/Button';

export default class ConversationListItems extends Component {
renderRightActions = () => (
  <TouchableOpacity
    onPress={() => this.props.onDelete(conversation.id)}
    style={{ scaleY: 100, scaleX: 2, backgroundColor: '#cc0000' }}
  />
)

render() {
  const conversation = this.props.conversation.item;
  const { otherPerson, onDelete } = this.props;
  return (
    <Swipeable
      renderRightActions={this.renderRightActions}
    >
      <View>
        <Text>
          {otherPerson.firstName}
          {' '}
          {otherPerson.lastName}
        </Text>
        {conversation.messages.length > 0 ? (
          <Text>
            {conversation.messages[0].read ? 'true' : 'false'}
            {conversation.messages[0].content}
          </Text>
        ) : <Text>Pas de message pour l instant</Text>}
      </View>
      <CButton
        onPress={() => this.props.handlPress(conversation.id, otherPerson)}
        title="Conv"
      />
    </Swipeable>
  );
}
}
