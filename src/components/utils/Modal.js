import React, { Component } from 'react';
import Modal from 'react-native-modal';
import {
  View, Text, StyleSheet, TouchableHighlight
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CButton from '../buttons/Button';

class CModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: this.props.isVisible,
      show: false
    };
  }

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  render() {
    const isVisible = this.state.isModalVisible;
    return (
      <>
        <Modal isVisible={isVisible}>
          <View style={styles.modal}>
            <TouchableHighlight onPress={this.toggleModal} underlayColor="#fff">
              <Ionicons name="ios-close" size={40} color="#707070" style={styles.cross} />
            </TouchableHighlight>
            <View style={styles.modalContent}>
              <Text style={styles.text}>{this.props.text}</Text>
            </View>
            <View style={styles.buttonView}>
              {this.props.button}
              {this.props.noCancelButton ? null
                : (
                  <CButton
                    title="Annuler"
                    buttonStyle="green"
                    onPress={this.toggleModal}
                  />
                ) }
            </View>
          </View>
        </Modal>
        <TouchableHighlight
          onPress={() => {
            this.setState({ isModalVisible: true });
          }}
          underlayColor="#fff"
        >
          {this.props.handler}
        </TouchableHighlight>
      </>
    );
  }
}

const styles = StyleSheet.create({
  modal: {
    backgroundColor: '#fff',
    height: '40%',
    borderWidth: 1,
    color: '#707070'
  },
  modalContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    textAlign: 'center',
    color: '#707070',
    maxWidth: '80%',
    fontSize: 18
  },
  buttonView: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 5,
    marginTop: 0
  },
  cross: {
    alignSelf: 'flex-end',
    marginRight: 15
  }
});

export default CModal;
