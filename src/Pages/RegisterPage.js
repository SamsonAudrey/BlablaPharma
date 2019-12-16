'use strict';
import React, { Component } from 'react';
import {View, ImageBackground, Text, StyleSheet} from 'react-native';
import CButton from "../components/Button";
import HyperLinkText from "../components/HyperLinkText";

class Register extends Component {
    constructor(){
        super();
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View >
                <View style={styles.titleView}>
                    <Text style={styles.title}>Inscription</Text>
                </View>
                <View style={styles.view}>
                    <ImageBackground
                        source={require('../assets/sign-in-pharmacist_large_cut.png')}
                        style={{width: '100%',  height: '100%', opacity: 1}}>
                        <View style={styles.buttonView}>
                            <CButton
                                title={"Pharmacien"}
                                buttonStyle={'grey'}
                                onPress={() => navigate('RegisterPage_Patient', {userKind:'pharmacist'})}/>
                        </View>
                    </ImageBackground>
                </View>
                <View style={styles.view}>
                    <ImageBackground
                        source={require('../assets/sign-in.jpg')}
                        style={{width: '100%',  height: '100%',  opacity: 1}}>
                        <View style={styles.buttonView}>
                            <CButton
                                title={"Patient"}
                                buttonStyle={'green'}
                                onPress={() => navigate('RegisterPage_Patient', {userKind:'patient'})}/>
                        </View>
                    </ImageBackground>
                </View>
                <View style={styles.linkText}>
                    <Text style={{color: '#868788', marginLeft: 10, fontSize: 16}}>Déjà inscrit ?</Text>
                    <HyperLinkText
                        text={'Se connecter'}
                        nav={'AuthPage'}
                        onPress={() => navigate('AuthPage')}
                        style={{color: '#BED469', marginLeft: 10, fontSize: 16}}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    titleView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 60,
        marginBottom: 20,

    },
    title: {
        color: '#BED469',
        fontSize: 24
    },
    view: {
        marginTop: 20,
        marginBottom: 30,
        height: '30%',
    },
    buttonView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'rgba(255,255,255,0.3)'
    },
    linkText: {
        flex: 1,
        flexDirection: 'row'
    }
});


export default Register


