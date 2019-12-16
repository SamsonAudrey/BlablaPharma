import userReducer from './userReducer';
import { combineReducers } from 'redux';
import registerReducer from "./registerReducer";

export default combineReducers({
    userReducer,
    registerReducer
})
