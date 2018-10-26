import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import SkillContainer from '../containers/SkillContainer'
import { attributes } from '../resources/attributes'

const generateSkills = function(skillName) {
    return <SkillContainer key={skillName} skillName={skillName} />
}

const SkillPage = ({ route }) => (
    <div className="App">
        <header className="App-header">
            <Link to="/">
                Back
            </Link>
            { route } ------------------- Overall skill progress bar. 
        </header>
        <body>
            <div className="attributes">
                {attributes[route].map(generateSkills)}
            </div>
        </body>
    </div>
)

function mapStateToProps({ skillReducer }) {
    return {
        ...skillReducer
    }
}

export default connect(mapStateToProps)(SkillPage)
