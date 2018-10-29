import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import SkillContainer from '../containers/SkillContainer'
import { attributes } from '../resources/attributes'

const generateSkills = function(skillName) {
    return <SkillContainer key={skillName} skillName={skillName} linked={false} />
}

const returnToHomepage = (
    <Redirect to='/' />
)

const SkillPage = ({ route, role }) => (
    <div className="App">
        <header className="App-header">
            <Link to="/">
                Back
            </Link>
            { route } ------------------- Overall skill progress bar.
            <SkillContainer skillName={ route } linked={false} /> 
        </header>
        <div className="attributes">
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
