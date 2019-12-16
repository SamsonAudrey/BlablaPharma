import React from "react";
import HomePage from "../Pages/HomePage";
import {TabNavigator} from "./TabNavigator";
import {createStackNavigator} from "react-navigation-stack";
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Register from "../Pages/RegisterPage";
import AuthPage from "../Pages/AuthPage";

const AuthScreenStack = createStackNavigator({
    AuthStack: {
        screen: HomePage,
    }
});

const RegisterScreenStack = createStackNavigator({
    AuthStack: {
        screen: Register,
    }
});

const CoScreenStack = createStackNavigator({
    AuthStack: {
        screen: AuthPage,
    }
});

export const MainStack = createSwitchNavigator(
    {
        Tab: TabNavigator,
        Home: AuthScreenStack,
        Register: RegisterScreenStack,
        Connection: CoScreenStack
    },
    {
        initialRouteName: 'Home'
    }
);
