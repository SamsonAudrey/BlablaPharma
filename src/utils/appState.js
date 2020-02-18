import React, { Component } from 'react';
import { AppState, Text } from 'react-native';
import { clearConversations } from '../actions/chat/conversationAction';
import { store } from '../../store';

export default class AppStateExample extends Component {
  state = {
    conversationState: AppState.currentState,
  };

  componentDidMount() {
    AppState.addEventListener('change', this._handleAppStateChange);
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange);
  }

  _handleAppStateChange = (nextAppState) => {
    if (
      this.state.appState.match(/inactive|background/)
      && nextAppState === 'active'
    ) {
      store.dispatch(clearConversations);
      console.log('App has come to the foreground!');
    }
    this.setState({ appState: nextAppState });
  };

  render() {
    return (
      <Text />
    );
  }
}
