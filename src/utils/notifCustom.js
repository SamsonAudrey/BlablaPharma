import React from 'react';
import NotifService from './notifService';
import { store } from '../../store';

export default class NotifCustom extends React.Component {
  onNotifMessage = (conversationId, otherPerson) => {
  }

    getOtherPerson = (conversation, user) => {
      const onePers = conversation.members[0];
      const secPers = conversation.members[1];
      if (onePers.id === user.account.id) {
        return secPers;
      }
      return onePers;
    };

    notifyMessage(conversationId, message) {
      const state = store.getState();
      const conversationResponse = state.conversations.filter((conv) => conv.id === conversationId);
      const conversation = conversationResponse[0];
      console.log(`tytyu${JSON.stringify(conversation)}`);
      if (conversation) {
        const otherPerson = this.getOtherPerson(conversation, state.user);
        this.notifMessage = new NotifService(this.onNotifMessage(conversationId, otherPerson));
        this.notifMessage.localNotif(`${otherPerson.firstName} ${otherPerson.lastName}`, message.content, '', 'Nouveau message');
      }
    }
}
