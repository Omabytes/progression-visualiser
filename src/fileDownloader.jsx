import React from 'react'
import store from './store'

const fd = (data) => {
    const blob = new Blob([data], { type: 'application/octet-stream' });
    const blobURL = window.URL.createObjectURL(blob);
    const tempLink = document.createElement('a');
    tempLink.style.display = 'none';
    tempLink.href = blobURL;
    tempLink.setAttribute('download', 'score-profile');
    document.body.appendChild(tempLink);
    tempLink.click();
    document.body.removeChild(tempLink);
    window.URL.revokeObjectURL(blobURL);
  };
  
const fileDownloader = () => (
  <div 
    className='link'
    onClick={() => fd(JSON.stringify(store.getState()))}
  >
    Export Data
  </div>
)
  
  export default fileDownloader;
