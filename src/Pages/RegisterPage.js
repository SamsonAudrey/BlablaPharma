import React, { Component } from 'react';
import {
  ImageBackground, StyleSheet, Text, View
} from 'react-native';
import CButton from '../components/Button';
import HyperLinkText from '../components/HyperLinkText';

class Register extends Component {
  render() {
    const { navigation } = this.props;
    const { navigate } = navigation;
    return (
      <View>
        <View style={styles.titleView}>
          <Text style={styles.title}>Inscription</Text>
        </View>
        <View style={styles.view}>
          <ImageBackground
            source={require('../assets/sign-in-pharmacist_large_cut.png')}
            style={{ width: '100%', height: '100%', opacity: 1 }}
          >
            <View style={styles.buttonView}>
              <CButton
                title="Pharmacien"
                buttonStyle="grey"
                onPress={() => {
                  const { onRegisterKind } = this.props;
                  onRegisterKind('pharmacist');
                  navigation.navigate('RegisterPatient', { userKind: 'pharmacist' });
                }}
              />
            </View>
          </ImageBackground>
        </View>
        <View style={styles.view}>
          <ImageBackground
            source={require('../assets/sign-in.jpg')}
            style={{ width: '100%', height: '100%', opacity: 1 }}
          >
            <View style={styles.buttonView}>
              <CButton
                title="Patient"
                buttonStyle="green"
                onPress={() => {
                  const { onRegisterKind } = this.props;
                  onRegisterKind('patient');
                  navigation.navigate('RegisterPatient', { userKind: 'patient' });
                }}
              />
            </View>
          </ImageBackground>
        </View>
        <View style={styles.linkText}>
          <Text style={{ color: '#868788', marginLeft: 10, fontSize: 16 }}>Déjà inscrit ?</Text>
          <HyperLinkText
            text="Se connecter"
            nav="AuthPage"
            onPress={() => navigate('Connection')}
            style={{ color: '#BED469', marginLeft: 10, fontSize: 16 }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10%',

  },
  title: {
    color: '#BED469',
    fontSize: 24
  },
  view: {
    marginBottom: '10%',
    height: '30%',
  },
  buttonView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.3)'
  },
  linkText: {
    flex: 1,
    flexDirection: 'row'
  }
});

export default Register;
