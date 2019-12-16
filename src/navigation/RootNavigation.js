import React from "react";
import HomePage from "../Pages/HomePage";
import {TabNavigator} from "./TabNavigator";
import {createStackNavigator} from "react-navigation-stack";
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Register from "../Pages/RegisterPage";
import AuthPageContainer from "../containers/AuthPageContainer";
import RegisterPageContainer from "../containers/RegisterPageContainer";
import RegisterPatientContainer from "../containers/RegisterPatientContainer";
import RegisterPharmacistContainer from "../containers/RegisterPharmacistContainer";
import { Image , TouchableHighlight} from 'react-native';

const AuthScreenStack = createStackNavigator({
    HomeStack: {
        screen: HomePage,
    }
});

const RegisterScreenStack = createStackNavigator({
    RegiStack: {
        screen: RegisterPageContainer,
        navigationOptions: ({ navigation, screenProps }) => ({
            headerTitle: <TouchableHighlight onPress={(nav) => navigation.navigate('Home')}>
                <Image source={require('../assets/logo-navbar.png')} style={{width: 300, height: 41 }}/>
            </TouchableHighlight>,
        })
    }
});

const RegisterPatientScreenStack = createStackNavigator({
    RegiPatStack: {
        screen: RegisterPatientContainer,
        navigationOptions: ({ navigation, screenProps }) => ({
            headerTitle: <TouchableHighlight onPress={(nav) => navigation.navigate('Home')}>
                <Image source={require('../assets/logo-navbar.png')} style={{width: 300, height: 41 }}/>
            </TouchableHighlight>,
        })
    }
});

const RegisterPharmaScreenStack = createStackNavigator({
    RegiPhaStack: {
        screen: RegisterPharmacistContainer,
        navigationOptions: ({ navigation, screenProps }) => ({
            headerTitle: <TouchableHighlight onPress={(nav) => navigation.navigate('Home')}>
                <Image source={require('../assets/logo-navbar.png')} style={{width: 300, height: 41 }}/>
            </TouchableHighlight>,
        })
    }
});

const CoScreenStack = createStackNavigator({
    AuthStack: {
        screen: AuthPageContainer,
        navigationOptions: ({ navigation, screenProps }) => ({
            headerTitle: <TouchableHighlight onPress={(nav) => navigation.navigate('Home')}>
                <Image source={require('../assets/logo-navbar.png')} style={{width: 300, height: 41 }}/>
            </TouchableHighlight>,
        })
    }
});


export const MainStack = createSwitchNavigator(
    {
        Tab: TabNavigator,
        Home: AuthScreenStack,
        Connection: CoScreenStack,
        Register: RegisterScreenStack,
        RegisterPatient: RegisterPatientScreenStack,
        RegisterPharmacist: RegisterPharmaScreenStack,
    },
    {
        initialRouteName: 'Home',
    }
);
