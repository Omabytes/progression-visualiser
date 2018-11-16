import React from 'react'
import store from './store'

const pad = (x) => {
  return (x < 10 ? '0' : '') + x
}

const getFilename = () => {
  let d = new Date()

  return 'score-profile-' +
    d.getFullYear() +
    (pad(d.getMonth() + 1)) +
    pad(d.getDate()) +
    '-' +
    pad(d.getHours()) +
    pad(d.getMinutes()) +
    pad(d.getSeconds())
}

const fd = (data) => {
    const blob = new Blob([data], { type: 'application/octet-stream' });
    const blobURL = window.URL.createObjectURL(blob);
    const tempLink = document.createElement('a');
    tempLink.style.display = 'none';
    tempLink.href = blobURL;
    tempLink.setAttribute('download', getFilename());
    document.body.appendChild(tempLink);
    tempLink.click();
    document.body.removeChild(tempLink);
    window.URL.revokeObjectURL(blobURL);
  };
  
const FileDownloader = () => (
  <div 
    className='link'
    onClick={() => fd(JSON.stringify(store.getState()))}
  >
    Export Data
  </div>
)
  
  export default FileDownloader;
