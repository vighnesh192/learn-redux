import { combineReducers } from "redux";
import counterReducer from "./counter";
import isLoggedIn from "./isLoggedIn";

const allReducers = combineReducers({
    count: counterReducer,
    isLoggedIn
});

export default allReducers;
