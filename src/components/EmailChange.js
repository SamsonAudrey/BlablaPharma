import React, { Component } from 'react';
import {
  View, StyleSheet, Text
} from 'react-native';
import t from 'tcomb-form-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import CButton from './Button';

const { Form } = t.form;

export default class EmailChange extends Component {
  constructor(props) {
    super(props);
    const { account } = this.props;
    this.state = {
      email: account.email
    };

    this.Email = t.refinement(t.String, (email) => {
      const reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      return reg.test(email);
    });

    this.Email = t.struct({
      email : this.Email
    });
  }

  onChange(value) {
    this.state = value;
  }

  handleSubmit = () => {
    if (this._form.getValue()) {
      const { userUpdateRemoteAccount, account } = this.props;
      const { email } = this.state;
      const changes = {
        id: account.id,
        email
      };
      userUpdateRemoteAccount(changes);
    }
  }

  render() {
    const error403Update = this.props.error === true ? 'Email déjà utilisé' : '';
    return (
      <KeyboardAwareScrollView
        automaticallyAdjustContentInsets={false}
        enableOnAndroid
      >
        <View style={styles.form}>
          <Text>{error403Update}</Text>
          <Form
            ref={(c) => this._form = c}
            type={this.Email}
            options={options}
            initial={this.state}
            value={this.state}
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
    email: {
      placeholder: 'Email',
      placeholderTextColor: '#707070',
      error: "L'email est incorrect"
    },
  },
  auto: 'placeholders',
  stylesheet: s
};
