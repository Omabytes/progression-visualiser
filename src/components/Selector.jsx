import React from 'react'
import Select from 'rc-select'
import 'rc-select/assets/index.css'

const Selector = ({ updateRole, roles }) => (
    <div className="selector">
        <Select
            onChange={updateRole}
            placeholder="Choose Role..."
            showSearch={false}
        >
            {roles.map(role => <option key={role}>{role}</option>)}
        </Select>
    </div>
)

export default Selector
