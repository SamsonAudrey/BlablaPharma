import React from 'react';
import {
  FlatList, StyleSheet, View
} from 'react-native';
import Article from '../../containers/blog/ArticleContainer';
import Loading from '../utils/Loading';
import NoArticleFound from '../blog/NoArticleFound';

export default class SceneBlog extends React.Component {
  render() {
    return (
      <View style={styles.scene}>
        {this.props.videos.length > 0 ? (
          <FlatList
            data={this.props.videos}
            renderItem={(video) => (
              <Article
                data={video}
              />
            )}
            keyExtractor={(item) => item.id.toString()}
            ItemSeparatorComponent={() => (<View style={{ height: 15 }} />)}
            ListFooterComponent={() => (<View style={{ height: 20 }} />)}
            style={{ marginTop: 10 }}
          />
        ) : this.props.isFetching ? <Loading />
          : <NoArticleFound text="Aucun article trouvé" />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scene: {
    alignItems: 'center',
  }
});
