import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import Bar from '../Bar'
import Slider from 'rc-slider'


const disabledWrapper = shallow(<Bar disabled={true} />)
const enabledWrapper = shallow(<Bar disabled={false} />)

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Bar />, div)
})

it('contains a Slider component', () => {
    expect(enabledWrapper.find(Slider).length).toEqual(1)
    expect(enabledWrapper.find(Slider).props().disabled).toEqual(false)
    expect(disabledWrapper.find(Slider).length).toEqual(1)
    expect(disabledWrapper.find(Slider).props().disabled).toEqual(true)
})
