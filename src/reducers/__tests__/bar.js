import barReducer from '../bar'

const mockState = [
    {
        role: 'Warlock',
        route: 'Charisma',
        skillName: 'Persuasion',
        score: 80
    },
    {
        role: 'Warlock',
        route: 'Strength',
        skillName: 'Athletics',
        score: 0
    },
    {
        role: 'Monk',
        route: 'Dexterity',
        skillName: 'Sleight of Hand',
        score: 90
    }
]

const updateAction = {
    type: 'UPDATE_SCORE',
    role: 'Warlock',
    route: 'Strength',
    skillName: 'Athletics',
    score: 50
}

const newAction = {
    type: 'UPDATE_SCORE',
    role: 'Monk',
    route: 'Wisdom',
    skillName: 'Perception',
    score: 70
}


it('returns the initial state when no action given', () => {
    const newState = barReducer(mockState, {})
    expect(newState).toEqual(mockState)
})

it('adds the first new score to the state', () => {
    const newState = barReducer([], newAction)
    expect(newState.length).toEqual(1)
    expect(newState[0].role).toEqual('Monk')
    expect(newState[0].route).toEqual('Wisdom')
    expect(newState[0].skillName).toEqual('Perception')
    expect(newState[0].score).toEqual(70)
})

it('adds a new state item for new scores', () => {
    const newState = barReducer(mockState, newAction)
    expect(newState.length).toEqual(4)
    expect(newState[3].role).toEqual('Monk')
    expect(newState[3].route).toEqual('Wisdom')
    expect(newState[3].skillName).toEqual('Perception')
    expect(newState[3].score).toEqual(70)
})

it('updates an existing score', () => {
    const newState = barReducer(mockState, updateAction)
    expect(newState.length).toEqual(3)
    expect(newState[1].role).toEqual('Warlock')
    expect(newState[1].route).toEqual('Strength')
    expect(newState[1].skillName).toEqual('Athletics')
    expect(newState[1].score).toEqual(50)
})