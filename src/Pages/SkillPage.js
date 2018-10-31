import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import SkillContainer from '../containers/SkillContainer'
import { attributes } from '../resources/attributes'

const generateSkills = function(skillName) {
    return <SkillContainer
        key={skillName}
        skillName={skillName}
        linked={false}
        barDisabled={false}
    />
}

const returnToHomepage = (
    <Redirect to='/' />
)

const SkillPage = ({ route, role }) => (
    <div className="App">
        <header className="App-header">
            <div className='back'>
                <Link to="/" className='link'>
                    Back
                </Link>
            </div>
            <div className='skill-average-bar'>
                <SkillContainer
                    skillName={ route }
                    linked={false}
                    barDisabled={true}
                /> 
            </div>
        </header>
        <div className="skills">
            {role != null && route != null ? attributes[role][route].map(generateSkills) : returnToHomepage}
        </div>
    </div>
)

function mapStateToProps({ skillReducer, selectorReducer }) {
    return {
        ...skillReducer,
        ...selectorReducer
    }
}

export default connect(mapStateToProps)(SkillPage)
