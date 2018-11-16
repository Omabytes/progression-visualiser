import React from 'react'
import { shallow } from 'enzyme'
import configureMockStore from 'redux-mock-store'
import AverageBarContainer from '../AverageBarContainer'

const mockStore = configureMockStore()
const store = mockStore({}) 

const wrapper = shallow(
    <AverageBarContainer store={store} />
)

it('should render without crashing', () => {
    wrapper.text()
})
