/* import { createStore } from "redux";
import reducers from "./src/reducers";
import Thunk from 'redux-thunk';

export const store = createStore(reducers);
*/
// export default store;
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from '@react-native-community/async-storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import reducer from './src/reducers/utils';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['network', 'error', 'navigationInfo'],
  stateReconciler: autoMergeLevel2
};
const persistedReducer = persistReducer(persistConfig, reducer);

export const store = createStore(persistedReducer, applyMiddleware(thunk));

export const persistor = persistStore(store);
