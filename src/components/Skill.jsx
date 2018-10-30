import React from 'react'
import { Link } from 'react-router-dom'
import BarContainer from '../containers/BarContainer'
import AverageBarContainer from '../containers/AverageBarContainer'

const insertLink = (skillName) => (
    <Link to="/skill">
        {skillName}
    </Link>
)

const insertBar = (barDisabled, skillName) => (
    barDisabled ?
    <AverageBarContainer
        skillName={skillName}
        disabled={barDisabled}    
    /> :
    <BarContainer
        skillName={skillName}
        disabled={barDisabled}    
    />
)

const Skill = ({ skillName, updateRoute, linked, barDisabled }) => (
    <div className="skill">
        <div
            className="skillText"
            onClick={linked ? updateRoute : null}
        >
            {linked ? insertLink(skillName) : skillName}
        </div>
        { insertBar(barDisabled, skillName) }
    </div>
)

export default Skill
