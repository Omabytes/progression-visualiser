import React from 'react'
import { connect } from 'react-redux'
import SkillContainer from '../containers/SkillContainer'
import SelectorContainer from '../containers/SelectorContainer'
import { attributes } from '../resources/attributes'

const generateSkills = function(skillName) {
    return <SkillContainer
        key={skillName}
        skillName={skillName}
        linked={true}
        barDisabled={true}
    />
}

const HomePage = ({ role }) => (
    <div className="App">
        <header className="App-header">
            <SelectorContainer roles={Object.keys(attributes)}/>
        </header>
        <div className="skills">
            {role === null ? null : Object.keys(attributes[role]).map(generateSkills)}
        </div>
    </div>
)

function mapStateToProps({ selectorReducer }) {
    return {
        ...selectorReducer
    }
}

export default connect(mapStateToProps)(HomePage)
