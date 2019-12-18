
import React, { Component } from 'react';
import {
  View, StyleSheet, ImageBackground
} from 'react-native';
import FatButton from '../components/FatButton';
import HyperLinkText from '../components/HyperLinkText';

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.imageView}>
          <ImageBackground
            source={require('../assets/auth.jpg')}
            style={{ width: '100%', height: '100%', opacity: 1 }}
          >
            <View style={styles.buttonView}>
              <FatButton
                title1="Contacter un"
                title2="pharmacien"
                onPress={() => this.props.navigation.navigate('Tab')}
              />
            </View>
          </ImageBackground>
        </View>

        <View style={styles.linkText}>
          <HyperLinkText
            text="Inscription"
            onPress={() => this.props.navigation.navigate('Register')}
            style={{ color: '#868788', fontSize: 16 }}
          />
          <HyperLinkText
            text="Connexion"
            onPress={() => this.props.navigation.navigate('Connection')}
            style={{ color: '#868788', fontSize: 16 }}
          />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageView: {
    height: '80%',
    marginTop: '20%'
  },
  buttonView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.3)',
  },
  linkText: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
  }
});

export default Home;
