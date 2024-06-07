import React from 'react';
import './account-overview.css';
import SupportContact from '../SupportContact/support-contact.jsx';
import Sales from '../Sales/sales.jsx';

export const AccountOverview = ({ data }) => {
  return (
    <div class='container-overview'>
      <div className="account-overview">
        <h2 className='title'>
            Account Overview
        </h2>
        <SupportContact />
      </div>
      <Sales/>
    </div>
  );
}

export default AccountOverview;
