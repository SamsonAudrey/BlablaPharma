import * as React from 'react';
import {
  View, Text, StyleSheet, Dimensions
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Video from 'react-native-video';

export default class BlogListItems extends React.Component {
  videoPlayer;

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const {
      data: {
        item: {
          title
        }
      },
    } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>{title}</Text>
          <FontAwesome name="heart-o" size={20} style={{ margin: 5 }} color="red" />
        </View>
        <Text>start</Text>
        <View style={styles.containerVideo}>
          <Video
            source={{ uri: 'https://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4' }} // Can be a URL or a local file.
            onEnd={null}
            onLoad={null}
            onLoadStart={null}
            onProgress={null}
            // paused={this.state.paused}
            paused={true}
            width={'100%'}
            height={'100%'}
            ref={(videoPlayer) => (this.videoPlayer = videoPlayer)}
            style={styles.backgroundVideo}
          />
        </View>
        <Text>end</Text>
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
    width: '80%'
  },
  containerVideo: {
    flex: 1,
    //borderWidth: 1,
    width: '100%'
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    //backgroundColor: 'grey'
  }
});
