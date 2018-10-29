import React from 'react'
import SkillContainer from '../containers/SkillContainer'
import SelectorContainer from '../containers/SelectorContainer'
import { skills } from '../resources/skills';
import { roles } from '../resources/roles';

const generateSkills = function(skillName) {
    return <SkillContainer
        key={skillName}
        skillName={skillName}
        linked={true}
        barDisabled={true}
    />
}

const HomePage = () => (
    <div className="App">
        <header className="App-header">
            <SelectorContainer roles={roles}/>
        </header>

        <div className="skills">
            {skills.map(generateSkills)}
        </div>
    </div>
)

export default HomePage
