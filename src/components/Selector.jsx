import React from 'react'
import Select from 'rc-select'
import 'rc-select/assets/index.css'

const Selector = () => (
    <div className="selector">
        <Select
            placeholder="Choose Role..."
        >
            <option value="Developer">Developer</option>
            <option value="Tester">Tester</option>
        </Select>
    </div>
)

export default Selector
