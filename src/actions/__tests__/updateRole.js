import configureMockStore from 'redux-mock-store'
import { updateRole } from '../updateRole'


const mockStore = configureMockStore()
const role = 'Warlock'

it('returns correct action type', () => {
    return expect(updateRole().type).toEqual('UPDATE_ROLE')
})

it('contains the action payload', () => {
    return expect(updateRole(role).role).toEqual(role)
})

it('dispatches to the store', () => {
    const store = mockStore({})
    store.dispatch(updateRole(role))
    return expect(store.getActions()[0].type).toEqual('UPDATE_ROLE')
})
