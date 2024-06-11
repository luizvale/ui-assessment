import React from 'react';
import PropTypes from 'prop-types';
import './upload-stats.css';

const UploadStats = ({ uploadSuccess, linesSaved }) => {
  return (
    <div className="upload-stats">
      <div className='upload-success'>
        <h2>{uploadSuccess}%</h2>
        <p>UPLOAD SUCCESS</p>
      </div>
      <div className='lines-saved'>
        <h2>{linesSaved}%</h2>
        <p>LINES SAVED</p>
      </div>
    </div>
  );
}

UploadStats.propTypes = {
  uploadSuccess: PropTypes.number.isRequired,
  linesSaved: PropTypes.number.isRequired,
};

export default UploadStats;
