import React from 'react';
import {
  Image, StyleSheet, View
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import CButton from '../../components/buttons/Button';

export default class UserInfoPage extends React.Component {
  constructor(props) {
    super(props);
    this._renderOnline = this._renderOnline.bind(this);
  }

  componentDidMount() {
    // store.subscribe(this.render);
  }

  handleSubmitLogout = () => {
    try {
      this.props.onUserLogout();
    } catch (error) {
      console.log(error.message);
    }
  };

  _renderOnline = (navigate) => (
    <>
      <CButton
        title="Déconnexion"
        onPress={() => {
          /* Navigate to the authentication page */
          this.handleSubmitLogout();
        }}
        long
      />
      <CButton
        title="Informations personnelles"
        onPress={() => {
          /* Navigate to the authentication page */
          navigate('UserPersonnalInfo');
        }}
        long
        buttonStyle="white"
      />
    </>
  );

  _renderOffline = (navigate) => (
    <>
      <CButton
        title="Connexion"
        onPress={() => {
          /* Navigate to the authentication page */
          // navigate("AuthPage");
          this.props.navigation.navigate('Connection');
        }}
        long
        buttonStyle="green"
      />
      <CButton
        title="Inscription"
        onPress={() => {
          /* Navigate to the register page */
          this.props.navigation.navigate('Register');
        }}
        long
        buttonStyle="green"
      />
    </>
  );

  checkConnexion = () => {
    if (this.props.isConnected) {
      console.log("T'es connecté User Info");
    } else {
      console.log("T'es pas connecté User Info");
    }
  };

  render() {
    let footer;
    let personalInfo;
    const { navigate } = this.props.navigation;
    if (this.props.isConnected) {
      footer = (
        <>
          <CButton
            title="Déconnexion"
            onPress={() => {
              /* Navigate to the authentication page */
              this.handleSubmitLogout();
            }}
            long
          />
        </>
      );
      personalInfo = (
        <CButton
          title="Informations personnelles"
          onPress={() => {
            /* Navigate to the authentication page */
            navigate('UserPersonnalInfo');
          }}
          long
          buttonStyle="white"
        />
      );
    } else {
      footer = (
        <>
          <CButton
            title="Connexion"
            onPress={() => {
              /* Navigate to the authentication page */
              // navigate("AuthPage");
              this.props.navigation.navigate('Connection');
            }}
            long
            buttonStyle="green"
          />
          <CButton
            title="Inscription"
            onPress={() => {
              /* Navigate to the register page */
              this.props.navigation.navigate('Register');
            }}
            long
            buttonStyle="green"
          />
        </>
      );
      personalInfo = (null);
    }
    return (
      <>
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.container}>
              <Image
                  source={require('../../assets/logo-fav.png')}
                  style={{ width: '20.30%', height: '14.40%', marginTop: '10%' }}
              />
            <View style={styles.middle}>
              {personalInfo}
              <CButton
                title="A propos"
                onPress={() => {
                  /* Navigate to the authentication page */
                  navigate('');
                }}
                long
                buttonStyle="white"
              />
              <CButton
                title="Protection des données"
                onPress={() => {
                  /* Navigate to the authentication page */
                  navigate('');
                }}
                long
                buttonStyle="white"
              />
              <CButton
                title="Conditions générales"
                onPress={() => {
                  /* Navigate to the authentication page */
                  navigate('');
                }}
                long
                buttonStyle="white"
              />
              <CButton
                title="Gestion des cookies "
                onPress={() => {
                  /* Navigate to the authentication page */
                  navigate('');
                }}
                long
                buttonStyle="white"
              />
            </View>
            <View style={styles.footer}>
              {footer}
            </View>
          </View>
        </SafeAreaView>

      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    // height: '100%',
    justifyContent: 'flex-end',

  },
  middle: {
    alignItems: 'center',
    marginVertical: '5%'
  },
  footer: {
    marginTop: '30%',
    justifyContent: 'flex-end',
  }
});
