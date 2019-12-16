import user from "./user";
import { combineReducers } from "redux";
import registerReducer from "./registerReducer";
import connection from "./connectionReducer"

export default combineReducers({
  user,
  connection,
  registerReducer
});
