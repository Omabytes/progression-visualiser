import React from 'react'
import { shallow } from 'enzyme'
import store from '../../store'
import { Provider } from 'react-redux'
import BarContainer from '../BarContainer'


const wrapper = shallow(
    <Provider store={store}>
        <BarContainer />
    </Provider>
)

it('should render without crashing', () => {
    wrapper.text()
})
