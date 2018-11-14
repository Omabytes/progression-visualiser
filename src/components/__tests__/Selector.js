import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import Selector from '../Selector'
import Select from 'rc-select'

const wrapper = shallow(<Selector roles={['Warlock', 'Monk']} />)

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Selector />, div)
})

it('contains a Select component', () => {
    expect(wrapper.find(Select).length).toEqual(1)
})

it('displays "Choose Role..." before role selection', () => {
    expect(wrapper.find(Select).props().value).toEqual('Choose Role...')
})

it('creates Select options from props', () => {
    expect(wrapper.find(Select.Option).length).toEqual(2)
})

