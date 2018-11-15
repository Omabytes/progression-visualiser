import React from 'react'
import { shallow } from 'enzyme'
import store from '../../store'
import { Provider } from 'react-redux'
import SelectorContainer from '../SelectorContainer'


const wrapper = shallow(
    <Provider store={store}>
        <SelectorContainer />
    </Provider>
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
