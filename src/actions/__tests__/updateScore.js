import configureMockStore from 'redux-mock-store'
import { updateScore } from '../updateScore'


const mockStore = configureMockStore()
const skillName = 'Persuasion'
const score = 69
const role = 'Warlock'
const route = 'Charisma'

it('returns correct action type', () => {
    return expect(updateScore().type).toEqual('UPDATE_SCORE')
})

it('contains the action payload', () => {
    let result = expect(updateScore(skillName, score, role, route).skillName).toEqual(skillName) &&
        expect(updateScore(skillName, score, role, route).score).toEqual(score) &&
        expect(updateScore(skillName, score, role, route).role).toEqual(role) &&
        expect(updateScore(skillName, score, role, route).route).toEqual(route)
    return result
})

it('dispatches to the store', () => {
    const store = mockStore({})
    store.dispatch(updateScore(skillName, score, role, route))
    return expect(store.getActions()[0].type).toEqual('UPDATE_SCORE')
})
