import { combineReducers } from 'redux';
import { reducer as network } from 'react-native-offline';
import user from '../user/userReducer';
import registerReducer from '../register/registerReducer';
import connection from '../auth/connectionReducer';
import navigationReducer from '../navigation/navigationReducer';
import error from './errorReducer';
import pharmacists from '../pharmacists/pharmacistsReducer';
import searchPharmacists from '../pharmacists/searchPharmacistsReducer';
import loading from './loadingReducer';
import success from './successReducer';
import searchBlog from '../blog/searchBlogReducer';
import blog from '../blog/blogReducer';
import conversations from '../chat/conversationReducer';
import tracker from '../tracker';

export default combineReducers({
  user,
  connection,
  registerReducer,
  error,
  pharmacists,
  searchPharmacists,
  blog,
  searchBlog,
  loading,
  success,
  conversations,
  navigationInfo: navigationReducer,
  network,
  tracker
});
