'use strict';
import React, { Component } from 'react';
import { View, Image } from 'react-native';
import CButton from "../components/Button";

class Register extends Component {
    constructor(){
        super();
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <View>
                    <Image
                        style={{width: '100%', height: 100}}
                        source={require('../assets/sign-in-pharmacist.png')}
                    />
                </View>
                <CButton title={"Patient"} buttonStyle={'green'} onPress={() => navigate('RegisterPage_Patient', {userKind:'patient'})}/>
                <CButton title={"Pharmacien"} buttonStyle={'grey'} onPress={() => navigate('RegisterPage_Patient', {userKind:'pharmacist'})}/>
            </View>
        );
    }
}

export default Register
