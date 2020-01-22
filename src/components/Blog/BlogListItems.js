import * as React from 'react';
import {
  View, Text, StyleSheet, Dimensions
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { WebView } from 'react-native-webview';
import moment from 'moment';

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
          title, videoYoutubeId, userLike, createdAt
        }
      },
    } = this.props;
    let icon;
    userLike
      ? (icon = 'heart')
      : (icon = 'heart-o');
    const date = moment(createdAt).format('DD/MM/YYYY');
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>{title}</Text>
          <FontAwesome name={icon} size={20} style={{ margin: 5, marginBottom: 0 }} color="red" />
        </View>
        <View style={styles.containerVideo}>
          <WebView
            style={styles.video}
            source={{ uri: `https://www.youtube.com/embed/${videoYoutubeId}?autoplay=0?controls=0?modestbranding=1` }}
            mediaPlaybackRequiresUserAction
            scalesPageToFit
            domStorageEnabled
            bounces={false}
            scrollEnabled={false}
            allowsFullscreenVideo
          />
        </View>
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
    textAlign: 'left',
    width: '80%',
  },
  containerVideo: {
    flex: 1,
    width: '100%',
    marginBottom: 5
  },
  info: {
    textAlign: 'center',
    color: '#707070',
    fontSize: 12
  }
});
