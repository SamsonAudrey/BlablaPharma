import React, { Component } from 'react';
import {
  Image, StyleSheet, Text, View
} from 'react-native';

class NoPharmacistFound extends Component {
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
              Aucun Pharmacien trouvé, nous sommes désolés
          </Text>
        </View>
      </>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    paddingHorizontal: '1%',
    alignItems: 'center',
    paddingVertical: '10%',
    height: '100%'
  },
  text: {
    textAlign: 'center',
    marginVertical: '10%',
    fontSize: 20,
    color: '#BED469',
    fontWeight: 'bold',
  }
});


export default NoPharmacistFound;
