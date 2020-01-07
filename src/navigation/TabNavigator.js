import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import React from 'react';
import * as colors from 'react-native';
import { Text, TouchableHighlight, Image } from 'react-native';
import SearchPharmacistsPage from '../Pages/SearchPharmacistsPage';
import UserInfoContainer from '../containers/User/UserInfoContainer';
import ChatPageContainer from '../containers/ChatPageContainer';
import BlogPageContainer from '../containers/BlogPageContainer';
import RegisterPageContainer from '../containers/User/RegisterPageContainer';
import RegisterPatientContainer from '../containers/User/RegisterPatientContainer';
import RegisterPharmacistContainer from '../containers/User/RegisterPharmacistContainer';
import AuthPageContainer from '../containers/User/AuthPageContainer';
import UserPersonnalInfoPageContainer from '../containers/User/UserPersonnalInfoPageContainer';
import ModifUserPersonnalInfoPageContainer from '../containers/User/ModifUserPersonnalInfoContainer';


class LogoTitle extends React.Component {
  render() {
    return (
      <Image
        source={require('../assets/logo-fav.png')}
        style={{ width: '11%', height: '75%' }}
      />
    );
  }
}


const SearchPharmacistsNavigator = createStackNavigator(
  {
    SearchPharmacists: SearchPharmacistsPage,
    ChatPage: ChatPageContainer
  },
  {
    initialRouteName: 'SearchPharmacists',
    defaultNavigationOptions: {
      // title: 'test',
      // headerTitle: () => <LogoTitle />,
      // headerTitleAlign: 'left',
      // textAlign: 'left',
      headerShown: false,
      /* headerStyle: {
        backgroundColor: '#fff', // #BED469
        borderBottomWidth: 0,
        shadowOpacity: 0,
        shadowOffset: {
          height: 0,
        },
        elevation: 0,

      },
      headerTintColor: '#a9a9a9',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerLeft: <TouchableHighlight onPress={() => null}>
        <Image source={require('../assets/logo-fav.png')} style={{ width: 33, height: 36 }} />
      </TouchableHighlight>, */
    }
  }
);

const UserInfoNavigator = createStackNavigator(
  {
    UserInfo: UserInfoContainer,
    SearchPharmacists: SearchPharmacistsPage,
    Register: RegisterPageContainer,
    RegisterPatient: RegisterPatientContainer,
    RegisterPharmacist: RegisterPharmacistContainer,
    Connection: AuthPageContainer,
    UserPersonnalInfo: UserPersonnalInfoPageContainer,
    ModifUserPersonnalInfo: ModifUserPersonnalInfoPageContainer
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
    initialRouteName: 'ChatPage',
  }
);

const BlogNavigator = createStackNavigator(
  {
    BlogPage: BlogPageContainer
  },
  {
    initialRouteName: 'BlogPage',
    defaultNavigationOptions: {
      title: '',
      // headerShown: false,
      headerStyle: {
        backgroundColor: '#BED469',
      },
    },
  }
);

export default createBottomTabNavigator(
  {
    Blog: {
      screen: BlogNavigator,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: () => (
          <Text>Blog</Text>),
      })
    },
    SearchPharmacists: {
      screen: SearchPharmacistsNavigator,
      navigationOptions: ({ navigation, screenProps }) => ({
        tabBarIcon: () => (
          <Text>Pharmaciens</Text>),
      })
    },
    Chat: {
      screen: ChatNavigator,
      navigationOptions: ({ navigation, screenProps }) => ({
        tabBarIcon: () => (
          <Text>Chat</Text>),
        headerTitle:
  <TouchableHighlight onPress={() => navigation.navigate('Home')}>
    <Image source={require('../assets/logo-navbar.png')} style={{ width: 300, height: 41 }} />
  </TouchableHighlight>,
      })
    },
    UserInfo: {
      screen: UserInfoNavigator,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: () => (
          <Text>UserInfo</Text>),
        headerTitle:
  <TouchableHighlight onPress={() => navigation.navigate('Home')}>
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
