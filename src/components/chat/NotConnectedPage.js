import React, { Component } from 'react';
import {
  Image, StyleSheet, Text, View
} from 'react-native';

class NotConnectedPage extends Component {
  render() {
    return (
      <>
        <View style={styles.container}>
          <Image
            source={require('../../assets/logo-fav.png')}
            style={{
              width: 100, height: 110, opacity: 1, marginTop: '10%'
            }}
          />
          <Text style={styles.text}>
            Vous n'êtes pas connecté. Connectez-vous pour pouvoir envoyer des messages !
          </Text>
        </View>
      </>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '1%',
    alignItems: 'center',
    paddingVertical: '10%'
  },
  text: {
    textAlign: 'center',
    marginHorizontal: 10,
    marginVertical: '10%',
    fontSize: 22,
    color: '#BED469',
    fontWeight: 'bold'

  }
});


export default NotConnectedPage;
