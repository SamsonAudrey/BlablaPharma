import { combineReducers } from 'redux';
import user from './userReducer';
import registerReducer from './registerReducer';
import connection from './connectionReducer';
import navigationReducer from './navigationReducer';
import error from './errorReducer';
import pharmacists from './pharmacistsReducer';
import searchPharmacists from './searchPharmacistsReducer';
import loading from './loadingReducer';

export default combineReducers({
  user,
  connection,
  registerReducer,
  error,
  pharmacists,
  searchPharmacists,
  loading,
  navigationInfo: navigationReducer,
});
