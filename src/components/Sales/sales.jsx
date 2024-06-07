import React from 'react';
import UploadStats from '../UploadStats/upload-stats';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import './sales.css';

const Sales = ({ data }) => {
  return (
    <div className="sales-container">
      <div className="sales-inner">
        <div className='sales-content'>
          <strong className='sales-text'>
          <FontAwesomeIcon className='upload-icon' icon={faUpload} style={{color: "#0096ff",}} />
            Sales</strong>
          <p className='upload-info'>You had {4} uploads and {5} lines added.</p>
        </div>
        <UploadStats/>
      </div>
    </div>
  );
}

export default Sales;
