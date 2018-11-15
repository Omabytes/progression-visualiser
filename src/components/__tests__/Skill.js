import React from 'react'
import { shallow } from 'enzyme'
import { Link } from 'react-router-dom'
import Skill from '../Skill'
import BarContainer from '../../containers/BarContainer'
import AverageBarContainer from '../../containers/AverageBarContainer'


const props = {
    updateRoute: jest.fn()
}

const disabledWrapper = shallow(
    <Skill
        {...props}
        barDisabled={true}
        skillName={'Charisma'}
        linked={false}
    />
)
const enabledWrapper = shallow(
    <Skill
        {...props}
        barDisabled={false}
        skillName={'Persuasion'}
        linked={true}
    />
)

it('renders without crashing', () => {
    enabledWrapper.text()
})

it('contains the skillName text', () => {
    expect(enabledWrapper.containsMatchingElement(
        <Link to="/skill">Persuasion</Link>
    )).toEqual(true)
    expect(disabledWrapper.containsMatchingElement(
        <div>Charisma</div>
    )).toEqual(true)
})

it('contains a BarContainer when not disabled', () => {
    expect(enabledWrapper.find(BarContainer).length).toEqual(1)
    expect(enabledWrapper.find(AverageBarContainer).length).toEqual(0)
})

it('contains an AverageBarContainer when not disabled', () => {
    expect(disabledWrapper.find(BarContainer).length).toEqual(0)
    expect(disabledWrapper.find(AverageBarContainer).length).toEqual(1)
})

it('calls updateRoute when Link is clicked', () => {
    enabledWrapper.find('.skill-text').simulate('click')
    expect(props.updateRoute).toHaveBeenCalled()
})
