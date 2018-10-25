import { combineReducers } from 'redux'
import barReducer from "./bar";
import selectorReducer from "./selector";

export default combineReducers({
    barReducer,
    selectorReducer
})