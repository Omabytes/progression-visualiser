import React from 'react'
import Select from 'rc-select'
import 'rc-select/assets/index.css'

const Selector = ({ updateRole, roles, currentRole }) => (
    <div className="selector">
        <Select
            onChange={updateRole}
            showSearch={false}
            value={currentRole != null ? currentRole : "Choose Role..."}
        >
            {roles && roles.map(role => <Select.Option key={role}>{role}</Select.Option>)}
        </Select>
    </div>
)

export default Selector
