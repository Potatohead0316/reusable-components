import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import LoginForm from './pages/Login/LoginForm';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<LoginForm />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
