import React from "react";
import { TabNavigator } from "./src/navigation/TabNavigator";
import { createAppContainer } from "react-navigation";
import { persistor, store } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

const AppContainer = createAppContainer(TabNavigator);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate /*loading={<Loading/>}*/ persistor={persistor}>
          <AppContainer />
        </PersistGate>
      </Provider>
    );
  }
}
