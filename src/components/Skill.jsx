import React from 'react'
import { Link } from 'react-router-dom'
import BarContainer from '../containers/BarContainer'

const Skill = ({ skillName, updateRoute }) => (
    <div className="skill">
        <div
            className="skillText"
            onClick={updateRoute}
        >
            <Link to="/skill">
                {skillName}
            </Link>
        </div>
        <BarContainer skillName={skillName}/>
    </div>
)

export default Skill
