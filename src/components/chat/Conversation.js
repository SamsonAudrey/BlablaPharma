import React from 'react';
import { API_URL } from 'react-native-dotenv';
import { GiftedChat } from 'react-native-gifted-chat';


export default class Conversation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      memberId: this.props.memberId,
      conversationId: this.props.conversationId,
      messages: this.props.messages,
    };
  }

  componentDidMount() {
    // We create a conversation each time we mount this page,
    // the API will give us information on the conversation
    // if it already exists.
    // We don't know if a conversation exists unless we create
    //
    console.log(`yyyyyyy${this.state.conversationId}`);
    this.props.onGetConversation(this.props.conversationId)
      .then((resp) => console.log(`trouuuuv${resp}`),
        (err) => {
          c;
          this.props.onCreateConversation(this.props.memberId);
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

  onSend(message) {
    console.log(`proodsqDQSps${JSON.stringify(message)}`);
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

  render() {
    console.log(`proops${JSON.stringify(this.props.messages)}`);
    const mess = this.messageFormat(this.props.messages);
    return (
      <GiftedChat
        messages={mess}
        onSend={(messages,) => this.onSend(messages)}
        user={{
          _id: 11,
        }}
      />
    );
  }
}
