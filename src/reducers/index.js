import { combineReducers } from 'redux';
import { reducer as network } from 'react-native-offline'
import user from './userReducer';
import registerReducer from './registerReducer';
import connection from './connectionReducer';
import navigationReducer from './navigationReducer';
import error from './errorReducer';
import pharmacists from './pharmacistsReducer';
import searchPharmacists from './searchPharmacistsReducer';
import loading from './loadingReducer';
import success from './successReducer';
import conversations from './conversationReducer';

export default combineReducers({
  user,
  connection,
  registerReducer,
  error,
  pharmacists,
  searchPharmacists,
  loading,
  success,
  conversations,
  navigationInfo: navigationReducer,
  network
});
