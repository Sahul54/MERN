import React from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../services/authService'; // Function to check if the user is logged in

const PrivateRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" />;
};

export default PrivateRoute;