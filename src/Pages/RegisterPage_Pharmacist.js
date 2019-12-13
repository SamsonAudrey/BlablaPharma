'use strict';
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import t from 'tcomb-form-native';
import CButton from "../components/Button";

const Form = t.form.Form;

class RegisterPharmacist extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user: {},
        };

        this.CodePostal = t.refinement(t.String, (str) => {
            const reg = /[0-9]{5}/;
            return str.length === 5 && reg.test(str);
        });
        this.User = t.struct({
            profession: t.String,
            ID: t.String,
            postalCode: this.CodePostal,
            city: t.Number,
            address: t.String,
            institutionName: t.String,
        });
    }

    handleSubmit = () => {
        const value = this._form.getValue();
        const { navigation } = this.props;
        console.log('user: ', navigation.getParam('infoUser'));
        console.log('user: ', navigation.getParam('gender'));
        if (value !== null) {
            // REGISTER PATIENT USER
            console.log('try register pharma');
            const { navigation } = this.props;
            const user = navigation.getParam('infoUser');
            try {
                this.props.onRegisterPharmacist(user.firstName,user.lastName,user.birth, navigation.getParam('gender'), user.email,user.password,
                    value.ID, value.profession, value.institutionName, value.address, value.postalCode, value.city);
            } catch (error) {
                alert(error.message);
            }
        }
    };

    onChange(value) {
        this.state.user = value;
    }

    render() {
        return (
            <View style={styles.container}>
                <Form
                    ref={c => this._form = c}
                    type={this.User}
                    options={options}
                    onChange={v => this.onChange(v)}
                />
                <View style={styles.submitButton}>
                    <CButton
                        title={"S'inscrire"}
                        buttonStyle={'green'}
                        onPress={this.handleSubmit}/>
                </View>
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
        profession: { // TODO format
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
            placeholderTextColor: '#707070',
            keyboardType:'numeric',
            error: "Code Postal incorrect"
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
