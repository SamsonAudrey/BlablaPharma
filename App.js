import React from "react";
//import {persistor, store} from './store';
import { Provider } from "react-redux";
//import {PersistGate} from 'redux-persist/integration/react';
import TabNavigator from "./src/navigation/TabNavigator";
import { createAppContainer } from "react-navigation";
import store from "./store";

const AppContainer = createAppContainer(TabNavigator);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />;
      </Provider>
    );
  }
}
