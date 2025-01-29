import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useAuth();

  if (!currentUser) {
    // Redirect to login if no user is logged in
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
