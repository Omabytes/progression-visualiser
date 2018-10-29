const initialState = {
    // Charisma: 50,
    // Constitution: 50,
    // Dexterity: 50,
    // Intelligence: 50,
    // Strength: 50,
    // Wisdom: 50
}

export default function barReducer(state = initialState, action = {}) {
    switch (action.type) {
        case "UPDATE_SCORE":
        console.log(state, action.role, action.route, action.skillName, action.score)
        // let s = state;
        // s[action.role][action.route]
            return ({
                ...state,
                [action.role]: {
                    // ...state[action.role],
                    [action.route]: {
                        // ...state[action.role][action.route],
                        [action.skillName]: action.score
                    }
                }
            })

        default: return state
    }
}