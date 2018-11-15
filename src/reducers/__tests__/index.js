import rootReducer from '../index'

const mockState = {
    barReducer: [
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
    ],
    selectorReducer: {
        role: 'Warlock'
    },
    skillReducer: {
        route: 'Charisma'
    }
}

const uploadAction = {
    type: 'UPLOAD_STATE',
    upState: JSON.stringify({
        barReducer: [
            {
                role: 'Barbarian',
                route: 'Intelligence',
                skillName: 'History',
                score: 40
            }
        ],
        selectorReducer: {
            role: 'Druid'
        },
        skillReducer: {
            route: 'Wisdom'
        }
    })
}

it('returns the initial state when no action given', () => {
    const newState = rootReducer(mockState, {})
    expect(newState).toEqual(mockState)
})

it('catches the UPLOAD_STATE action and replaces the state with the new one', () => {
    const newState = rootReducer(mockState, uploadAction)
    expect(newState.barReducer[0].role).toEqual('Barbarian')
    expect(newState.barReducer[0].route).toEqual('Intelligence')
    expect(newState.barReducer[0].skillName).toEqual('History')
    expect(newState.barReducer[0].score).toEqual(40)
    expect(newState.barReducer[0].score).toEqual(40)
})

it('')
