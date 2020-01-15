
import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import SafeAreaView from 'react-native-safe-area-view';
import SceneBlog from '../components/scenes/SceneBlog';
import CustomTabView from '../components/CustomTabView';

class Blog extends Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Tout' },
      { key: 'second', title: 'Favoris' },
    ]
  };

  renderScene = ({ route }) => {
    switch (route.key) {
      case 'first':
        return <SceneBlog />;
      case 'second':
        return <SceneBlog />;
      default:
        return null;
    }
  };

  render() {
    return (
      <SafeAreaView>
        <LinearGradient
          colors={['#BED469', '#BED469', '#BED469']}
        >
          <View style={styles.titleView}>
            <Text style={styles.title}>Blog</Text>
          </View>
        </LinearGradient>
        <View style={{ height: '100%', paddingHorizontal: '1%' }}>
          <CustomTabView
            renderScene={this.renderScene}
            state={this.state}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  titleView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
  title: {
    color: '#707070',
    fontSize: 24
  },
});

export default Blog;
