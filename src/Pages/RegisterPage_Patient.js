'use strict';
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import t from 'tcomb-form-native';
import CButton from "../components/Button";

const Form = t.form.Form;
const User = t.struct({
    email: t.String,
    firstName: t.String,
    lastName: t.String,
    password: t.String,
    confirmPassword: t.String,
    birth: t.String, //TODO
})

class RegisterPatient extends Component {

    handleSubmit = () => {
        const value = this._form.getValue();
        console.log('value: ', value);
    }

    constructor(){
        super();
    }


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
                    style={navigation.getParam('userKind') === 'patient' ?'green' : 'grey'}
                    onPress={this.handleSubmit}/>
            </View>
        );
    }
}

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
        width: '80%',
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
        name: {
            stylesheet: styles // overriding the style of the textbox
        },
        email: {
            placeholder: 'Email',
        },
        firstName: {
            placeholder: 'Prénom'
        },
        lastName: {
            placeholder: 'Nom'
        },
        password: {
            placeholder: 'Mot de passe'
        },
        confirmPassword: {
            placeholder: 'Confirmation mot de passe'
        },
        birth: {
            placeholder: 'Date de naissance'
        }
    },
    auto: 'placeholders',
};

let tt = require('tcomb-form-native/lib');

// override globally the default stylesheet
tt.form.Form.stylesheet = styles;


export default RegisterPatient
