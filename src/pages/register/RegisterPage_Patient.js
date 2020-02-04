import React, { Component } from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  DeviceEventEmitter,
} from 'react-native';
import t from 'tcomb-form-native';
import moment from 'moment';
import RadioForm from 'react-native-simple-radio-button';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import SafeAreaView from 'react-native-safe-area-view';
import ImageFactory from 'react-native-image-picker-form';
import ButtonTitle from '../../components/buttons/ButtonTitle';
import CButton from '../../components/buttons/Button';
import { store } from '../../../store';
import CModal from '../../components/utils/Modal';

const { Form } = t.form;
const genderProps = [
  { label: 'Homme   ', value: 0 },
  { label: 'Femme   ', value: 1 },
  { label: 'Autre', value: 2 },
];

var RNUploader = require('react-native-uploader');

class RegisterPatient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      gender: 0
    };
    this.Email = t.refinement(t.String, (email) => {
      const reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      return reg.test(email);
    });
    this.Password = t.refinement(t.String, (pwd) => {
      const reg = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[*@!#%&()[\]^~\\|?='"{}/_-]).{8,}$/;
      return pwd.length >= 8 && reg.test(pwd); // minimum password length should be 8 symbols
    });

    this.EqualPassword = t.refinement(t.String, (confPwd) => {
      const { user } = this.state;
      const { password } = user;
      return password === confPwd;
    });
    this.User = t.struct({
      email: this.Email,
      firstName: t.String,
      lastName: t.String,
      password: this.Password,
      confirmPassword: this.EqualPassword,
      birth: t.Date,
      image: t.maybe(t.String)
    });
    const state = store.getState();
    this.userKind = state.navigationInfo.userKind;
  }

  componentDidMount() {
    this.props.onErrorClear();
    this.props.onSuccessClear();
  }

  componentWillUnmount() {
    this.props.onErrorClear();
    this.props.onSuccessClear();
  }

  onChange(value) {
    this.state.user = value;
  }

  handleSubmit = () => {
    const value = this._form.getValue();
    const { gender } = this.state;
    const { onRegisterPatient, onRegisterInfo, navigation } = this.props;
    if (this.userKind === 'pharmacist' && value !== null) {
      // 1 STEP REGISTER PHARMACIST USER
      onRegisterInfo(value, gender);
      navigation.navigate('RegisterPharmacist', { infoUser: value, gender });
    } else if (value !== null) {
      // REGISTER PATIENT USER
      try {
        const genderLabel = gender === 0 ? 'male' : gender === 1 ? 'female' : 'another';
        const birthday = moment(value.birth).format('YYYY-MM-DD');
        console.log('----------------');
        console.log(value.image);
        // onRegisterPatient(value.firstName, value.lastName, birthday,
          // genderLabel, value.email, value.password);
      } catch (error) { // TODO
        alert(error.message);
      }
    }
  };


  render() {
    let error;
    this.props.selector.error400Register
      ? (error = <Text style={{ color: '#a94442' }}>Email déjà utilisé</Text>)
      : (error = null);
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAwareScrollView
          automaticallyAdjustContentInsets={false}
          enableOnAndroid
          style={{ flex: 1 }}
        >
          <View style={styles.imageView}>
            <ImageBackground
              source={this.userKind === 'patient' ? require('../../assets/sign-in_cut.jpg') : require('../../assets/sign-in-pharmacist_cut.png')}
              style={{ width: '100%', height: '100%', opacity: 1 }}
            >
              <View style={styles.title}>
                <ButtonTitle
                  title={this.userKind === 'patient' ? 'Je suis patient' : 'Je suis pharmacien'}
                  role={this.userKind}
                />
              </View>
            </ImageBackground>
          </View>
          {this.props.selector.successRegister
            ? (
              <CModal
                isVisible
                handler={<Text />}
                text="Merci pour votre inscription sur BlablaPharma. Activez votre compte en clickant sur le lien reçu par mail."
                button={(
                  <CButton
                    title="Accueil"
                    buttonStyle="green"
                    onPress={() => this.props.navigation.navigate('Home')}
                  />
                )}
                noCancelButton
              />
            )
            : null}
          <View style={styles.form}>
            {error}
            <Form
              ref={(c) => this._form = c}
              type={this.User}
              options={options}
              onChange={(v) => this.onChange(v)}
              value={store.getState().navigationInfo.userInfo}
            />
            <RadioForm
              radio_props={genderProps}
              initial={0}
              onPress={(value) => { this.state.gender = value; }}
              formHorizontal
              buttonColor="#868788"
              labelColor="#868788"
              selectedButtonColor="#868788"
              buttonSize={10}
              buttonWrapStyle={{ marginLeft: 20 }}
              style={{ marginTop: '5%' }}
            />
            <View style={styles.submitButton}>
              <CButton
                title={this.userKind === 'patient' ? "S'inscrire" : 'Suivant'}
                buttonStyle={this.userKind === 'patient' ? 'green' : 'grey'}
                onPress={this.handleSubmit}
              />
            </View>
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    );
  }
}

