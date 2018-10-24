const initialState = {
    Charisma: 50,
    Constitution: 50,
    Dexterity: 50,
    Intelligence: 50,
    Strength: 50,
    Wisdom: 50
}

export default function barReducer(state = initialState, action = {}) {
    switch (action.type) {
        case "UPDATE_SCORE":
            return ({
                ...state,
                [action.skillName]: action.score
            })

        default: return state
    }
}