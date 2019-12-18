import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import React from 'react';
import * as colors from 'react-native';
import { Text, TouchableHighlight, Image } from 'react-native';
import SearchPharmacistsContainer from '../containers/SearchPharmacistsContainer';
import UserInfoContainer from '../containers/UserInfoContainer';
import ChatPageContainer from '../containers/ChatPageContainer';
import BlogPageContainer from '../containers/BlogPageContainer';
import RegisterPageContainer from '../containers/RegisterPageContainer';
import RegisterPatientContainer from '../containers/RegisterPatientContainer';
import RegisterPharmacistContainer from '../containers/RegisterPharmacistContainer';
import AuthPageContainer from '../containers/AuthPageContainer';

const SearchPharmacistsNavigator = createStackNavigator(
  {
    SearchPharmacists: SearchPharmacistsContainer
  },
  {
    initialRouteName: 'SearchPharmacists'
  }
);

const UserInfoNavigator = createStackNavigator(
  {
    UserInfo: UserInfoContainer,
    SearchPharmacists: SearchPharmacistsContainer,
    Register: RegisterPageContainer,
    RegisterPatient: RegisterPatientContainer,
    RegisterPharmacist: RegisterPharmacistContainer,
    Connection: AuthPageContainer,
  },
  {
    initialRouteName: 'UserInfo'
  }
);

const ChatNavigator = createStackNavigator(
  {
    ChatPage: ChatPageContainer
  },
  {
    initialRouteName: 'ChatPage'
  }
);

const BlogNavigator = createStackNavigator(
  {
    BlogPage: BlogPageContainer
  },
  {
    initialRouteName: 'BlogPage'
  }
);

export const TabNavigator = createBottomTabNavigator(
  {
    Blog: {
      screen: BlogNavigator,
      navigationOptions: ({ navigation, screenProps }) => ({
        tabBarIcon: () => (
          <Text>Blog</Text>),
        headerTitle: <TouchableHighlight onPress={() => navigation.navigate('Home')}>
          <Image source={require('../assets/logo-navbar.png')} style={{ width: 300, height: 41 }} />
                     </TouchableHighlight>,
      })
    },
    SearchPharmacists: {
      screen: SearchPharmacistsNavigator,
      navigationOptions: ({ navigation, screenProps }) => ({
        tabBarIcon: () => (
          <Text>Pharmaciens</Text>),
        headerTitle: <TouchableHighlight onPress={() => navigation.navigate('Home')}>
          <Image source={require('../assets/logo-navbar.png')} style={{ width: 300, height: 41 }} />
                     </TouchableHighlight>,
      })
    },
    Chat: {
      screen: ChatNavigator,
      navigationOptions: ({ navigation, screenProps }) => ({
        tabBarIcon: () => (
          <Text>Chat</Text>),
        headerTitle: <TouchableHighlight onPress={() => navigation.navigate('Home')}>
          <Image source={require('../assets/logo-navbar.png')} style={{ width: 300, height: 41 }} />
        </TouchableHighlight>,
      })
    },
    UserInfo: {
      screen: UserInfoNavigator,
      navigationOptions: ({ navigation, screenProps }) => ({
        tabBarIcon: () => (
          <Text>UserInfo</Text>),
        headerTitle: <TouchableHighlight onPress={() => navigation.navigate('Home')}>
          <Image source={require('../assets/logo-navbar.png')} style={{ width: 300, height: 41 }} />
                     </TouchableHighlight>,
      })
    }
  },
  {
    tabBarOptions: {
      showLabel: false, // hide labels
      activeTintColor: colors.white, // active icon color
      inactiveTintColor: colors.modal_grey_2, // inactive icon color
      style: {
        backgroundColor: colors.dark_grey // TabBar background
      }
    }
  },
  {
    initialRouteName: 'SearchPharmacists'
  }
);
