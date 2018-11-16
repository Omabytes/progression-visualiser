import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateRole } from "../actions/updateRole";
import SkillContainer from '../containers/SkillContainer'
import SelectorContainer from '../containers/SelectorContainer'
import { attributes } from '../resources/attributes'
import FileDownloader from '../FileDownloader'
import FileUploader from '../FileUploader'

const generateSkills = function(skillName) {
    return <SkillContainer
        key={skillName}
        skillName={skillName}
        linked={true}
        barDisabled={true}
    />
}

const clearRole = (updateRole) => {
    updateRole(null)
    return null
}

let roles = Object.keys(attributes)

const HomePage = ({ role, updateRole }) => (
    <div className="App">
        <header className="App-header">
            <div className='file-handlers'>
                <FileUploader />
                <FileDownloader />
            </div>
            
            <SelectorContainer roles={roles}/>
        </header>
        <div className="skills">
            {roles.includes(role) ? Object.keys(attributes[role]).map(generateSkills) : clearRole(updateRole)}
        </div>
    </div>
)

function mapStateToProps({ selectorReducer }) {
    return {
        ...selectorReducer
    }
}

function mapDispatchToProps(dispatch) {
    return { ...bindActionCreators({ updateRole }, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
