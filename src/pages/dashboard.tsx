// src/components/Profile.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import consts from '../config/consts';
interface User {
  displayName:string
    email:string
  }
  
const Dashboard = () => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fetchUserData = async () => {
      const urlParams = new URLSearchParams(location.search);
      const token = urlParams.get('token');

      if (token) {
        
        // Save token in local storage
        localStorage.setItem('jwt', token);
        // Remove token from URL
        navigate('/auth/success', { replace: true });
        
      }

      try {
        const jwt = localStorage.getItem('jwt');
      
        if (jwt) {
          const response = await axios.get(`${consts.API_URI}/auth/profile`, {
            headers: { Authorization: `Bearer ${jwt}` },
          });
          setUser(response.data);
        }
      } catch (error) {
        console.error("Error fetching profile data", error);
      }
    };

    fetchUserData();

    
  }, [location.search, navigate]);
  const handleLogout = () => {
    // Clear token from local storage
    localStorage.removeItem('jwt');
    // Navigate to login page
    navigate('/login');
  };

  if (!user) {
    return <div>Loading profile...</div>;
  }

  return (
    <div>
      <h2>Welcome, {user.displayName}</h2>
      <p>Email: {user.email}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
