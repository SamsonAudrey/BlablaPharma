import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity, Image, StyleSheet, Dimensions
} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { TouchableHighlight } from 'react-native-gesture-handler';
import CButton from '../buttons/Button';
import CModal from '../utils/Modal';

export default class ConversationListItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      askConfirm: false
    };
  }

renderRightActions = () => (
  <TouchableOpacity
    onPress={() => {
      this.setState({ askConfirm: true });
    }}
    style={{
      width: '10%', height: '50%', marginRight: '5%', alignSelf: 'center'
    }}
  >
    <Image
      source={require('../../assets/trash.png')}
      style={{ width: '100%', height: '100%', alignSelf: 'center' }}
    />
  </TouchableOpacity>
);


render() {
  const conversation = this.props.conversation.item;
  const { otherPerson } = this.props;
  const { picture } = otherPerson;
  const readBold = conversation.messages[0] ? (!conversation.messages[0].read && conversation.messages[0].author === otherPerson.id ? 'bold' : null) : null;
  return (
    <>

      <Swipeable
        renderRightActions={this.renderRightActions}
      >
        <TouchableOpacity
          onPress={() => this.props.handlePress(conversation.id, otherPerson)}
          style={{
            padding: '0%',
            marginVertical: '6%',
            marginHorizontal: '3%'
          }}
        >
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{ width: '22%', height: '82%', justifyContent: 'center' }}>
              <Image
                source={picture ? { uri: picture } : require('../../assets/logo-fav.png')}
                style={{
                  width: '70%', height: '100%', justifyContent: 'center'
                }}

              />
            </View>

            <View style={{ width: '60%' }}>
              <Text numberOfLines={1} style={{ width: '100%', fontWeight: readBold }}>
                {otherPerson.firstName}
                {' '}
                {otherPerson.lastName}
              </Text>
              {conversation.messages.length > 0 ? (
                <Text numberOfLines={1} style={{ marginRight: '15%', color: '#707070', fontWeight: readBold }}>
                  {conversation.messages[0].content}
                </Text>
              ) : <Text>Pas de message pour l instant</Text>}


            </View>
            <View style={{ width: '30%', height: '100%', marginTop: '3%' }}>
              <Image
                source={conversation.messages[0] ? (conversation.messages[0].author !== otherPerson.id ? (conversation.messages[0].read ? require('../../assets/seen.png') : require('../../assets/not-seen.png')) : null) : null}
                style={{
                  width: '19%', height: '24%', alignSelf: 'center', marginRight: '80%'
                }}
              />
            </View>
          </View>
        </TouchableOpacity>
      </Swipeable>
      {this.state.askConfirm
        ? (
          <CModal
            isVisible
            handler={<Text />}
            text={`Vous êtes sur le point de supprimer la conversation avec ${this.props.otherPerson.firstName} ${this.props.otherPerson.lastName} êtes vous sûr ?`}
            button={(
              <>
                <CButton
                  title="Supprimer"
                  buttonStyle="danger"
                  onPress={() => {
                    this.setState({ askConfirm: false });
                    this.props.onDelete(this.props.conversation.item.id);
                  }}
                />
                <CButton
                  title="Annuler"
                  buttonStyle="grey"
                  onPress={() => {
                    this.setState({ askConfirm: false });
                  }}
                />
              </>
            )}
            noCancelButton
          />
        )
        : null}
    </>
  );
}
}
