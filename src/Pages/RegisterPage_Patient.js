'use strict';
import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import t from 'tcomb-form-native';
import CButton from "../components/Button";
import moment from 'moment';

const Form = t.form.Form;

class RegisterPatient extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {}
        };

        this.Email = t.refinement(t.String, email => {
            const reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            return reg.test(email);
        });
        this.Password = t.refinement(t.String, (str) => {
            return str.length >= 6; // minimum password length should be 6 symbols
        });
        this.EqualPassword = t.refinement(t.String, (s) => {
            return s === this.state.user.password;
        });
        this.User = t.struct({
            email: this.Email,
            firstName: t.String,
            lastName: t.String,
            password: this.Password,
            confirmPassword: this.EqualPassword,
            birth: t.Date, //TODO,
        });
    }

    onChange(value) {
        this.state.user = value;
        console.log(this.state.user)
    }

    handleSubmit = () => {
        const value = this._form.getValue();
        const { navigation } = this.props;

        if (navigation.getParam('userKind') === 'pharmacist' && value !== null) {
            const { navigate } = this.props.navigation;
            navigate('RegisterPage_Pharmacist', {infoUser: value})
        } else {
            if (value !== null) {
                // REGISTER PATIENT USER
                try {
                    this.props.onRegisterPatient(value.firstName,value.lastName,value.birth, "male", value.email,value.password);
                } catch (error) {
                    alert(error.message);
                }
            }
        }
    };


    render() {
        const { navigation } = this.props;

        return (
            <View style={styles.container}>
                <Form
                    ref={c => this._form = c}
                    type={this.User}
                    options={options}
                    onChange={v => this.onChange(v)}
                />
                <CButton
                    title={navigation.getParam('userKind') === 'patient' ? "S'inscrire" : "Suivant"}
                    style={navigation.getParam('userKind') === 'patient' ? 'green' : 'grey'}
                    onPress={this.handleSubmit}/>
            </View>
        );
    }
}

// Custom Stylesheet
const _ = require('lodash');
const s = _.cloneDeep(t.form.Form.stylesheet)
s.textbox.normal.minWidth = '80%';
s.textbox.error.minWidth = '80%';
s.textbox.normal.borderColor = '#707070';
s.textbox.normal.color = '#707070';
s.textbox.normal.borderRadius = 5;
s.dateValue.normal.color = '#707070';
s.dateValue.normal.borderWidth = 1;
s.dateValue.normal.borderColor = '#707070';
s.dateValue.normal.borderRadius = 5;
s.dateValue.error.borderWidth = 1;
s.dateValue.error.color = '#707070';
s.dateValue.error.borderColor = '#a94442';
s.dateValue.error.borderRadius = 5;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 10,
        paddingTop: 80
    },
    formGroup: {
            height: 40,
            width: '80% !important',
            marginTop: 10,
            padding: 4,
            fontSize: 18,
            borderWidth: 1,
            borderColor: 'red',
            borderRadius: 5
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
            error: "Doit contenir au moins 6 caractères"
        },
        confirmPassword: {
            placeholder: 'Confirmation mot de passe',
            placeholderTextColor: '#707070',
            password: true,
            secureTextEntry: true,
            error: "Les mots de passe sont différents"
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
                    return new Date();
                },
                defaultValueText: 'Date de naissance',
            },

        }
    },
    auto: 'placeholders',
    stylesheet: s
};


export default RegisterPatient
