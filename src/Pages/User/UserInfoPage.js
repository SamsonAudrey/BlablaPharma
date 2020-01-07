import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import CButton from '../../components/Button';

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
      console.log("T'es connectéééé User Info");
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
        <View style={styles.container}>
          <View style={styles.middle}>
            {personalInfo}
            <CButton
              title="A propos"
              onPress={() => {
                /* Navigate to the authentication page */
                navigate('UserPersonnalInfo');
              }}
              long
              buttonStyle="white"
            />
            <CButton
              title="Protection des données"
              onPress={() => {
                /* Navigate to the authentication page */
                navigate('UserPersonnalInfo');
              }}
              long
              buttonStyle="white"
            />
            <CButton
              title="Conditions générales"
              onPress={() => {
                /* Navigate to the authentication page */
                navigate('UserPersonnalInfo');
              }}
              long
              buttonStyle="white"
            />
            <CButton
              title="Gestion des cookies "
              onPress={() => {
                /* Navigate to the authentication page */
                navigate('UserPersonnalInfo');
              }}
              long
              buttonStyle="white"
            />
          </View>
          <View style={styles.footer}>
            {footer}
          </View>
        </View>

      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: '100%',
    justifyContent: 'flex-end',
  },
  middle: {
    alignSelf: 'center',
  },
  footer: {
    height: '30%',
    justifyContent: 'flex-end',
    marginBottom: 20
  }
});
