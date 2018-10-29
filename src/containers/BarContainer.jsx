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
        let record = this.props.barReducer.find(x => (x.role === this.props.role && x.route === this.props.route && x.skillName === this.props.skillName))
        return (
            <div className="bar-container">
                <Bar
                    score={record === undefined ? 0 : record.score}
                    updateScore={(newScore) => updateScores(
                        this.props.updateScore,
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
        barReducer,
        ...skillReducer,
        ...selectorReducer
    }
}

function mapDispatchToProps(dispatch) {
    return { ...bindActionCreators({ updateScore }, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(BarContainer)
