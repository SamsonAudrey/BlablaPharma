import * as React from 'react';
import {
  View, Text, StyleSheet, Dimensions, ScrollView
} from 'react-native';
import { WebView } from 'react-native-webview';
import moment from 'moment';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class BlogListItems extends React.Component {
  state = {
    userLike: this.props.data.item.userLike,
  };

  onChangeLike() {
    this.state.userLike = !this.state.userLike;
    if (this.state.userLike) {
      this.props.onLike(this.props.data.item.id);
    } else {
      this.props.onDislike(this.props.data.item.id);
    }
  }

  render() {
    const {
      data: {
        item: {
          id, title, youtubeVideoId, userLike, createdAt, content
        }
      },
    } = this.props;
    let icon;
    userLike
      ? (icon = 'heart')
      : (icon = 'heart-o');
    const date = moment(Number(createdAt)).format('DD/MM/YYYY');
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>{title}</Text>
          {
            this.props.isConnected
              ? (
                <FontAwesome
                  name={icon}
                  size={20}
                  color="red"
                  onPress={() => {
                    this.onChangeLike();
                  }}
                  style={{ margin: 5, marginBottom: 0 }}
                />
              )
              : <Text />
          }
        </View>
        { youtubeVideoId
          ? (
            <>
              <ScrollView nestedScrollEnabled style={{width: '100%'}}>
                <View style={styles.containerVideo}>
                  <WebView
                    style={styles.video}
                    source={{ uri: `https://www.youtube.com/embed/${youtubeVideoId}?autoplay=0?controls=0?modestbranding=1` }}
                    mediaPlaybackRequiresUserAction
                    scalesPageToFit
                    domStorageEnabled
                    bounces={false}
                    scrollEnabled={false}
                    allowsFullscreenVideo
                  />
                </View>
                <Text style={styles.content}>
                  {content || null}
                </Text>
              </ScrollView>
            </>
          )
          : (
            <View style={{ flex: 1, marginVertical: '1%' }}>
              <ScrollView nestedScrollEnabled>
                <Text style={styles.content}>
                  {content || ' '}
                </Text>
              </ScrollView>
            </View>
          ) }
        <View>
          <Text style={styles.info}>BlablaPharma</Text>
          <Text style={styles.info}>{date}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: '#707070',
    borderWidth: 1,
    borderRadius: 5,
    width: Dimensions.get('window').width * 0.8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
    padding: 10,
    paddingBottom: 0,
    backgroundColor: 'white',
    height: 265,
    alignItems: 'center'
  },
  header: {
    alignItems: 'flex-start',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  title: {
    color: '#707070',
    fontSize: 16,
    marginVertical: 5,
    marginBottom: 10,
    textAlign: 'left',
    width: '80%',
  },
  containerVideo: {
    // flex: 1,
    width: '100%',
    height: 160,
    marginBottom: 5
  },
  video: {
    width: '100%',
    height: '100%'
  },
  info: {
    textAlign: 'center',
    color: '#707070',
    fontSize: 12
  },
  content: {
    color: '#3f3f3f',
    textAlign: 'justify',
    width: '100%'
  }
});
