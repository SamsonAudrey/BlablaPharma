import {
  StyleSheet, View
} from 'react-native';
import React from 'react';
import { TabView } from 'react-native-tab-view';
import Animated from 'react-native-reanimated';

export default class CustomTabView extends React.Component {
  /*
  How to use the customTabView
  There is 2 props to give : state and renderScene
    <CustomTabViewModifInfo
       renderScene={this.renderScene}
       state={this.statee}
     />

  Here are examples of these props:
  stateTabView = {
    index: 0,
    routes: [
      { key: 'first', title: 'General' },
      { key: 'second', title: 'Mot de Passe' },
      { key: 'third', title: 'Email' },
    ]
  };
  renderScene = ({ route }) => {
   switch (route.key) {
     case 'first':
       return (
         <GeneralModifInfo
           userUpdateRemoteAccount={this.props.onUserUpdateRemoteAccount}
           onUserSearch={this.props.onUserSearch}
           account={this.props.account}
           error={this.props.error403Update}
         />
       );
     case 'second':
       return (
         <PasswordChange
           userUpdateRemoteAccount={this.props.onUserUpdateRemoteAccount}
           onUserSearch={this.props.onUserSearch}
           account={this.props.account}
           error={this.props.error}
         />
       );
     case 'third':
       return (
         <EmailChange
           userUpdateRemoteAccount={this.props.onUserUpdateRemoteAccount}
           onUserSearch={this.props.onUserSearch}
           account={this.props.account}
           error={this.props.error}
         />
       );
     default:
       return null;
   }
 };
  */

  constructor(props) {
    super(props);
    this.state = this.props.state;
  }

  renderScene= this.props.renderScene;

  _handleIndexChange = (index) => this.setState({ index });

  _renderTabBar = (props) => {
    const inputRange = props.navigationState.routes.map((x, i) => i);
    return (
      <>
        <View style={styles.tabBar}>
          {props.navigationState.routes.map((route, i) => {
            const color = Animated.color(
              Animated.round(
                Animated.interpolate(props.position, {
                  inputRange,
                  outputRange: inputRange.map((inputIndex) => (inputIndex === i ? 255 : 112)),
                })
              ),
              Animated.round(
                Animated.interpolate(props.position, {
                  inputRange,
                  outputRange: inputRange.map((inputIndex) => (inputIndex === i ? 255 : 112)),
                })
              ),
              Animated.round(
                Animated.interpolate(props.position, {
                  inputRange,
                  outputRange: inputRange.map((inputIndex) => (inputIndex === i ? 255 : 112)),
                })
              ),
            );
            const backgroundColor = Animated.color(
              Animated.round(
                Animated.interpolate(props.position, {
                  inputRange,
                  outputRange: inputRange.map((inputIndex) => (inputIndex === i ? 190 : 255)),
                })
              ),
              Animated.round(
                Animated.interpolate(props.position, {
                  inputRange,
                  outputRange: inputRange.map((inputIndex) => (inputIndex === i ? 212 : 255)),
                })
              ),
              Animated.round(
                Animated.interpolate(props.position, {
                  inputRange,
                  outputRange: inputRange.map((inputIndex) => (inputIndex === i ? 105 : 255)),
                })
              )
            );
            return (
              <Animated.Text
                style={[styles.tabItem, { color, backgroundColor }]}
                onPress={() => this.setState({ index: i })}
              >
                {route.title}
              </Animated.Text>
            );
          })}
        </View>
      </>
    );
  };


  render() {
    return (
      <>
        <TabView
          navigationState={this.state}
          renderScene={this.renderScene}
          renderTabBar={this._renderTabBar}
          onIndexChange={this._handleIndexChange}
        />
      </>
    );
  }
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    paddingTop: 10,
    width: '93%',
    alignSelf: 'center'
  },
  tabItem: {
    flex: 1,
    textAlign: 'center',
    padding: 14,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#848484',
    fontSize: 16,
  },
  scene: {
    alignItems: 'center',
  }
});
