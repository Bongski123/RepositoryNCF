import React from 'react';
import PendingResearches from '../PendingApproval';
import withAuthorization from '../../auth/WithAuth';

const AdminPage = () => {
  return (
    <div>
      <h1>Administrator Page</h1>
      <PendingResearches />
    </div>
  );
};

export default withAuthorization(AdminPage);
