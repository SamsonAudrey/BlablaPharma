import React from 'react';
import { TabNavigator } from './src/navigation/TabNavigator'
import { createAppContainer } from 'react-navigation';
import { store } from './store.js'
import { Provider } from 'react-redux'

const AppContainer = createAppContainer(TabNavigator);

export default class App extends React.Component {

  render() {
    return (
        <Provider store={ store }>
          <AppContainer />
        </Provider>
    )
  }
}
