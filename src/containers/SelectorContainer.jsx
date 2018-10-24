import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Selector from '../components/Selector';

class SelectorContainer extends Component {
    render() {
        return (
            <div className="selector-container">
                <Selector />
            </div>
        )
    }

}

function mapStateToProps({ selectorReducer }) {
    return { }
}

function mapDispatchToProps(dispatch) {
    return { ...bindActionCreators({ }, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectorContainer)
