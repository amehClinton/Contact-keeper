import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import contact from "./contact";

export default combineReducers({
  alert,
  auth,
  contact,
});
