import {
  StyleSheet, View, Text, FlatList
} from 'react-native';
import React from 'react';
import { SceneMap, TabView } from 'react-native-tab-view';
import Animated from 'react-native-reanimated';
import PharmacistsListItems from './PharmasistsListItems';

export default class CustomTabView extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Pharmaciens BlablaPharma' },
      { key: 'second', title: 'Vos\nPharmaciens' },
    ],
  };

  // eslint-disable-next-line react/sort-comp
  FirstRoute = () => (
    <View style={styles.scene}>
      {this.props.isFetching === true
        ? <Text> Loading </Text> : <Text>Loaded</Text>}
      {this.props.pharmacists.length > 0 ? (
        <FlatList
          data={this.props.pharmacists}
          renderItem={(pharmacist) => (
            <PharmacistsListItems
              data={pharmacist}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={() => (<View style={{ height: 15 }} />)}
          ListFooterComponent={() => (<View style={{ height: 30 }} />)}
        />
      ) : (
        <Text> Aucun pharmacien trouvé </Text>
      )}
    </View>
  );

  // eslint-disable-next-line react/sort-comp
  SecondRoute = () => (
    <View style={styles.scene}>
      {this.props.isFetching === true
        ? <Text> Loading </Text> : <Text>Loaded</Text>}
      {this.props.blablapharmacists.length > 0 ? (
        <FlatList
          data={this.props.blablapharmacists}
          renderItem={(pharmacist) => (
            <PharmacistsListItems
              data={pharmacist}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={() => (<View style={{ height: 15 }} />)}
          ListFooterComponent={() => (<View style={{ height: 30 }} />)}
        />
      ) : (
        <Text> Aucun pharmacien trouvé </Text>
      )}
    </View>
  );


  _renderScene = SceneMap({
    first: this.FirstRoute,
    second: this.SecondRoute,
  });


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
          renderScene={this._renderScene}
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
  },
  tabItem: {
    flex: 1,
    textAlign: 'center',
    padding: 14,
    borderWidth: 1,
    borderRadius: 0, // TODO 0 OR 5 ?
    borderColor: '#848484',
    fontSize: 16
  },
  scene: {
    alignItems: 'center',
    // justifyContent: 'center',
    // marginVertical: 10
    //flex:8
  }
});
