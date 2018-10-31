import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateRole } from "../actions/updateRole";
import Selector from '../components/Selector';

class SelectorContainer extends Component {
    render() {
        let tp = this.props
        return (
            <div className="selector-container">
                <Selector 
                    updateRole={(newRole) => tp.updateRole(newRole)}
                    roles={tp.roles}
                    currentRole={tp.role}
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
