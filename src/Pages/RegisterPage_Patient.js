'use strict';
import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import t from 'tcomb-form-native';
import CButton from "../components/Button";
import moment from 'moment';
import RadioForm from 'react-native-simple-radio-button';

const Form = t.form.Form;
const gender_props = [
    {label: 'Homme   ', value: 0 },
    {label: 'Femme   ', value: 1 },
    {label: 'Autre', value: 1 },
];

class RegisterPatient extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {},
            gender: 0
        };

        this.Email = t.refinement(t.String, email => {
            const reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            return reg.test(email);
        });
        this.Password = t.refinement(t.String, pwd => { // TODO
            //const reg = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[*@!#%&()[\\]^~\\\\|='\"{}\/_-]).{8,}$/;
            return pwd.length >= 6 ; //&& reg.test(pwd); // minimum password length should be 6 symbols
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
            birth: t.Date
        });
    }

    onChange(value) {
        this.state.user = value;
    }

    handleSubmit = () => {
        const value = this._form.getValue();
        const { navigation } = this.props;
        if (navigation.getParam('userKind') === 'pharmacist' && value !== null) {
            const { navigate } = this.props.navigation;
            navigate('RegisterPage_Pharmacist', {infoUser: value, gender : this.state.gender})
        } else {
            if (value !== null) {
                // REGISTER PATIENT USER
                try {
                    const gender = this.state.gender === 0 ? 'male' : this.state.gender === 1 ? 'female' : 'another';
                    const birthday = moment(value.birth).format('YYYY-MM-DD');
                    this.props.onRegisterPatient(value.firstName,value.lastName,birthday,
                        gender, value.email,value.password);
                } catch (error) { // TODO
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
                <RadioForm
                    radio_props={gender_props}
                    initial={0}
                    onPress={(value) => {this.state.gender = value;}}
                    formHorizontal={true}
                    buttonColor={'#868788'}
                    labelColor={'#868788'}
                    selectedButtonColor={'#868788'}
                    buttonSize={10}
                    buttonWrapStyle={{marginLeft: 20}}
                />
                <View style={styles.submitButton}>
                    <CButton
                        title={navigation.getParam('userKind') === 'patient' ? "S'inscrire" : "Suivant"}
                        buttonStyle={navigation.getParam('userKind') === 'patient' ? 'green' : 'grey'}
                        onPress={this.handleSubmit}
                    />
                </View>
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
    submitButton: {
        margin: 30
    }
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
                    return moment(new Date()).format('YYYY-MM-DD');
                },
                defaultValueText: 'Date de naissance',
            },

        }
    },
    auto: 'placeholders',
    stylesheet: s
};


export default RegisterPatient
