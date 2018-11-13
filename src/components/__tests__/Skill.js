import React from 'react'
import ReactDOM from 'react-dom'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'
import Skill from '../Skill'

configure({ adapter: new Adapter() })

it('renders without crashing', () => {
    shallow(<Skill />).text()
})
