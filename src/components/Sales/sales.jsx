import React from 'react';
import PropTypes from 'prop-types';
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
            Sales
          </strong>
          <p className='upload-info'>You had {data.uploads} uploads and {data.linesSaved} lines added.</p>
        </div>
        <UploadStats />
      </div>
    </div>
  );
}

Sales.propTypes = {
  data: PropTypes.shape({
    uploads: PropTypes.number.isRequired,
    linesSaved: PropTypes.number.isRequired,
  }).isRequired,
};

export default Sales;
