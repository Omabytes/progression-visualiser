import React from 'react'
import { store } from './index'
import { uploadState } from './actions/uploadState'

const loadFile = (file) => {
    const reader = new FileReader()
    reader.readAsText(file)
    reader.onload = () => {
        store.dispatch(uploadState(reader.result))
    }
}

const fileUploader = () => (
    <div className='link'>
        <input
            className='importer'
            type='file'
            id='import'
            onChange={(e) => { loadFile(e.target.files[0]) }}
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