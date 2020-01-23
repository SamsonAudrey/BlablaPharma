import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SearchPharmacistsPage from '../Pages/SearchPharmacistsPage';
import UserInfoContainer from '../containers/User/UserInfoContainer';
import ChatPageContainer from '../containers/ChatPageContainer';
import BlogPageContainer from '../containers/Blog/BlogListContainer';
import RegisterPageContainer from '../containers/User/RegisterPageContainer';
import RegisterPatientContainer from '../containers/User/RegisterPatientContainer';
import RegisterPharmacistContainer from '../containers/User/RegisterPharmacistContainer';
import AuthPageContainer from '../containers/User/AuthPageContainer';
import UserPersonnalInfoPageContainer from '../containers/User/UserPersonnalInfoPageContainer';
import ModifUserPersonnalInfoPageContainer from '../containers/User/ModifUserPersonnalInfoContainer';
import Blog from "../Pages/BlogPage";

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
    BlogPage: Blog
  },
  {
    initialRouteName: 'BlogPage',
    defaultNavigationOptions: {
      title: '',
      headerShown: false,
    },
  }
);

export default createMaterialTopTabNavigator(
  {
    Blog: {
      screen: BlogNavigator,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ tintColor }) => (
          <>
            <Ionicons name="ios-images" size={30} color={tintColor} style={{ }} />
          </>
        ),
        tabBarLabel: 'Blog'
      })
    },
    SearchPharmacists: {
      screen: SearchPharmacistsNavigator,
      navigationOptions: ({ navigation, screenProps }) => ({
        tabBarIcon: ({ tintColor }) => (
          <>
            <Octicons name="search" size={30} style={{ }} color={tintColor} />
          </>
        ),
        tabBarLabel: 'Pharmaciens'
      })
    },
    Chat: {
      screen: ChatNavigator,
      navigationOptions: ({ navigation, screenProps }) => ({
        tabBarIcon: ({ tintColor }) => (
          <>
            <Ionicons name="md-chatboxes" size={30} style={{ }} color={tintColor} />
          </>
        ),
        tabBarLabel: 'Messages'
      })
    },
    UserInfo: {
      screen: UserInfoNavigator,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ tintColor }) => (
          <>
            <FontAwesome name="user" size={30} color={tintColor} style={{ }} />
          </>
        ),
        tabBarLabel: 'Info'
      })
    }
  },
  {
    tabBarOptions: {
      showLabel: true,
      showIcon: true,
      style: {
        backgroundColor: '#fff',
        width: '100%'
      },
      upperCaseLabel: false,
      indicatorStyle: { backgroundColor: '#BED469' },
      activeTintColor: '#BED469',
      inactiveTintColor: '#707070',
      labelStyle: {
        fontSize: 10,
      },
      tabStyle: {
        height: 60
      },
      iconStyle: {
        width: '100%',
        height: 28,
      },
    },
    navigationOptions: {
    },
    tabBarPosition: 'bottom'
  },
  {
    initialRouteName: 'SearchPharmacists'
  }
);
