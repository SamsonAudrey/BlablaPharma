import React from "react";
import { MainStack } from "./src/navigation/RootNavigation";
import { createAppContainer } from "react-navigation";
import { persistor, store } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

const AppContainer = createAppContainer(MainStack);//createAppContainer(TabNavigator);

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
