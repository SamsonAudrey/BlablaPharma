
import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import t from 'tcomb-form-native';
import moment from 'moment';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import CButton from '../components/Button';
import ButtonTitle from '../components/ButtonTitle';
import { store } from '../../store';


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
    this.User = t.struct({
      profession: t.String,
      ID: this.ProfessionalId,
      postalCode: this.CodePostal,
      city: t.String,
      address: t.String,
      institutionName: t.String
    });

    const state = store.getState();
    this.userInfo = state.navigation.userInfo;
    this.userGender = state.navigation.userGender;
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

        this.props.onRegisterPharmacist(
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
        alert("Demande d'inscription faite");
        this.props.navigation.navigate('Home');
      } catch (error) {
        alert(error.message);
      }
    }
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <KeyboardAwareScrollView
          automaticallyAdjustContentInsets={false}
          resetScrollToCoords={{ x: 0, y: 0 }}
          enableOnAndroid
        >
          <View style={styles.imageView}>
            <ImageBackground
              source={require('../assets/sign-in-pharmacist_cut.png')}
              style={{ width: '100%', height: '100%', opacity: 1 }}
            >
              <View style={styles.title}>
                <ButtonTitle title="Je suis pharmacien" role="pharmacist" />
              </View>
            </ImageBackground>
          </View>
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
      </View>
    );
  }


  onChange(value) {
    this.state.user = value;
  }
}

// Custom Stylesheet
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
s2.pickerTouchable.normal.height = 36;
s2.pickerTouchable.normal.color = '#707070';
s2.pickerValue.normal.color = '#707070';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    paddingTop: 60
  },
  submitButton: {
    margin: 30
  },
  title: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.4)'
  },
  imageView: {
    marginTop: 0,
    height: '40%'
  }
});

const options = {
  fields: {
    profession: {
      // TODO format
      placeholder: 'Profession',
      factory: t.form.Select,
      options: [
        { value: 'pharmacist', text: 'Pharmacien' },
        { value: 'student', text: 'Etudiant' },
        { value: 'pharmacistBlablapharma', text: 'Blabla Pharmacien' }
      ]
      // nullOption: {value: '1', text: 'Pharmacien'},
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
