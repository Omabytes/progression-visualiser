import React from 'react'


const fileUploader = () => (
    <div className='link'>
        <input
            className='importer'
            type='file'
            id='import'
        />
        <label
            className='label'
            htmlFor='import'
        >
            Import Data
        </label>
    </div>
)

export default fileUploader