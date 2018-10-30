import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateScore } from '../actions/updateScore'
import Bar from '../components/Bar';


function getAverage(role, route) {
    return 100
}

class BarContainer extends Component {
    render() {
        let tp = this.props
        return (
            <div className="bar-container">
                <Bar
                    score={getAverage(tp.role, tp.route)}
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
