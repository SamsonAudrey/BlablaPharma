import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createSwitchNavigator } from 'react-navigation';
import HomePage from '../Pages/HomePage';
import { TabNavigator } from './TabNavigator';

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
