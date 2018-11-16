import React from 'react'
import { shallow } from 'enzyme'
import store from '../../store'
import { Provider } from 'react-redux'
import AverageBarContainer from '../AverageBarContainer'


const wrapper = shallow(
    <Provider store={store}>
        <AverageBarContainer />
    </Provider>
)

it('should render without crashing', () => {
    wrapper.text()
})
