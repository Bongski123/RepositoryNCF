import React from 'react';
import { useAuth } from './AuthWrapper';

const withAuthorization = (WrappedComponent) => {
  return (props) => {
    const { user } = useAuth();

    // Redirect if user is not authenticated or not an admin
    if (!user || user.roleName !== 'Administrator') {
      // Handle unauthorized access
      return <div>Unauthorized Access</div>; // You can redirect to a login page or show a message
    }

    // Render the component if user is authenticated and is an admin
    return <WrappedComponent {...props} />;
  };
};

export default withAuthorization;