// Custom Stylesheet
// eslint-disable-next-line import/no-extraneous-dependencies
const _ = require('lodash');

const s = _.cloneDeep(t.form.Form.stylesheet);
s.textbox.normal.minWidth = '70%';
s.textbox.error.minWidth = '70%';
s.textbox.normal.borderColor = '#707070';
s.textbox.normal.color = '#707070';
s.textbox.normal.borderRadius = 5;
s.dateValue.normal.color = '#707070';
s.dateValue.normal.borderWidth = 1;
s.dateValue.normal.borderColor = '#707070';
s.dateValue.normal.borderRadius = 5;
s.dateValue.error.borderWidth = 1;
s.dateValue.error.minWidth = '70%';
s.dateValue.error.color = '#707070';
s.dateValue.error.borderColor = '#a94442';
s.dateValue.error.borderRadius = 5;
s.errorBlock.fontSize = 15;
s.controlLabel.normal.color = 'red';

const styles = StyleSheet.create({
  form: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginTop: '10%'
  },
  imageView: {
    height: '20%'
  },
  submitButton: {
    marginTop: '5%',
    height: 150
  },
  title: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.4)'
  },
});

const options = {
  fields: {
    email: {
      placeholder: 'Email',
      placeholderTextColor: '#707070',
      error: "L'email est incorrect"
    },
    firstName: {
      placeholder: 'Prénom',
      placeholderTextColor: '#707070'
    },
    lastName: {
      placeholder: 'Nom',
      placeholderTextColor: '#707070'
    },
    password: {
      placeholder: 'Mot de passe',
      placeholderTextColor: '#707070',
      password: true,
      secureTextEntry: true,
      error: 'Doit contenir une majuscule, \nune minuscule, un symbole et \nminimum 8 caractères'
    },
    confirmPassword: {
      placeholder: 'Confirmation mot de passe',
      placeholderTextColor: '#707070',
      password: true,
      secureTextEntry: true,
      error: 'Les mots de passe sont différents'
    },
    birth: {
      placeholder: 'Date de naissance',
      placeholderTextColor: '#707070',
      mode: 'date', // display the Date field as a DatePickerAndroid
      config: {
        format: (date) => {
          if (date) {
            return moment(date).format('YYYY-MM-DD');
          }
          return moment(new Date()).format('YYYY-MM-DD');
        },
        defaultValueText: 'Date de naissance',
      },

    },
    image: {
      config: {
        title: 'Choisir une photo de profil',
        options: ['Ouvrir camera', 'Selection gallerie', 'Annuler'],
        // Used on Android to style BottomSheet
        style: {
        },
        // cropping: false
      },
      error: 'Aucune image',
      factory: ImageFactory
    }
  },
  auto: 'placeholders',
  stylesheet: s,
  config: { buttonTextColor: '#707070' }
};


export default RegisterPatient;
