import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateScore } from '../actions/updateScore'
import Bar from '../components/Bar';

function updateScores(updateScore, skillName, newScore, role, route) {
    updateScore(skillName, newScore, role, route)
    // This fixes a bug with rc-slider that doesn't allow continued click'n'drag when a slider has focus
    document.activeElement.blur()
}

class BarContainer extends Component {
    render() {
        let tp = this.props
        let record = tp.barReducer.find(x => (x.role === tp.role && x.route === tp.route && x.skillName === tp.skillName))
        return (
            <div className="bar-container">
                <Bar
                    score={record === undefined ? 0 : record.score}
                    updateScore={(newScore) => updateScores(
                        tp.updateScore,
                        tp.skillName,
                        newScore,
                        tp.role,
                        tp.route
                    )}
                    disabled={tp.disabled}
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
