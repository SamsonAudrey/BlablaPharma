'use strict';
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import t from 'tcomb-form-native';
import CButton from "../components/Button";

const Form = t.form.Form;
const Email = t.refinement(t.String, email => {
    const reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/; //or any other regexp
    return reg.test(email);
});
const User = t.struct({
    email: Email,
    firstName: t.String,
    lastName: t.String,
    password: t.String,
    confirmPassword: t.String,
    birth: t.String, //TODO,
});


class RegisterPatient extends Component {

    constructor(props) {
        super(props);
    }

    handleSubmit = () => {
        const value = this._form.getValue();
        console.log('value: ', value);
        const { navigation } = this.props;

        if (navigation.getParam('userKind') === 'pharmacist' && value !== null) {
            const { navigate } = this.props.navigation;
            navigate('RegisterPage_Pharmacist', {infoUser: value})
        } else {
            if (value !== null) {
                // REGISTER PATIENT USER
                console.log('try register ');
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
                    type={User}
                    options={options}
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
s.textbox.normal.minWidth = '70%';
s.textbox.error.minWidth = '70%';
s.textbox.normal.borderColor = '#707070';
s.textbox.normal.color = '#707070';
s.textbox.normal.borderRadius = 5;


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
            placeholderTextColor: '#707070'
        },
        confirmPassword: {
            placeholder: 'Confirmation mot de passe',
            placeholderTextColor: '#707070'
        },
        birth: {
            placeholder: 'Date de naissance',
            placeholderTextColor: '#707070'
        }
    },
    auto: 'placeholders',
    stylesheet: s
};


export default RegisterPatient
