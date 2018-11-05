import { combineReducers } from 'redux'
import barReducer from "./bar";
import selectorReducer from "./selector";
import skillReducer from "./skill";

const appReducer = combineReducers({
    barReducer,
    selectorReducer,
    skillReducer
})

const rootReducer = (state, action) => {
    if (action.type === 'UPLOAD_STATE') {
        state = JSON.parse(action.upState)
    }

    return appReducer(state, action)
}

export default rootReducer
