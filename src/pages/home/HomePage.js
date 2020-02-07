
import React, { Component } from 'react';
import {
  View, StyleSheet, Text, ImageBackground
} from 'react-native';
import FatButton from '../../components/buttons/FatButton';
import HyperLinkText from '../../components/utils/HyperLinkText';
import { store } from '../../../store';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const state = store.getState();
    return (
      <View style={styles.container}>
        <View style={styles.imageView}>
          <ImageBackground
            source={require('../../assets/first-page.jpg')}
            style={{ width: '100%', height: '100%', opacity: 1 }}
          >
            <View style={styles.sloganView}>
              <Text style={styles.slogan}>
Votre pharmacien
                {'\n'}
en ligne
                {'\n'}
et à votre écoute
              </Text>
            </View>
            <View style={styles.buttonView}>
              <FatButton
                title1="Contacter un"
                title2="pharmacien"
                onPress={() => {
                  this.props.navigation.navigate('SearchPharmacists');
                }}
              />
            </View>
          </ImageBackground>
        </View>

        <View style={styles.linkText}>
          {state.connection.isConnected ? null
            : (
              <>
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
              </>
            )}
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
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.5)',
  },
  slogan: {
    fontSize: 30,
    padding: 1,
    textAlign: 'center',
    color: '#707070',
    fontWeight: 'bold',
    marginTop: '5%'
  },
  imageView: {
    height: '88%',
  },
  buttonView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.5)',
  },
  linkText: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30
  }
});

export default Home;
