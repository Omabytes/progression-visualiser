import configureMockStore from 'redux-mock-store'
import { updateRoute } from '../updateRoute'


const mockStore = configureMockStore()
const skillName = 'Charisma'

it('returns correct action type', () => {
    return expect(updateRoute().type).toEqual('UPDATE_ROUTE')
})

it('contains the action payload', () => {
    return expect(updateRoute(skillName).skillName).toEqual(skillName)
})

it('dispatches to the store', () => {
    const store = mockStore({})
    store.dispatch(updateRoute(skillName))
    return expect(store.getActions()[0].type).toEqual('UPDATE_ROUTE')
})
