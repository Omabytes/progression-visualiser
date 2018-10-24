import React from 'react'
import BarContainer from '../containers/BarContainer'

const Skill = ({ skillName }) => (
    <div className="skill">
        <div className="skillText">{skillName}</div>
        <BarContainer skillName={skillName}/>
    </div>
)

export default Skill