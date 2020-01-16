import React, { Component } from 'react';
import {
  ImageBackground, StyleSheet, Text, View
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import CButton from '../../components/Buttons/Button';
import HyperLinkText from '../../components/HyperLinkText';

class Register extends Component {
  render() {
    const { navigation } = this.props;
    const { navigate } = navigation;
    return (
      <SafeAreaView style={{ flex: 1 }}>

        <View>
          <View style={styles.titleView}>
            <Text style={styles.title}>Inscription</Text>
          </View>
          <View style={[styles.view, { marginTop: '8%' }]}>
            <ImageBackground
              source={require('../../assets/sign-in.jpg')}
              style={{ width: '100%', height: '100%', opacity: 1 }}
            >
              <View style={styles.buttonView}>
                <CButton
                  title="Je suis patient"
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
          <View style={[styles.view, { marginTop: '1%' }]}>
            <ImageBackground
              source={require('../../assets/sign-in-pharmacist_large_cut.png')}
              style={{ width: '100%', height: '100%', opacity: 1 }}
            >
              <View style={styles.buttonView}>
                <CButton
                  title="Je suis pharmacien"
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

          <View style={styles.linkText}>
            <Text style={{ color: '#868788', marginLeft: 20, fontSize: 16 }}>Déjà inscrit ?</Text>
            <HyperLinkText
              text="Se connecter"
              nav="AuthPage"
              onPress={() => navigate('Connection')}
              style={{ color: '#BED469', marginLeft: 10, fontSize: 16 }}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  titleView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  title: {
    color: '#BED469',
    fontSize: 24
  },
  view: {
    height: '39%',
  },
  buttonView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.3)'
  },
  linkText: {
    flexDirection: 'row',
    marginTop: 10,
  }
});

export default Register;
