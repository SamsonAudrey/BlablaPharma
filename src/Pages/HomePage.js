
import React, { Component } from 'react';
import {
  View, StyleSheet, Text, ImageBackground
} from 'react-native';
import FatButton from '../components/FatButton';
import HyperLinkText from '../components/HyperLinkText';

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.sloganView}>
          <Text style={styles.slogan}>Votre pharmacien en ligne {'\n'}et à votre écoute</Text>
        </View>
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
  sloganView: {
    alignItems: 'center',
    margin: 15
  },
  slogan: {
    fontSize: 20,
    textAlign: 'center',
    color: '#707070',
    fontWeight: 'bold',
  },
  imageView: {
    height: '75%',
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
    marginTop: 30
  }
});

export default Home;
