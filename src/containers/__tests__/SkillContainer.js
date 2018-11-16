import React from 'react'
import { shallow } from 'enzyme'
import configureMockStore from 'redux-mock-store'
import SkillContainer from '../SkillContainer'

const mockStore = configureMockStore()
const store = mockStore({ 
    skillReducer : {
        route: 'Charisma'
    }
}) 

const props = {
    updateRoute: jest.fn()
}

const enabledWrapper = shallow(
    <SkillContainer
        {...props}
        skillName={'Persuasion'}
        linked={true}
        barDisabled={false}
        store={store}
    />
)
const disabledWrapper = shallow(
    <SkillContainer
        {...props}
        skillName={'Charisma'}
        linked={false}
        barDisabled={true}
        store={store}
    />
)

it('renders without crashing', () => {
    enabledWrapper.text()
    disabledWrapper.text()
})
