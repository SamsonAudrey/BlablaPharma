import { combineReducers } from 'redux';
import user from './userReducer';
import registerReducer from './registerReducer';
import connection from './connectionReducer';
import navigationReducer from './navigationReducer';
import error from './errorReducer'

export default combineReducers({
  user,
  connection,
  registerReducer,
  error,
  navigationInfo: navigationReducer,
});
