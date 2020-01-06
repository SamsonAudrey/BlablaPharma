import { combineReducers } from 'redux';
import user from './userReducer';
import registerReducer from './registerReducer';
import connection from './connectionReducer';
import navigationReducer from './navigationReducer';
import error from './errorReducer';
import pharmacists from './pharmacistsReducer';
import searchPharmacists from './searchPharmacistsReducer';
import loading from './loadingReducer';
import blablapharmacists from './blablapharmacistReducer';

export default combineReducers({
  user,
  connection,
  registerReducer,
  error,
  pharmacists,
  blablapharmacists,
  searchPharmacists,
  loading,
  navigationInfo: navigationReducer,
});
