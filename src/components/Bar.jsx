import React from 'react'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'


const marks = {
    '11': '',
    '37': '',
    '63': '',
    '89': ''
}

const styledMarks = {
    '11': '',
    '37': '',
    '63': '',
    '89': ''
}

const railStyle = {
    backgroundColor: 'rgb(225, 233, 230)',
    height: '30px'
}

const trackStyle={
    backgroundColor: 'rgb(59, 194, 192)',
    height: '30px'
}

const Bar = ({ score, updateScore, disabled }) => (
    <div className="bar">
    {
        disabled
        ?
        <Slider
            value={score}
            onAfterChange={updateScore}
            disabled={disabled}
            marks={marks}
            railStyle={railStyle}
            trackStyle={trackStyle}
        />
        : 
        <Slider
            defaultValue={score}
            onAfterChange={updateScore}
            marks={marks}
            railStyle={railStyle}
            trackStyle={trackStyle}
        />
    } 
    </div>
)


export default Bar
