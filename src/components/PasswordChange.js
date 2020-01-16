import React, { Component } from 'react';
import {
  View, StyleSheet, Text
} from 'react-native';
import t from 'tcomb-form-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import CButton from './Buttons/Button';

const { Form } = t.form;

export default class PasswordChange extends Component {
  constructor(props) {
    super(props);

    this.state = {
      passwords: {}
    };

    this.Password = t.refinement(t.String, (pwd) => {
      const reg = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[*@!#%&()[\]^~\\|?='"{}/_-]).{8,}$/;
      return pwd.length >= 8 && reg.test(pwd); // minimum password length should be 8 symbols
    });

    this.EqualPassword = t.refinement(t.String, (s) => {
      const { passwords } = this.state;
      const { newPassword } = passwords;
      console.log(`${JSON.stringify(passwords)}  ${s}`);
      return newPassword === s;
    });

    this.Passwords = t.struct({
      oldPassword: this.Password,
      newPassword: this.Password,
      confirmNewPassword: this.EqualPassword,
    });
  }

  componentWillUnmount() {
    const { account } = this.props;
    this.props.onUserSearch(account.id);
  }

  onChange(value) {
    this.state.passwords = value;
  }

  handleSubmit = () => {
    const value = this._form.getValue();
    if (this._form.getValue()) {
      const { userUpdateRemoteAccount, account } = this.props;
      const { passwords } = this.state;
      const changes = {
        id: account.id,
        oldPassword: passwords.oldPassword,
        newPassword: passwords.newPassword
      };
      userUpdateRemoteAccount(changes);
      this.setState(undefined);
    }
  }

  render() {
    const error403Update = this.props.error === true ? "L'ancien mot de passe n'est pas bon" : '';
    return (
      <KeyboardAwareScrollView
        automaticallyAdjustContentInsets={false}
        enableOnAndroid
      >
        <View style={styles.form}>
          <Text>{error403Update}</Text>
          <Form
            ref={(c) => this._form = c}
            type={this.Passwords}
            options={options}
            value={this.state.passwords}
            onChange={(text) => this.onChange(text)}
          />
          <View style={styles.submitButton}>
            <CButton
              title="Mettre à jour"
              buttonStyle="green"
              onPress={this.handleSubmit}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

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
    marginVertical: '5%',
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
    oldPassword: {
      placeholder: 'Ancien mot de passe',
      placeholderTextColor: '#707070',
      password: true,
      secureTextEntry: true,
      error: 'Doit contenir une majuscule, \nune minuscule, un symbole et \nminimum 8 caractères'
    },
    newPassword: {
      placeholder: 'Nouveau mot de passe',
      placeholderTextColor: '#707070',
      password: true,
      secureTextEntry: true,
      error: 'Doit contenir une majuscule, \nune minuscule, un symbole et \nminimum 8 caractères'
    },
    confirmNewPassword: {
      placeholder: 'Confirmation mot de passe',
      placeholderTextColor: '#707070',
      password: true,
      secureTextEntry: true,
      error: 'Les mots de passe sont différents'
    },
  },
  auto: 'placeholders',
  stylesheet: s
};
