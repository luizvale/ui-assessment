import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faSpeakap } from '@fortawesome/free-brands-svg-icons';
import './support-contact.css';

const SupportContact = () => {
  return (
    <div className="support-container">
      <h6 className='title-support'>YOUR FEFOO SUPPORT CONTACT</h6>
      <div className="support-contact">
        <FontAwesomeIcon icon={faSpeakap} className="support-icon" />
        <div className="contact-info">
          <strong className='support'>Support</strong>
          <div className="contact">
            <FontAwesomeIcon icon={faEnvelope} className="support-icon-envelope"/>
            support@feefo.com
            <span className="phone">020 3362 4208</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportContact;
