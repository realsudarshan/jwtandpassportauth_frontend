// src/components/AuthCallback.tsx
import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const AuthCallback = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const token = urlParams.get('token');

    if (token) {
      // Store the token in local storage
      localStorage.setItem('jwt', token);

      // Redirect to the profile page
      navigate('/profile', { replace: true });
    } else {
      // Redirect to login if no token is present
      navigate('/login');
    }
  }, [location.search, navigate]);

  return <div>Authenticating...</div>;
};

export default AuthCallback;
