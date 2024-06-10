import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faSpeakap } from '@fortawesome/free-brands-svg-icons';
import './support-contact.css';

const SupportContact = ({ contact }) => {
  return (
    <div className="support-container">
      <h6 className='title-support'>YOUR FEEFO SUPPORT CONTACT</h6>
      <div className="support-contact">
        <FontAwesomeIcon icon={faSpeakap} className="support-icon" />
        <div className="contact-info">
          <strong className='support'>Support</strong>
          <div className="contact">
            <FontAwesomeIcon icon={faEnvelope} className="support-icon-envelope"/>
            {contact.email}
            <span className="phone">{contact.phone}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

SupportContact.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired
  }).isRequired,
};

export default SupportContact;
