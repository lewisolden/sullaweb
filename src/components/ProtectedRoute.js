import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useAuth();

  // Show loading state while checking authentication
  if (currentUser === undefined) {
    return <div>Loading...</div>; // Replace with a better UI loader if needed
  }

  return currentUser ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
