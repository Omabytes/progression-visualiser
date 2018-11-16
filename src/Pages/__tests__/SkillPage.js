import React from 'react'
import configureMockStore from 'redux-mock-store'
import { shallow } from 'enzyme'
import { Link } from 'react-router-dom'
import SkillPage from '../SkillPage'
import SkillContainer from '../../containers/SkillContainer';


const mockStore = configureMockStore()
const store = mockStore({}) 

const wrapper = shallow(
    <SkillPage store={store}/>
).dive()

it('renders without crashing', () => {
    wrapper.text()
})

it('contains a single back link', () => {
    expect(wrapper.find(Link).length).toEqual(1)
    expect(wrapper.containsMatchingElement(
        <Link to="/">Back</Link>
    )).toEqual(true)
})

it('contains a SkillContainer', () => {
    expect(wrapper.find(SkillContainer).length).toEqual(1)
})

it('contains a skills grid', () => {
    expect(wrapper.find('.skills').length).toEqual(1)
})
