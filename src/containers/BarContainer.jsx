import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateScore } from '../actions/updateScore'
import Bar from '../components/Bar';

class BarContainer extends Component {
    render() {
        return (
            <div className="bar-container">
                <Bar
                    score={this.props[this.props.skillName]}
                    updateScore={(newScore) => this.props.updateScore(this.props.skillName, newScore)}
                />
            </div>
        )
    }

}

function mapStateToProps({ barReducer }) {
    return {
        ...barReducer
    }
}

function mapDispatchToProps(dispatch) {
    return { ...bindActionCreators({ updateScore }, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(BarContainer)
