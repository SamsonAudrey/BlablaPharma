import React from 'react';
import { createAppContainer } from 'react-navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { persistor, store } from './store';
import { MainStack } from './src/navigation/RootNavigation';
import './src/actions/chat/messagesAction';

const AppContainer = createAppContainer(MainStack);

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaProvider>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <AppContainer />
          </PersistGate>
        </Provider>
      </SafeAreaProvider>
    );
  }
}
