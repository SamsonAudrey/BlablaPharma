import {
  StyleSheet, View
} from 'react-native';
import React from 'react';
import { TabView } from 'react-native-tab-view';
import Animated from 'react-native-reanimated';
// eslint-disable-next-line import/extensions
import ScenePharmacists from './scenes/ScenePharmacists';

export default class CustomTabView extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Pharmaciens BlablaPharma' },
      { key: 'second', title: 'Vos\nPharmaciens' },
    ]
  };

 renderScene = ({ route }) => {
   switch (route.key) {
     case 'first':
       return <ScenePharmacists pharmacists={this.props.blablapharmacists} />;
     case 'second':
       return <ScenePharmacists pharmacists={this.props.pharmacists} />;
     default:
       return null;
   }
 };

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
    width: '90%',
    alignSelf: 'center'
  },
  tabItem: {
    flex: 1,
    textAlign: 'center',
    padding: 14,
    borderWidth: 1,
    borderRadius: 5, // TODO 0 OR 5 ?
    borderColor: '#848484',
    fontSize: 16,
  },
  scene: {
    alignItems: 'center',
    // justifyContent: 'center',
    // marginVertical: 10
    // flex:8
  }
});
