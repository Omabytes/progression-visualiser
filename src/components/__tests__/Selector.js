import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import Selector from '../Selector'
import Select from 'rc-select'

const props = {
    updateRole: jest.fn(),
    roles: ['Warlock', 'Monk'],
    currentRole: null
}

const wrapper = shallow(<Selector {...props} />)

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

it('calls updateRole when a role is selected', () => {
    const event = {target: {value: 'Warlock'}}
    wrapper.find(Select).simulate('change', event)
    expect(props.updateRole).toHaveBeenCalled()
})
