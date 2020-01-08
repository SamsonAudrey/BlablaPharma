import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import React from 'react';
import * as colors from 'react-native';
import { Text, TouchableHighlight, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
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
    initialRouteName: 'UserInfo',
    defaultNavigationOptions: { headerShown: false }
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
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="md-images" size={32} color={tintColor} />),
      })
    },
    SearchPharmacists: {
      screen: SearchPharmacistsNavigator,
      navigationOptions: ({ navigation, screenProps }) => ({
        tabBarIcon: ({ tintColor }) => (
          <Octicons name="search" size={30} style={{ marginTop: 5 }} color={tintColor} />),
      })
    },
    Chat: {
      screen: ChatNavigator,
      navigationOptions: ({ navigation, screenProps }) => ({
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="md-chatboxes" size={32} style={{ marginTop: 5 }} color={tintColor} />),
      })
    },
    UserInfo: {
      screen: UserInfoNavigator,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="user" size={30} color={tintColor} />),
      })
    }
  },
  {
    tabBarOptions: {
      showLabel: false, // hide labels
      style: {
        backgroundColor: '#fff', // TabBar background
        // borderTopWidth: 0,
      },
      activeTintColor: '#BED469',
      inactiveTintColor: '#707070'
    },
  },
  {
    initialRouteName: 'SearchPharmacists'
  }
);
