import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateScore } from '../actions/updateScore'
import Bar from '../components/Bar';

function updateScores(updateScore, skillName, newScore, role, route) {
    updateScore(skillName, newScore, role, route)
}

class BarContainer extends Component {
    render() {
        return (
            <div className="bar-container">
                <Bar
                    score={this.props[this.props.skillName]}
                    updateScore={(newScore) => updateScores(this.props.updateScore,
                        this.props.skillName,
                        newScore,
                        this.props.role,
                        this.props.route
                    )}
                    disabled={this.props.disabled}
                />
            </div>
        )
    }

}

function mapStateToProps({ barReducer, skillReducer, selectorReducer }) {
    return {
        ...barReducer,
        ...skillReducer,
        ...selectorReducer
    }
}

function mapDispatchToProps(dispatch) {
    return { ...bindActionCreators({ updateScore }, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(BarContainer)
