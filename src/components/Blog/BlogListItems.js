import * as React from 'react';
import {
  View, Text, StyleSheet, Dimensions
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import YouTube from 'react-native-youtube';

export default class BlogListItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const {
      data: {
        item: {
          title, videoYoutubeId, userLike
        }
      },
    } = this.props;
    let icon;
    userLike
      ? (icon = 'heart')
      : (icon = 'heart-o');
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>{title}</Text>
          <FontAwesome name={icon} size={20} style={{ margin: 5, marginBottom: 0 }} color="red" />
        </View>
        <View style={styles.containerVideo}>
          <YouTube
            apiKey="AIzaSyDq8iXoqd7lCeetXlJv-yZC9Jf1ngeZfp0" // for Android
            videoId={videoYoutubeId} // The YouTube video ID
            play={false}// control playback of video with true/false
            fullscreen={false} // control whether the video should play in fullscreen or inline
            loop // control whether the video should loop when ended
            onReady={null}
            onChangeState={null}
            onChangeQuality={null}
            onError={null}
            style={{ alignSelf: 'stretch', height: '90%', marginTop: 5 }}
          />
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
    fontSize: 14,
    marginVertical: 5,
    textAlign: 'left',
    width: '80%',
  },
  containerVideo: {
    flex: 1,
    width: '100%',
  }
});
