import React from 'react'
import BarContainer from '../containers/BarContainer'

const Skill = ({ skillName, updateRoute }) => (
    <div className="skill">
        <div
            className="skillText"
            onClick={updateRoute}
        >
            {skillName}
        </div>
        <BarContainer skillName={skillName}/>
    </div>
)

export default Skill
