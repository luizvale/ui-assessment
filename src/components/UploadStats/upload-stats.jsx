import React from 'react';
import './upload-stats.css';

const UploadStats = ({ uploadSuccess, linesSaved }) => {
  return (
    <div className="upload-stats">
      <div className='upload-success'>
        <h2>{5}%</h2>
        <p>UPLOAD SUCCESS</p>
      </div>
      <div className='lines-saved'>
        <h2>{3}%</h2>
        <p>LINES SAVED</p>
      </div>
    </div>
  );
}

export default UploadStats;
