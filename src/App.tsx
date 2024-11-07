// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Register from './pages/register';
import Home from './pages/Home';
import Dashboard from './pages/dashboard';
import ProtectedRoute from './components/ProtectedRoutes';

const App = () => {
  return (
    <Router>
      {/* Buttons appear only on the root route */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard/>} />
        </Route> */}
        <Route path="/auth/success" element={<Dashboard/>}/>
      </Routes>
    </Router>
  );
};




export default App;


