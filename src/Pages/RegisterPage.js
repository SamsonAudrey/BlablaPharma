'use strict';
import React, { Component } from 'react';
import { View } from 'react-native';
import CButton from "../components/Button";

class Register extends Component {
    constructor(){
        super();
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <CButton title={"Patient"} style={'green'} onPress={() => navigate('RegisterPage_Patient', {userKind:'patient'})}/>
                <CButton title={"Pharmacien"} style={'grey'} onPress={() => navigate('RegisterPage_Patient', {userKind:'pharmacist'})}/>
            </View>
        );
    }
}

export default Register
