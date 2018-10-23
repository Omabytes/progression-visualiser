const initialState = { score: 0 }

export default function barReducer(state = initialState, action = {}) {
    switch (action.type) {
        case "UPDATE_SCORE":
            return ({ ...state, score: action.score })

        default: return state
    }
}