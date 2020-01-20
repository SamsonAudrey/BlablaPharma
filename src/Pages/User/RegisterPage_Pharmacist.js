import React, { Component } from 'react';
import {
  ImageBackground, Platform, StyleSheet, Text, View
} from 'react-native';
import t from 'tcomb-form-native';
import moment from 'moment';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import SafeAreaView from 'react-native-safe-area-view';
import CButton from '../../components/Buttons/Button';
import ButtonTitle from '../../components/Buttons/ButtonTitle';
import { store } from '../../../store';
import BackButton from '../../components/Buttons/BackButton';
import CModal from '../../components/Modal';

const { Form } = t.form;

class RegisterPharmacist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {}
    };

    this.CodePostal = t.refinement(t.String, (code) => {
      const reg = /[0-9]{5}/;
      return reg.test(code);
    });
    this.ProfessionalId = t.refinement(t.String, (id) => {
      const reg = /^(([0-9]{10}[A-z])|([0-9]{9}[A-z]{2})|([0-9]{11}))$/;
      return reg.test(id);
    });
    this.AllString = t.refinement(t.String, (str) => str.length > 1);
    this.User = t.struct({
      profession: t.String,
      ID: this.ProfessionalId,
      postalCode: this.CodePostal,
      city: this.AllString,
      address: this.AllString,
      institutionName: this.AllString
    });

    const state = store.getState();
    this.userInfo = state.navigationInfo.userInfo;
    this.userGender = state.navigationInfo.userGender;
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
    if (value !== null) {
      // REGISTER PATIENT USER
      const user = this.userInfo;
      try {
        const date = user.birth;
        const birthday = moment(date).format('YYYY-MM-DD');
        const gender = this.userGender === 0
          ? 'male'
          : this.userGender === 1
            ? 'female'
            : 'another';

        const { onRegisterPharmacist, navigation } = this.props;
        onRegisterPharmacist(
          user.firstName,
          user.lastName,
          birthday,
          gender,
          user.email,
          user.password,
          value.ID,
          value.profession,
          value.institutionName,
          value.address,
          value.postalCode,
          value.city
        );
      } catch (error) {
        alert(error.message);
      }
    }
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAwareScrollView
          automaticallyAdjustContentInsets={false}
          enableOnAndroid
          style={{ flex: 1 }}
        >
          <View style={styles.imageView}>
            <ImageBackground
              source={require('../../assets/sign-in-pharmacist_cut.png')}
              style={{ width: '100%', height: '100%', opacity: 1 }}
            >
              <View style={styles.title}>
                <ButtonTitle title="Je suis pharmacien" role="pharmacist" />
              </View>
            </ImageBackground>
          </View>
          <BackButton
            title="Retour"
            onPress={() => this.props.navigation.goBack()}
          />
          {this.props.selector.successRegisterPharmacist
            ? (
              <CModal
                isVisible
                handler={<Text />}
                text="Merci pour votre inscription sur BlablaPharma. Votre demande de création de compte est en cours de traitement."
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
          <View style={styles.container}>
            <Form
              ref={(c) => this._form = c}
              type={this.User}
              options={options}
              onChange={(v) => this.onChange(v)}
            />
            <View style={styles.submitButton}>
              <CButton
                title={"S'inscrire"}
                buttonStyle="green"
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

const s2 = _.cloneDeep(t.form.Form.stylesheet);
s2.textbox.normal.minWidth = '70%';
s2.textbox.error.minWidth = '70%';
s2.textbox.normal.borderColor = '#707070';
s2.textbox.normal.color = '#707070';
s2.textbox.normal.borderRadius = 5;
s2.errorBlock.fontSize = 15;
s2.pickerContainer.normal.borderColor = '#707070';
s2.pickerContainer.normal.borderRadius = 5;
s2.select.normal.color = '#707070';
s2.select.normal.borderWidth = 1;
s2.select.normal.borderRadius = 1;
s2.select.normal.borderColor = '#707070';
s2.pickerTouchable.normal.height = 36;
s2.pickerTouchable.normal.color = '#707070';
s2.pickerValue.normal.color = '#707070';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10%'
  },
  imageView: {
    height: '25%'
  },
  submitButton: {
    marginTop: '5%',
    height: 140
  },
  title: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.4)'
  }
});

const options = {
  fields: {
    profession: {
      placeholder: 'Profession',
      factory: t.form.Select,
      options: [
        { value: 'pharmacist', text: 'Pharmacien' },
        { value: 'student', text: 'Etudiant' },
        { value: 'pharmacistBlablapharma', text: 'Blabla Pharmacien' }
      ],
      nullOption: { value: 'default', text: 'Profession' },
    },
    ID: {
      placeholder: 'Identifiant professionnel',
      placeholderTextColor: '#707070',
      error: 'ID incorrect'
    },
    city: {
      placeholder: 'Ville',
      placeholderTextColor: '#707070'
    },
    postalCode: {
      placeholder: 'Code postal',
      placeholderTextColor: '#707070',
      keyboardType: 'numeric',
      error: 'Code Postal incorrect'
    },
    address: {
      placeholder: 'Adresse',
      placeholderTextColor: '#707070'
    },
    institutionName: {
      placeholder: 'Nom établissement',
      placeholderTextColor: '#707070'
    }
  },
  auto: 'placeholders',
  stylesheet: s2
};

export default RegisterPharmacist;
