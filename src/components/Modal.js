import React, { Component } from 'react';
import Modal from 'react-native-modal';
import {
  View, Text, Button, StyleSheet
} from 'react-native';
import FatButton from './FatButton';

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
    return (
      <Modal
        isVisible={this.state.isModalVisible}
      >
        <View style={styles.modal}>
          {this.state.show ? (
            <Button title="Hide modal" onPress={this.toggleModal} />)
            : (null)}
          <View style={styles.modalContent}>
            <Text style={styles.text}>{this.props.text}</Text>
          </View>
          <View style={styles.buttonView}>
            <FatButton title1="Continuer sur" title2="l'application" onPress={this.props.nav} />
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modal: {
    backgroundColor: '#fff',
    height: '40%'
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
  }
});

export default CModal;
