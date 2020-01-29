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
  console.log(JSON.stringify(this.props));
  return (
    <>

      <Swipeable
        renderRightActions={this.renderRightActions}
      >
        <TouchableOpacity
          onPress={() => this.props.handlePress(conversation.id, otherPerson)}
        >
          <View style={styles.container}>
            <View style={{}}>
              <Image
                source={picture ? { uri: picture } : require('../../assets/logo-fav.png')}
                style={{
                  width: '12%', height: '100%'
                }}
              />
            </View>

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


const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: '#707070',
    borderWidth: 1,
    borderRadius: 5,
    width: Dimensions.get('window').width * 0.8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
    padding: 10,
    paddingBottom: 0,
    backgroundColor: 'white',
    height: 40,
    alignItems: 'center'
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 7
  },
  text: {
    color: '#707070',
    fontSize: 12,
  },
  title: {
    color: '#707070',
    fontWeight: 'bold',
    fontSize: 16,
    marginVertical: 5,
    textAlign: 'center',
    // flex: 1,
  }
});
