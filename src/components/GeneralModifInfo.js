import React, { Component } from 'react';
import {
  View, StyleSheet
} from 'react-native';
import t from 'tcomb-form-native';
import RadioForm from 'react-native-simple-radio-button';
import moment from 'moment';
import CButton from './Button';

const { Form } = t.form;
const genderProps = [
  { label: 'Homme   ', value: 0 },
  { label: 'Femme   ', value: 1 },
  { label: 'Autre', value: 2 },
];

export default class GeneralModif extends Component {
  constructor(props) {
    super(props);
    const { account } = this.props;
    this.state = {
      user: {
        firstName: account.firstName,
        lastName: account.lastName
      },
      gender: account.gender === 'male' ? 0 : account.gender === 'female' ? 1 : 2
    };

    this.Name = t.refinement(t.String, (name) => name.length >= 2);

    this.General = t.struct({
      firstName: this.Name,
      lastName: this.Name,
      birth: t.Date
    });
  }

  componentWillUnmount() {
    const { account } = this.props;
    this.props.onUserSearch(account.id);
  }

  onChange(value) {
    this.state.user = value;
  }

  handleSubmit = () => {
    const { userUpdateRemoteAccount, account } = this.props;
    const value = this._form.getValue();
    if (value) {
      const { gender } = this.state;
      const changes = {
        id: account.id,
        firstName: value.firstName,
        lastName: value.lastName,
        birthDayDate: value.birth,
        gender: gender === 0 ? 'male' : gender === 1 ? 'female' : 'another'
      };
      userUpdateRemoteAccount(changes);
    }
  }

  render() {
    return (
      <View style={styles.form}>
        <Form
          ref={(c) => this._form = c}
          type={this.General}
          options={options}
          initial={this.state.user}
          value={this.state.user}
          onChange={(v) => this.onChange(v)}
        />
        <RadioForm
          radio_props={genderProps}
          initial={this.state.gender}
          onPress={(value) => { this.state.gender = value; }}
          formHorizontal
          buttonColor="#868788"
          labelColor="#868788"
          selectedButtonColor="#868788"
          buttonSize={10}
          buttonWrapStyle={{ marginLeft: 20 }}
          style={{ marginTop: '4%' }}
        />
        <View style={styles.submitButton}>
          <CButton
            title="Mettre à jour"
            buttonStyle="grey"
            onPress={this.handleSubmit}
          />
        </View>
      </View>
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
    marginTop: '5%',
    height: 120
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
      placeholderTextColor: '#707070',
      error: 'Doit contenir minimum 1 caractères'
    },
    lastName: {
      placeholder: 'Nom',
      placeholderTextColor: '#707070',
      error: 'Doit contenir minimum 1 caractères'
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
  },
  auto: 'placeholders',
  stylesheet: s
};
