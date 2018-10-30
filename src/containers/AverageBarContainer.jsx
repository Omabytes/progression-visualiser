import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateScore } from '../actions/updateScore'
import Bar from '../components/Bar';


function getAverage(role, skillName, barReducer) {
    if (role === null) return 0
    let matches = barReducer.filter(el => el.role === role && el.route === skillName)
    return matches.reduce((a, c) => a + c.score, 0) / Math.max(matches.length, 1)
}

class AverageBarContainer extends Component {
    render() {
        let tp = this.props
        return (
            <div className="bar-container">
                <Bar
                    score={getAverage(tp.role, tp.skillName, tp.barReducer)}
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

export default connect(mapStateToProps, mapDispatchToProps)(AverageBarContainer)
