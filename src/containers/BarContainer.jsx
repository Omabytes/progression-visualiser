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
                    score={this.props.score}
                    updateScore={this.props.updateScore}
                />
            </div>
        )
    }

}

function mapStateToProps({ barReducer }) {
    return { score: barReducer.score }
}

function mapDispatchToProps(dispatch) {
    return { ...bindActionCreators({ updateScore }, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(BarContainer)
