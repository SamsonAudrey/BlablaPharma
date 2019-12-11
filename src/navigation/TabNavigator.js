import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import SearchPharmacistsContainer from "../containers/SearchPharmacistsContainer";
import UserInfoContainer from "../containers/UserInfoContainer";
import ChatPageContainer from "../containers/ChatPageContainer";
import BlogPageContainer from "../containers/BlogPageContainer";
import AuthPageContainer from "../containers/AuthPageContainer";
import React from "react";
import * as colors from "react-native";
import { Text } from "react-native";
import RegisterPageContainer from "../containers/RegisterPageContainer";

const SearchPharmacistsNavigator = createStackNavigator(
  {
    SearchPharmacists: SearchPharmacistsContainer
  },
  {
    initialRouteName: "SearchPharmacists"
  }
);

const UserInfoNavigator = createStackNavigator(
  {
    UserInfo: UserInfoContainer,
    AuthPage: AuthPageContainer,
    RegisterPage: RegisterPageContainer
  },
  {
    initialRouteName: "UserInfo"
  }
);
const BlogNavigator = createStackNavigator(
  {
    BlogPage: BlogPageContainer
  },
  {
    initialRouteName: "BlogPage"
  }
);

const ChatNavigator = createStackNavigator(
  {
    ChatPage: ChatPageContainer
  },
  {
    initialRouteName: "ChatPage"
  }
);

export const TabNavigator = createBottomTabNavigator(
  {
    Blog: {
      screen: BlogNavigator,
      navigationOptions: () => ({
        tabBarIcon: () => (
          <Text>0</Text>
          //<FontAwesomeIcon icon="coffee" name="user" size={24} />
        )
      })
    },
    SearchPharmacists: {
      screen: SearchPharmacistsNavigator,
      navigationOptions: () => ({
        tabBarIcon: () => (
          <Text>1</Text>
          // <FontAwesomeIcon  icon="coffee" name ="search" size={24}/>
        )
      })
    },
    Chat: {
      screen: ChatNavigator,
      navigationOptions: () => ({
        tabBarIcon: () => (
          <Text>2</Text>
          //<FontAwesomeIcon icon="coffee" name="comment-medical" size={24} />
        )
      })
    },
    UserInfo: {
      screen: UserInfoNavigator,
      navigationOptions: () => ({
        tabBarIcon: () => (
          <Text>3</Text>
          //<FontAwesomeIcon icon="coffee" name="user" size={24} />
        )
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
    initialRouteName: "SearchPharmacists"
  }
);
