
import React, { Component } from 'react';
import { View } from 'react-native';
import SceneBlog from '../scenes/SceneBlog';
import CustomTabView from '../CustomTabView';

class BlogList extends Component {
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
        <>
          <View style={{ flex: 1, paddingHorizontal: '1%' }}>
            <CustomTabView
              renderScene={this.renderScene}
              state={this.state}
            />
          </View>
        </>
      );
    }
}


export default BlogList;
