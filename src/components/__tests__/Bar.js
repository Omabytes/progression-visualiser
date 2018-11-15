import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import Bar from '../Bar'
import Slider from 'rc-slider'

const props = {
    score: 0,
    updateScore: jest.fn()
}

const disabledWrapper = shallow(<Bar {...props} disabled={true} />)
const enabledWrapper = shallow(<Bar {...props} disabled={false} />)

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

it('calls updateScore when the bar value is changed', () => {
    const event = {target: {value: 50}}
    enabledWrapper.find(Slider).simulate('afterChange', event)
    expect(props.updateScore).toHaveBeenCalled()
})
