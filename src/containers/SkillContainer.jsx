import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateRoute } from '../actions/updateRoute'
import Skill from '../components/Skill'

class SkillContainer extends Component {
    render() {
        let tp = this.props
        return (
            <div className="skill-container">
                <Skill 
                    skillName={tp.skillName}
                    updateRoute={() => tp.updateRoute(tp.skillName)}
                    linked={tp.linked}
                    barDisabled={tp.barDisabled}
                />
            </div>
        )
    }
}

function mapStateToProps({ skillReducer }) {
    return { 
        route: skillReducer.route
    }
}

function mapDispatchToProps(dispatch) {
    return { ...bindActionCreators({ updateRoute }, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(SkillContainer)
