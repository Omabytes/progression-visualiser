import React from 'react'
import Slider from 'rc-slider/lib/Slider'
import 'rc-slider/assets/index.css'


const Bar = ({ score, updateScore }) => (
    <div className="bar">
        <Slider
            defaultValue={score}
            onAfterChange={updateScore}
        />
    </div>
)


export default Bar
