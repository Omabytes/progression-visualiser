import configureMockStore from 'redux-mock-store'
import { uploadState } from '../uploadState'


const mockStore = configureMockStore()
const upState = {'test': {
    'test2': 'test2'
}}

it('returns correct action type', () => {
    return expect(uploadState().type).toEqual('UPLOAD_STATE')
})

it('contains the action payload', () => {
    return expect(uploadState(upState).upState).toEqual(upState)
})

it('dispatches to the store', () => {
    const store = mockStore({})
    store.dispatch(uploadState(upState))
    return expect(store.getActions()[0].type).toEqual('UPLOAD_STATE')
})
