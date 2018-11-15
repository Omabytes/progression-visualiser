import selectorReducer from '../selector'

const mockState = {
    role: 'Warlock'
}

const action = {
    type: 'UPDATE_ROLE',
    role: 'Monk'
}

it('returns the initial state when no action given', () => {
    const newState = selectorReducer(mockState, {})
    expect(newState).toEqual(mockState)
})

it('updates to the first chosen role', () => {
    const newState = selectorReducer({}, action)
    expect(newState).toEqual({ role: 'Monk' })
})

it('updates when a different role is chosen', () => {
    const newState = selectorReducer(mockState, action)
    expect(newState).toEqual({ role: 'Monk' })
})
