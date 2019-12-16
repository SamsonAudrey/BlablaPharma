import user from "./user";
import { combineReducers } from "redux";
import registerReducer from "./registerReducer";

export default combineReducers({
  user,
  registerReducer
});
