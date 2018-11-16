import React from 'react'
import { shallow } from 'enzyme'
import configureMockStore from 'redux-mock-store'
import SelectorContainer from '../SelectorContainer'

const mockStore = configureMockStore()
const store = mockStore({}) 

const wrapper = shallow(
    <SelectorContainer store={store} />
)

const props = {
    roles: [
        'Warlock',
        'Monk',
        'Barbarian'
    ],
    role: 'Monk',
    updateRole: jest.fn()
}

it('should render without crashing', () => {
    wrapper.text()
})
