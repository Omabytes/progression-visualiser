const initialState = {
    route: null
}

export default function skillReducer(state = initialState, action = {}) {
    switch (action.type) {
        case "UPDATE_ROUTE":
            return ({
                ...state,
                route: action.skillName
            })

        default: return state
    }
}
