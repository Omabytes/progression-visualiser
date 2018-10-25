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
    return <SkillContainer key={skillName} skillName={skillName} />
}

const HomePage = () => (
    <div className="App">
        <header className="App-header">
            <SelectorContainer roles={roles}/>
        </header>
        <body>
            <div className="skills">
                {skillNames.map(generateSkills)}
            </div>
        </body>
    </div>
)

export default HomePage
