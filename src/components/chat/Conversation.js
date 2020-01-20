import React from 'react';
import { API_URL } from 'react-native-dotenv';
import { GiftedChat } from 'react-native-gifted-chat';


export default class Conversation extends React.Component {
  constructor(props) {
    super(props);
    const m = this.messageFormat(this.props.messages);
    this.state = {
      conversationId: this.props.conversationId,
      messages: this.props.messages,
    };
  }

  componentDidMount() {
    this.props.onGetMessages(this.state.conversationId);
    this.setState({
      messages: this.messageFormat(this.props.messages)
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

  onSend(messages = []) {
    console.log(`proops${JSON.stringify(this.state.messages)}`);
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
  }

  messageFormat = (messages) => messages.forEach((message) => ({
    _id: message.id,
    text: message.content,
    createdAt: message.createdAt,
    user: {
      _id: message.author
    }
  }))

  render() {
    console.log(`proops${JSON.stringify(this.state)}`);
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={(messages) => this.onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    );
  }
}
