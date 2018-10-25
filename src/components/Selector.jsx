import React from 'react'
import Select from 'rc-select'
import 'rc-select/assets/index.css'

const Selector = ({ updateRole, roles }) => (
    <div className="selector">
        <Select
            onChange={updateRole}
            placeholder="Choose Role..."
        >
            {roles.map(role => <option value={role}>{role}</option>)}
        </Select>
    </div>
)

export default Selector
