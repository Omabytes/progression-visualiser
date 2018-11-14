import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'
import Skill from '../Skill'
import BarContainer from '../../containers/BarContainer'
import AverageBarContainer from '../../containers/AverageBarContainer'

configure({ adapter: new Adapter() })

const disabledWrapper = shallow(<Skill barDisabled={true} skillName={'Charisma'}/>)
const enabledWrapper = shallow(<Skill barDisabled={false} skillName={'Persuasion'}/>)

it('renders without crashing', () => {
    enabledWrapper.text()
})

it('contains the skillName text', () => {
    expect(enabledWrapper.containsMatchingElement(
        <div>Persuasion</div>
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
