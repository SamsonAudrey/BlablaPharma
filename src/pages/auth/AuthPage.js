import React, { Component } from 'react';
import {
  ImageBackground, StyleSheet, Text, View
} from 'react-native';
import t from 'tcomb-form-native';
import DialogInput from 'react-native-dialog-input';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import SafeAreaView from 'react-native-safe-area-view';
import { store } from '../../../store';
import CModal from '../../components/utils/Modal';

import CButton from '../../components/buttons/Button';
import HyperLinkText from '../../components/utils/HyperLinkText';

const { Form } = t.form;

const Email = t.refinement(t.String, (email) => {
  const reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  return reg.test(email);
});

const User = t.struct({
  email: Email,
  password: t.String
});

export default class Auth extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      isDialogVisible: false,
      email: null
    };
    // this.checkConnexion = this.checkConnexion.bind(this);
  }

  componentDidMount() {
    console.log('component did mount');
    this.unsubscribe = store.subscribe(this.checkConnexion, this.render);
    this.checkConnexion();
  }

  componentWillUnmount() {
    this.props.onErrorClear();
  }

  checkConnexion = () => {
    const { isConnected } = this.props;
    if (isConnected) {
      try {
        const { navigate } = this.props.navigation;
        navigate('SearchPharmacists');
      } catch (e) {
        console.log('error : ', e);
      }
      this.unsubscribe();
    } else {
      console.log(`${isConnected}T'es pas connecté Auth Page`);
    }
  };

  handleSubmit = () => {
    const value = this._form.getValue();
    try {
      const { onUserAuth } = this.props;
      onUserAuth(value.email, value.password);
    } catch (error) {
      console.log(error.message);
    }
  };


dialogForgotPasswordState = (bool) => {
  this.setState({ isDialogVisible: bool });
  /* const value = this._form.getValue();
  if (value.email) {
    this.setState({ email: value.email });
  } */
}


render() {
  let error;
  this.props.error_401
    ? (error = <Text style={{ color: 'red' }}>Les identifiants donnés sont invalides</Text>)
    : (error = <Text />);
  const forgotPasswordSuccess = this.props.successForgotPassword ? (
    <CModal
      isVisible
      handler={<Text />}
      text={'Email envoyé à l\'adresse donnée.'}
      button={(
        <>
          <CButton
            title="Continuer"
            buttonStyle="green"
            onPress={() => {
              this.dialogForgotPasswordState(false);
              this.props.onSuccessClear();
            }}
          />
        </>
    )}
      noCancelButton
    />
  ) : null;

  const forgotPasswordError = this.props.error404ForgotPassword ? (
    <CModal
      isVisible
      handler={<Text />}
      text={"L'adresse mail donnée ne correspond pas à une adresse connue. \n Veuillez vérifier que vous êtes bien inscrit."}
      button={(
        <>
          <CButton
            title="Continuer"
            buttonStyle="Grey"
            onPress={() => {
              this.props.onErrorClear();
            }}
          />
        </>
    )}
      noCancelButton
    />
  ) : null;
  return (
    <>
      {forgotPasswordSuccess}
      {forgotPasswordError}
      <DialogInput
        isDialogVisible={this.state.isDialogVisible}
        title="Mot de passe oublié"
        message="Un email vous sera envoyé afin de récupérer votre mot de passe."
        hintInput="Votre email"
        initValueTextInput={this.state.email}
        cancelText="Annuler"
        submitText="Envoyer un email"
        submitInput={(inputText) => { this.props.onForgotPassword(inputText); }}
        closeDialog={() => { this.dialogForgotPasswordState(false); }}
      />
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAwareScrollView
          automaticallyAdjustContentInsets={false}
          enableOnAndroid
          style={{ flex: 1 }}
        >
          <View style={styles.titleView}>
            <Text style={styles.title}>Connexion</Text>
          </View>
          <View style={styles.container}>
            {error}
            <ImageBackground
              source={require('../../assets/engagement.jpg')}
              style={{ width: '100%', height: '100%' }}
            >
              <View style={styles.form}>
                <Form
                  ref={(c) => (this._form = c)}
                  type={User}
                  options={options}
                />
                <View style={styles.buttonView}>
                  <CButton
                    title="Connexion"
                    buttonStyle="grey"
                    onPress={this.handleSubmit}
                  />
                </View>
              </View>
            </ImageBackground>
          </View>

          <View style={styles.linkText1}>
            <HyperLinkText
              text="Mot de passe oublié ?"
              onPress={() => this.dialogForgotPasswordState(true)}
              style={{
                color: '#BED469', marginLeft: 20, fontSize: 16, marginTop: '5%'
              }}
            />

            <View style={styles.linkText2}>
              <Text style={{ color: '#868788', marginLeft: 20, fontSize: 16 }}>Pas encore inscrit ?</Text>
              <HyperLinkText
                text={'S\'inscrire'}
                onPress={() => this.props.navigation.navigate('Register')}
                style={{ color: '#BED469', marginLeft: 10, fontSize: 16 }}
              />
            </View>
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </>
  );
}
}


// Custom Stylesheet
// eslint-disable-next-line import/no-extraneous-dependencies
const _ = require('lodash');

const s = _.cloneDeep(t.form.Form.stylesheet);
s.textbox.normal.minWidth = '80%';
s.textbox.error.minWidth = '80%';
s.textbox.normal.borderColor = '#707070';
s.textbox.normal.color = '#707070';
s.textbox.normal.backgroundColor = '#fff';
s.textbox.error.backgroundColor = '#fff';
s.textbox.normal.borderRadius = 5;
s.textbox.normal.marginBottom = 20;
s.dateValue.normal.color = '#707070';
s.dateValue.normal.borderWidth = 1;
s.dateValue.normal.borderColor = '#707070';
s.dateValue.normal.borderRadius = 5;
s.dateValue.error.borderWidth = 1;
s.dateValue.error.color = '#707070';
s.dateValue.error.borderColor = '#a94442';
s.dateValue.error.borderRadius = 5;
s.errorBlock.fontSize = 15;


const options = {
  fields: {
    email: {
      error: "L'email est incorrect",
      placeholder: 'Email',
      placeholderTextColor: '#707070',
    },
    password: {
      error: 'Le mot de passe est incorrect',
      secureTextEntry: true,
      password: true,
      placeholder: 'Mot de passe',
      placeholderTextColor: '#707070',
    }
  },
  auto: 'placeholders',
  stylesheet: s
};

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
  container: {
    height: '70%',
    marginTop: '8%'
  },
  buttonView: {
    marginTop: '10%'
  },
  form: {
    paddingTop: '40%',
    padding: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    backgroundColor: 'rgba(255,255,255,0.4)',
  },
  linkText2: {
    marginTop: '3%',
    flexDirection: 'row'
  },
  linkText1: {
    marginTop: '3%'
  }
});
