'use strict';
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import t from 'tcomb-form-native';
import CButton from "../components/Button";
import moment from 'moment';


const Form = t.form.Form;

class RegisterPharmacist extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user: {},
        };

        this.CodePostal = t.refinement(t.String, (code) => {
            const reg = /[0-9]{5}/;
            return reg.test(code);
        });
        this.ProfessionalId = t.refinement(t.String, (id) => {
            const reg = /^(([0-9]{10}[A-z])|([0-9]{9}[A-z]{2})|([0-9]{11}))$/;
            return  reg.test(id);
        });
        this.User = t.struct({
            profession: t.String,
            ID: this.ProfessionalId,
            postalCode: this.CodePostal,
            city: t.String,
            address: t.String,
            institutionName: t.String,
        });
    }

    handleSubmit = () => {
        const value = this._form.getValue();
        if (value !== null) {
            // REGISTER PATIENT USER
            const { navigation } = this.props;
            const user = navigation.getParam('infoUser');
            try {
                const date = user.birth;
                const birthday = moment(date).format('YYYY-MM-DD');
                const gender = navigation.getParam('gender') === 0 ? 'male' : (navigation.getParam('gender') === 1 ? 'female' : 'another');

                this.props.onRegisterPharmacist(user.firstName,user.lastName,birthday, gender, user.email,user.password,
                    value.ID, value.profession, value.institutionName, value.address, value.postalCode, value.city);

                alert('Demande d\'inscription faite')
                const { navigate } = this.props.navigation;
                navigate('AuthPage');
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
s2.errorBlock.fontSize= 15;
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
            options: [{value:'pharmacist', text:'Pharmacien'},{value:'student', text:'Etudiant'}, {value:'pharmacistBlablapharma', text:'Blabla Pharmacien'}],
            //nullOption: {value: '1', text: 'Pharmacien'},
        },
        ID: {
            placeholder: 'Identifiant professionnel',
            placeholderTextColor: '#707070',
            error: "ID incorrect"
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
