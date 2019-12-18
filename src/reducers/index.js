import { combineReducers } from 'redux';
import user from './userReducer';
import registerReducer from './registerReducer';
import connection from './connectionReducer';
import navigationReducer from './navigationReducer'

export default combineReducers({
  user,
  connection,
  registerReducer,
  navigationInfo: navigationReducer
});
