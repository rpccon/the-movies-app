import { combineReducers } from "redux";
import navState from "./navReducer";
import moviesState from "./moviesReducer";

export default combineReducers({ navState, moviesState })