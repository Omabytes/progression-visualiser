import React from 'react'
import SkillContainer from '../containers/SkillContainer'
import SelectorContainer from '../containers/SelectorContainer'

const roles = [
    "Cleric",
    "Druid",
    "Monk"
]

const skillNames = [
    "Charisma",
    "Constitution",
    "Dexterity",
    "Intelligence",
    "Strength",
    "Wisdom"
]

const generateSkills = function(skillName) {
    return <SkillContainer key={skillName} skillName={skillName} linked={true} />
}

const HomePage = () => (
    <div className="App">
        <header className="App-header">
            <SelectorContainer roles={roles}/>
        </header>

        <div className="skills">
            {skillNames.map(generateSkills)}
        </div>
    </div>
)

export default HomePage
