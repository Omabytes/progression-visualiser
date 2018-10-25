import { combineReducers } from 'redux'
import barReducer from "./bar";
import selectorReducer from "./selector";
import skillReducer from "./skill";

export default combineReducers({
    barReducer,
    selectorReducer,
    skillReducer
})