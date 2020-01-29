import React from 'react';
import { API_URL } from 'react-native-dotenv';
import { GiftedChat } from 'react-native-gifted-chat';
import {
  Text
} from 'react-native';


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

  componentDidUpdate() {
    this._onRead();
  }

  onSend(message) {
    //console.log(`proodsqDQSps${JSON.stringify(message)}`);
    this.props.onSendMessage(this.props.conversationId, 'text', message[0].text);
  }

  messageFormat = (messages) => messages.map((message) => ({
    _id: message.id,
    text: message.content,
    createdAt: message.createdAt,
    user: {
      _id: message.author
    }
  }))

  _onRead() {
    //console.log('onree');
    const message = this.props.messages ? this.props.messages[0] : undefined;
    if (message && message.author !== this.props.user.account.id) {
      this.props.onRead(this.props.conversationId, this.props.messages[0]);
    }
  }

  render() {
    //console.log(`proops${JSON.stringify(this.props.conversationId)}`);
    const mess = this.props.messages ? this.messageFormat(this.props.messages) : null;
    const conversation = this.props.conversationId ? <Text> Ouiiiii </Text> : <Text>Noooon</Text>
    return (
      <GiftedChat
        messages={mess}
        onSend={(messages) => this.onSend(messages)}
        user={{
          _id: this.props.user.account.id,
        }}
        onInputTextChanged={this.props.onTyping(this.props.conversationId)}
      />
    );
  }
}