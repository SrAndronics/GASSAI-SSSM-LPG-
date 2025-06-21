import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../styles/AuthForm.css';

const AdminLogin = ({ onLogin }) => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // In a real app, you'd verify credentials here.
    // For now, we'll just call the login function.
    onLogin();
    navigate('/admin/dashboard');
  };

  return (
    <div className="auth-page">
      <div className="auth-form-container">
        <h1 className="auth-title">Admin Login</h1>
        <form onSubmit={handleLogin}>
          <div className="auth-input-group">
            <input type="text" placeholder="Admin Username" className="auth-input" defaultValue="admin" />
          </div>
          <div className="auth-input-group">
            <input type="password" placeholder="Password" className="auth-input" defaultValue="password" />
          </div>
          <button type="submit" className="auth-button">Login</button>
        </form>
        <p className="auth-switch-link" style={{ marginTop: '20px' }}>
          <Link to="/">← Go back to site</Link>
        </p>
      </div>
    </div>
  );
};

export default AdminLogin; 