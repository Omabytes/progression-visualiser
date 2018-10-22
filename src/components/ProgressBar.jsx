import React from 'react'
import PropTypes from 'prop-types'

const ProgressBar = ({ score }) => (
    <div className="progressBar"/>
)

ProgressBar.propTypes = {
    score: PropTypes.number.isRequired
}

export default ProgressBar;
