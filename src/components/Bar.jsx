import React from 'react'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'


const Bar = ({ score, updateScore, disabled }) => (
    <div className="bar">
    {
        disabled
        ?
        <Slider
            value={score}
            onAfterChange={updateScore}
            disabled={disabled}
        />
        : 
        <Slider
            defaultValue={score}
            onAfterChange={updateScore}
        />
    } 
    </div>
)


export default Bar
