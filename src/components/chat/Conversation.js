import React from 'react';
import { GiftedChat, Send, Bubble } from 'react-native-gifted-chat';
import {
  Text, StyleSheet, View, Image, KeyboardAvoidingView, TouchableOpacity
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import ImagePicker from 'react-native-image-picker';
import ImgToBase64 from 'react-native-image-base64';
import ImageResizer from 'react-native-image-resizer/index.android';
import BackButton from '../buttons/BackButton';


export default class Conversation extends React.Component {
  componentDidMount() {
    // We create a conversation each time we mount this page,
    // the API will give us information on the conversation
    // if it already exists.
    // We don't know if a conversation exists unless we create
    this.props.onGetConversation(this.props.conversationId)
      .then((resp) => resp,
        () => {
          this.props.onCreateConversation(this.props.otherPerson.id);
        });
    /* this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
      ],
    }); */
  }

  componentWillUnmount() {
    this.setCurrentConversation('');
  }

  componentDidUpdate() {
    this._onRead();
  }

  onSend(message) {
    // console.log(`MESSAGE : ${JSON.stringify(message)}`);
    this.props.onSendMessage(this.props.conversationId, 'text', message[0].text);
  }

  messageFormat = (messages) => messages.map((message) => ({
    _id: message.id,
    text: message.content,
    createdAt: message.createdAt,
    user: {
      _id: message.author
    },
    image: message.content.includes('https://res.cloudinary') ? message.content : null
  }));

  chooseFile = () => {
    const options = {
      title: 'Envoyer une photo',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
      takePhotoButtonTitle: 'Prendre une photo',
      chooseFromLibraryButtonTitle: 'Ouvrir la galerie',
      cancelButtonTitle: 'Annuler',
    };
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        ImageResizer.createResizedImage(response.uri, 500, 500, 'PNG', 100).then((res) => {
          // console.log(res);
          ImgToBase64.getBase64String(res.uri)
            .then((base64String) => {
              const finalString = base64String.replace(/(?:\r\n|\r|\n)/g, '').split('\n');
              this.props.onSendMessage(this.props.conversationId, 'image', `data:image/png;base64,${finalString}`);
            })
            .catch((err) => console.log(err));
        }).catch((err) => {
          console.log(err);
        });
      }
    });
  };

  _onRead() {
    const message = this.props.messages ? this.props.messages[0] : undefined;
    if (message && this.props.user && message.author !== this.props.user.account.id && !message.read) {
      this.props.onRead(this.props.conversationId, this.props.messages[0]);
    }
  }

  _onEndOtherTyping() {
    this.props.onClearIsTyping(this.props.conversationId);
  }

  _renderFooter() {
    return (
      <View style={{
        width: '17%', heigth: 17, marginLeft: '15%', marginBottom: '3%'
      }}
      >
        <Image
          source={require('../../assets/tenor.gif')}
          style={{
            width: '100%', height: 38, justifyContent: 'center'
          }}
        />
      </View>
    );
  }

  _renderAvatar() {
    return (
      <View style={{ width: 35, heigth: 10 }}>
        <Image
          source={this.props.otherPerson.picture ? { uri: this.props.otherPerson.picture } : require('../../assets/logo-fav.png')}
          style={{
            width: 35, height: 38, justifyContent: 'center'
          }}
        />
      </View>

    );
  }

  _renderActions(props) {
    return (
      <TouchableOpacity onPress={this.chooseFile.bind(this)}>
        <Image
          source={require('../../assets/photo_icon.png')}
          style={{
            width: 30, height: 30, marginLeft: '15%', marginBottom: '10%'
          }}
        />
      </TouchableOpacity>
    );
  }

  _renderSendButton(props) {
    return (
      <Send {...props}>
        <Image
          source={require('../../assets/send_button.png')}
          style={{
            width: '60%', height: '65%', marginBottom: '7%', marginRight: '10%'
          }}
        />
      </Send>

    );
  }

  _renderBubble(props) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: '#BED469',
          }
        }}
      />
    );
  }

  setCurrentConversation(conversationId) {
    this.props.onSetCurrentConversation(conversationId);
  }

  render() {
    this.setCurrentConversation(this.props.conversationId);
    if (this.props.isTyping) {
      // this.setState({ isTyping: true });
      clearTimeout;
      setTimeout(() => { this.props.onClearIsTyping(this.props.conversationId); }, 2500);
    }
    // console.log(`proops${JSON.stringify(this.props)}`);
    const mess = this.props.messages ? this.messageFormat(this.props.messages) : null;
    if (this.props.isConnected) {
      return (
        <>
          <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <BackButton
                title="Retour"
                onPress={() => this.props.navigation.goBack()}
              />
              <Text style={{
                color: '#707070', fontSize: 18, textAlign: 'right', marginRight: '5%', flexWrap: 'wrap', width: '80%'
              }}
              >
                {this.props.otherPerson.firstName}
                {' '}
                {this.props.otherPerson.lastName}
              </Text>
            </View>
            <View style={{ flex: 1 }}>
              <GiftedChat
                messages={mess}
                onSend={(messages) => this.onSend(messages)}
                user={{
                  _id: this.props.user.account.id,
                }}
                onInputTextChanged={() => this.props.onTyping(this.props.conversationId)}
                placeholder="Ecrivez un message..."
                renderFooter={this.props.isTyping ? this._renderFooter : null}
                renderAvatar={() => this._renderAvatar()}
                renderSend={(props) => this._renderSendButton(props)}
                renderActions={(props) => this._renderActions(props)}
                renderBubble={(props) => this._renderBubble(props)}
              />
              <KeyboardAvoidingView behavior={Platform.OS === 'android' ? 'padding' : null} keyboardVerticalOffset={80} />
            </View>
          </SafeAreaView>
        </>
      );
    }

    return (
      <>
        <View style={styles.container}>
          <Image
            source={require('../../assets/logo-fav.png')}
            style={{
              width: 100, height: 110, opacity: 1, marginTop: '10%'
            }}
          />
          <Text style={styles.text}>
                Vous n'êtes pas connecté. Connectez-vous pour pouvoir envoyer des messages !
          </Text>
        </View>
      </>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '1%',
    alignItems: 'center',
    paddingVertical: '10%'
  },
  text: {
    textAlign: 'center',
    marginHorizontal: 10,
    marginVertical: '10%',
    fontSize: 22,
    color: '#BED469',
    fontWeight: 'bold'
  }
});
