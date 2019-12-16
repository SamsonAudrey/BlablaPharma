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

const AuthScreenStack = createStackNavigator({
    HomeStack: {
        screen: HomePage,
    }
});

const RegisterScreenStack = createStackNavigator({
    RegiStack: {
        screen: RegisterPageContainer,
    }
});

const RegisterPatientScreenStack = createStackNavigator({
    RegiPatStack: {
        screen: RegisterPatientContainer,
    }
});

const RegisterPharmaScreenStack = createStackNavigator({
    RegiPhaStack: {
        screen: RegisterPharmacistContainer,
    }
});

const CoScreenStack = createStackNavigator({
    AuthStack: {
        screen: AuthPageContainer,
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
        initialRouteName: 'Home'
    }
);
