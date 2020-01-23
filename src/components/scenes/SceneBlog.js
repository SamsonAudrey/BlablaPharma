import React from 'react';
import {
  FlatList, StyleSheet, Text, View
} from 'react-native';
import BlogListItems from '../Blog/BlogListItems';

export default class SceneBlog extends React.Component {
  render() {
    console.log('SCENE BLOOOOOOG');
    return (
      <View style={styles.scene}>
        {this.props.videos.length > 0 ? (
          <FlatList
            data={this.props.videos}
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
