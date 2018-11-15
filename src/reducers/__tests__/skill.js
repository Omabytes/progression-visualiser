import skillReducer from '../skill'

const mockState = {
    route: 'Charisma'
}

const action = {
    type: 'UPDATE_ROUTE',
    skillName: 'Dexterity'
}

it('returns the initial state when no action given', () => {
    const newState = skillReducer(mockState, {})
    expect(newState).toEqual(mockState)
})

it('updates to the first chosen route', () => {
    const newState = skillReducer({}, action)
    expect(newState).toEqual({ route: 'Dexterity' })
})

it('updates when a different role is chosen', () => {
    const newState = skillReducer(mockState, action)
    expect(newState).toEqual({ route: 'Dexterity' })
})
