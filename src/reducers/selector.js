const initialState = {
    role: null
}

export default function selectorReducer(state = initialState, action = {}) {
    switch (action.type) {
        case "UPDATE_ROLE":
            return ({
                ...state,
                role: action.role
            })

        default: return state
    }
}
