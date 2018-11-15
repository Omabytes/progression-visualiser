import React from 'react'
import { shallow } from 'enzyme'
import store from '../../store'
import { Provider } from 'react-redux'
import SkillContainer from '../SkillContainer'


const props = {
    updateRoute: jest.fn()
}

const enabledWrapper = shallow(
    <Provider store={store}>
        <SkillContainer
            {...props}
            skillName={'Persuasion'}
            linked={true}
            barDisabled={false}
        />
    </Provider>
)
const disabledWrapper = shallow(
    <Provider store={store}>
        <SkillContainer
            {...props}
            skillName={'Charisma'}
            linked={false}
            barDisabled={true}
        />
    </Provider>
)

it('renders without crashing', () => {
    enabledWrapper.text()
    disabledWrapper.text()
})
