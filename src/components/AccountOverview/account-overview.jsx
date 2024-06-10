import React from 'react';
import PropTypes from 'prop-types';
import './account-overview.css';
import SupportContact from '../SupportContact/support-contact.jsx';
import Sales from '../Sales/sales.jsx';

export const AccountOverview = ({ data }) => {
  return (
    <div className='container-overview'>
      <div className="account-overview">
        <h2 className='title'>
          Account Overview
        </h2>
        <SupportContact contact={data.supportContact} />
      </div>
      <Sales data={data.salesOverview} />
    </div>
  );
}

AccountOverview.propTypes = {
  data: PropTypes.shape({
    supportContact: PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired
    }).isRequired,
    salesOverview: PropTypes.shape({
      uploads: PropTypes.number.isRequired,
      linesSaved: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default AccountOverview;
