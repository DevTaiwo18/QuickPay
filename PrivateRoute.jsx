import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from './src/contexts/authContext';

const PrivateRoute = ({ children }) => {
  const { user } = useAuthContext;

  return user ? children : <Navigate to="/signin" />;
};

export default PrivateRoute;
