import {createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import FontAwesomeIcon from 'font-awesome'

import SearchPharmacistsContainer from '../containers/SearchPharmacistsContainer'
import UserInfoContainer from '../containers/UserInfoContainer'
import ChatPageContainer from '../containers/ChatPageContainer'
import BlogPageContainer from '../containers/BlogPageContainer'
import AuthPageContainer from '../containers/AuthPageContainer'
import React from "react";
import * as colors from "react-native";


const UserInfoNavigator = createStackNavigator(
    {
      UserInfo: UserInfoContainer,
      AuthPage:AuthPageContainer,
    },
    {
      initialRouteName: 'UserInfo',
    }
  );

  const SearchPharmacistsNavigator = createStackNavigator(
    {
      SearchPharmacists: SearchPharmacistsContainer,
    },
    {
      initialRouteName: 'SearchPharmacists',
    }
  );

  const BlogNavigator = createStackNavigator(
    {
      BlogPage: BlogPageContainer,
    },
    {
      initialRouteName: 'BlogPage',
    }
  );

  const ChatNavigator = createStackNavigator(
    {
      ChatPage: ChatPageContainer,
    },
    {
      initialRouteName: 'ChatPage',
    }
  );

  export const TabNavigator = createBottomTabNavigator(
    {
      SearchPharmacists: {
        screen: SearchPharmacistsNavigator,
        navigationOptions: () => ({
          tabBarIcon: () => (
            <FontAwesomeIcon  name ="search" size={24}/>
          ),
        }),
      },
      Chat: {
        screen: ChatNavigator,
        navigationOptions: () => ({
          tabBarIcon: () => (
            <FontAwesomeIcon name="comment-medical" size={24} />
          ),
        }),
      },
      UserInfo: {
        screen: UserInfoNavigator,
        navigationOptions: () => ({
          tabBarIcon: () => (
            <FontAwesomeIcon name="user" size={24} />
          ),
        }),
      },
    },
    {
      tabBarOptions: {
        showLabel: true, // hide labels
        activeTintColor: colors.white, // active icon color
        inactiveTintColor: colors.modal_grey_2, // inactive icon color
        style: {
          backgroundColor: colors.dark_grey, // TabBar background
        },
      },
    },
    {
      initialRouteName: 'SearchPharmacists',
    },
  );
