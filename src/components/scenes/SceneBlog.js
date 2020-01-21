import React from 'react';
import {
  FlatList, StyleSheet, Text, View
} from 'react-native';
import BlogListItems from '../Blog/BlogListItems';

export default class SceneBlog extends React.Component {
  render() {
    return (
      <View style={styles.scene}>
        {mockVideo.length > 0 ? (
          <FlatList
            data={mockVideo}
            renderItem={(video) => (
              <BlogListItems
                data={video}
              />
            )}
            keyExtractor={(item) => item.id.toString()}
            ItemSeparatorComponent={() => (<View style={{ height: 15 }} />)}
            ListFooterComponent={() => (<View style={{ height: 20 }} />)}
            style={{ marginTop: 10 }}
          />
        ) : <Text>Aucune vidéo trouvée</Text> }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scene: {
    alignItems: 'center',
  }
});

const mockVideo = [{
  id: 1,
  title: 'Comment bien se laver les dents ?',
  videoYoutubeId: 'https://youtu.be/u_caLAieMsE',
  content: 'content 1',
  createdAt: 'eee',
  updatedAt: 'dee',
  likes: 'ee',
  views: 'e',
  userLike: false
}, {
  id: 2,
  title: 'Comment bien se laver les dents video 2 ?',
  videoYoutubeId: 'blbalbayoutubee',
  content: 'content 2',
  createdAt: 'eee',
  updatedAt: 'dee',
  likes: 'ee',
  views: 'e',
  userLike: false
}, {
  id: 3,
  title: 'Comment bien se laver les dents video 3 ?',
  videoYoutubeId: 'blbalbayoutubee',
  content: 'content 3',
  createdAt: 'eee',
  updatedAt: 'dee',
  likes: 'ee',
  views: 'e',
  userLike: false
}];
