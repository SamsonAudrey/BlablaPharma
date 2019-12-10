import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import FontAwesome, { SolidIcons } from "react-native-fontawesome";
import SearchPharmacistsContainer from "../containers/SearchPharmacistsContainer";
import UserInfoContainer from "../containers/UserInfoContainer";
import ChatPageContainer from "../containers/ChatPageContainer";
import BlogPageContainer from "../containers/BlogPageContainer";
import AuthPageContainer from "../containers/AuthPageContainer";

const UserInfoNavigator = createStackNavigator(
  {
    UserInfo: UserInfoContainer,
    AuthPage: AuthPageContainer
  },
  {
    initialRouteName: "UserInfo"
  }
);

const SearchPharmacistsNavigator = createStackNavigator(
  {
    SearchPharmacists: SearchPharmacistsContainer
  },
  {
    initialRouteName: "SearchPharmacists"
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

const TabNavigator = createBottomTabNavigator(
  {
    SearchPharmacists: {
      screen: SearchPharmacistsNavigator,
      navigationOptions: () => ({
        tabBarIcon: () => <FontAwesome icon={SolidIcons.smile} />
      })
    },
    Chat: {
      screen: ChatNavigator,
      navigationOptions: () => ({
        tabBarIcon: () => <FontAwesome icon={SolidIcons.smile} />
      })
    },
    UserInfo: {
      screen: UserInfoNavigator,
      navigationOptions: () => ({
        tabBarIcon: () => <FontAwesome icon={SolidIcons.smile} />
      })
    }
  },
  {
    initialRouteName: "SearchPharmacists"
  }
);

export default TabNavigator;
