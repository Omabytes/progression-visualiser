import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateRole } from "../actions/updateRole";
import Selector from '../components/Selector';

class SelectorContainer extends Component {
    render() {
        return (
            <div className="selector-container">
                <Selector 
                    updateRole={(newRole) => this.props.updateRole(newRole)}
                    roles={this.props.roles}
                    currentRole={this.props.role}
                />
            </div>
        )
    }

}

function mapStateToProps({ selectorReducer }) {
    return { 
        ...selectorReducer
    }
}

function mapDispatchToProps(dispatch) {
    return { ...bindActionCreators({ updateRole }, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectorContainer)
