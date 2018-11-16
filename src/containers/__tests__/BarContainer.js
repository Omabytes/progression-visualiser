import React from 'react'
import { shallow } from 'enzyme'
import configureMockStore from 'redux-mock-store'
import BarContainer from '../BarContainer'

const mockStore = configureMockStore()
const store = mockStore({}) 

const wrapper = shallow(
    <BarContainer store={store} />
)

it('should render without crashing', () => {
    wrapper.text()
})
