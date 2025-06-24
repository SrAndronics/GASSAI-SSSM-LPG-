import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/AuthForm.css';

const Login = () => {
  return (
    <div className="auth-page">
      <div className="auth-form-container">
        <h1 className="auth-title">Login</h1>
        <form>
          <div className="auth-input-group">
            <input type="text" placeholder="Username / Mobile number" className="auth-input" />
          </div>
          <div className="auth-input-group">
            <input type="password" placeholder="Password" className="auth-input" />
            <Link to="/forgot-password" className="forgot-password-link">Forgot Password</Link>
          </div>
          <button type="submit" className="auth-button">Login</button>
        </form>
        <div className="separator">OR</div>
        <button className="google-button">
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google icon" className="google-icon" />
          <span>Continue with Google</span>
        </button>
        <p className="auth-switch-link">
          New to SSSM LPG? <  Link to="/signup" className="signup-link">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
