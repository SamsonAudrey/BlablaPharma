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
    buildingName: t.String, //TODO
});

class RegisterPharmacist extends Component {

    handleSubmit = () => {
        const value = this._form.getValue();
        console.log('value: ', value);
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
            options: [{value:'1', text:'Pharmacien'},{value:'2', text:'Etudiant'}, {value:'3', text:'Blabla Pharmacien'}],
            //nullOption: {value: '1', text: 'Pharmacien'}
        },
        ID: {
            placeholder: 'Identifiant professionnel'
        },
        city: {
            placeholder: 'Ville'
        },
        postalCode: {
            placeholder: 'Code postal'
        },
        address: {
            placeholder: 'Adresse'
        },
        buildingName: {
            placeholder: 'Nom établissement'
        }
    },
    auto: 'placeholders',
};

let tt = require('tcomb-form-native/lib');

// override globally the default stylesheet
tt.form.Form.stylesheet = styles;


export default RegisterPharmacist
