import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createSwitchNavigator } from 'react-navigation';
import { Image, View } from 'react-native';
import HomePage from '../pages/home/HomePage';
import TabNavigator from './TabNavigator';

const AuthScreenStack = createStackNavigator({
  HomeStack: {
    screen: HomePage,
    navigationOptions: ({ navigation, screenProps }) => ({
      headerTitle:
  <View style={{ flex: 1, alignItems: 'center' }}>
    <Image
      source={require('../assets/logo-navbar.png')}
      style={{ width: '75%', height: 40 }}
    />
  </View>
    })
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
