// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Register from './pages/register';
import Home from './pages/Home';
import Dashboard from './pages/dashboard';
import PrivateRoute from './auth/PrivateRoute';
import PublicRoute from './auth/PublicRoute';
import AuthCallback from './pages/AuthCallback';

const App = () => {
  return (
    
    <Router>
      {/* Buttons appear only on the root route */}
      <Routes>
      <Route element={<PublicRoute />}>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route element={<PublicRoute />}>
          <Route path="/register" element={<Register/>} />
        </Route>
        <Route element={<PublicRoute />}>
          <Route path="/" element={<Home />} />
        </Route>

        {/* Auth callback route */}
        <Route path="/auth/callback" element={<AuthCallback />} />

        {/* Private routes */}
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Dashboard />} />
        </Route>

      </Routes>
    </Router>
   
  );
};




export default App;


