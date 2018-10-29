import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateRoute } from '../actions/updateRoute'
import Skill from '../components/Skill'

class SkillContainer extends Component {
    render() {
        return (
            <div className="skill-container">
                <Skill 
                    skillName={this.props.skillName}
                    updateRoute={() => this.props.updateRoute(this.props.skillName)}
                    linked={this.props.linked}
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
