import React from 'react'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'


const Bar = ({ score, updateScore, disabled }) => (
    <div className="bar">
        <Slider
            defaultValue={score}
            onAfterChange={updateScore}
            disabled={disabled}
        />
    </div>
)


export default Bar
