import React from "react";
import HomePage from "../Pages/HomePage";
import {TabNavigator} from "./TabNavigator";
import {createStackNavigator} from "react-navigation-stack";
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

const AuthScreenStack = createStackNavigator({
    HomeStack: {
        screen: HomePage,
    }
});


export const MainStack = createSwitchNavigator(
    {
        Tab: TabNavigator,
        Home: AuthScreenStack,
    },
    {
        initialRouteName: 'Home',
    }
);
