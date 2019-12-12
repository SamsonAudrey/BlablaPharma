'use strict';
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import t from 'tcomb-form-native';
import CButton from "../components/Button";

const Form = t.form.Form;
const User = t.struct({
    profession: t.String,
    ID: t.String,
    postalCode: t.String,
    city: t.String,
    address: t.String,
    institutionName: t.String, //TODO
});

class RegisterPharmacist extends Component {

    handleSubmit = () => {
        const value = this._form.getValue();
        console.log('value: ', value);
        if (value !== null) {
            // REGISTER PATIENT USER
            console.log('try register pharma');
            const { navigation } = this.props;
            const user = navigation.getParam('infoUser');
            //console.log('info user');
            //console.log(user);
            try {
                this.props.onRegisterPharmacist(user.firstName,user.lastName,user.birth, "male", user.email,user.password,
                    value.ID, value.profession, value.institutionName, value.address, value.postalCode, value.city);
            } catch (error) {
                alert(error.message);
            }
        }
    };

    constructor(){
        super();
    }

    render() {
        return (
            <View style={styles.container}>
                <Form
                    ref={c => this._form = c}
                    type={User}
                    options={options}
                />
                <CButton
                    title={"S'inscrire"}
                    style={'green'}
                    onPress={this.handleSubmit}/>
            </View>
        );
    }
}

// Custom Stylesheet
const _ = require('lodash');
const s2 = _.cloneDeep(t.form.Form.stylesheet)
s2.textbox.normal.minWidth = '70%';
s2.textbox.error.minWidth = '70%';
s2.textbox.normal.borderColor = '#707070';
s2.textbox.normal.color = '#707070';
s2.textbox.normal.borderRadius = 5;
s2.select.normal.borderRadius = 5;

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
        profession: {
            placeholder: 'Profession',
            factory: t.form.Select,
            options: [{value:'pharmacist', text:'Pharmacien'},{value:'student', text:'Etudiant'}, {value:'blabla_pharmacist', text:'Blabla Pharmacien'}],
            //nullOption: {value: '1', text: 'Pharmacien'},
        },
        ID: {
            placeholder: 'Identifiant professionnel',
            placeholderTextColor: '#707070'
        },
        city: {
            placeholder: 'Ville',
            placeholderTextColor: '#707070'
        },
        postalCode: {
            placeholder: 'Code postal',
            placeholderTextColor: '#707070'
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


export default RegisterPharmacist
