// src/routes/PublicRoute.tsx
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PublicRoute = () => {
  const token = localStorage.getItem('jwt');

  // If a token exists, redirect to the private route (e.g., /profile)
  if (token) {
    return <Navigate to="/profile" replace />;
  }

  // Otherwise, render the requested public route
  return <Outlet />;
};

export default PublicRoute;
