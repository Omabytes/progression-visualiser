import React from 'react'
import { Link } from 'react-router-dom'
import BarContainer from '../containers/BarContainer'

const insertLink = (skillName) => (
    <Link to="/skill">
        {skillName}
    </Link>
)

const Skill = ({ skillName, updateRoute, linked }) => (
    <div className="skill">
        <div
            className="skillText"
            onClick={linked ? updateRoute : null}
        >
            {linked ? insertLink(skillName) : skillName}
        </div>
        <BarContainer skillName={skillName}/>
    </div>
)

export default Skill
