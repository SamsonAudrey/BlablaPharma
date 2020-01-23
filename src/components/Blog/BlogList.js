
import React, { Component } from 'react';
import { View } from 'react-native';
import SceneBlog from '../scenes/SceneBlog';
import CustomTabView from '../CustomTabView';
import {filter} from "lodash";

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
          return <SceneBlog videos={mockVideo} />;
        case 'second':
          return <SceneBlog videos={filter(mockVideo, { userLike: true })} />;
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


const mockVideo = [{
  id: 1,
  title: 'Comment bien se laver les dents ?',
  videoYoutubeId: 'u_caLAieMsE',
  content: 'content 1',
  createdAt: 1579702947000,
  updatedAt: 1579702947000,
  likes: 'ee',
  views: 'e',
  userLike: true
}, {
  id: 2,
  title: 'Comment bien se laver les dents video 2 ?',
  videoYoutubeId: 'feyaEbdJgIU',
  content: 'content 2',
  createdAt: 1579702710000,
  updatedAt: 1579702710000,
  likes: 'ee',
  views: 'e',
  userLike: false
}, {
  id: 3,
  title: 'Comment bien se laver les dents video 3 ?',
  videoYoutubeId: 'fcSDJqpoHUU',
  content: 'content 3',
  createdAt: 1579702710000,
  updatedAt: 1579702710000,
  likes: 'ee',
  views: 'e',
  userLike: false
}];


export default BlogList;
