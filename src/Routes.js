import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/home';
import LoginForm from './pages/Login/LoginForm';
import ProtectedRoute from './components/ProtectedRoute';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Public Route */}
        <Route path="/" element={<LoginForm />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<Home />} />
        </Route>

        {/* Redirect unknown routes */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
