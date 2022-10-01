import { combineReducers } from "redux";
import { auth } from "./auth";
import { general } from "./general";

export const mainReducer = combineReducers({
  auth,
  general,
});
