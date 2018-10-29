const initialState = []

const fromAction = action => ({
    role: action.role,
    route: action.route,
    skillName: action.skillName,
    score: action.score
})

export default function barReducer(state = initialState, action = {}) {
    switch (action.type) {
        case "UPDATE_SCORE":
            if (state.findIndex(s => (s.role === action.role && s.route === action.route && s.skillName === action.skillName)) === -1) {
                return [
                    ...state,
                    fromAction(action)
                ]
            }

            return state.map(s => (s.role === action.role && s.route === action.route && s.skillName === action.skillName) ?
                { ...s, score: action.score } :
                s)

        default: return state
    }
}