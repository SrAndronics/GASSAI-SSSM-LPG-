import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/AuthForm.css';

const Signup = () => {
  return (
    <div className="auth-page">
      <div className="auth-form-container">
        <h1 className="auth-title">Sign Up</h1>
        <form>
          <div className="auth-input-group">
            <input type="text" placeholder="Full Name" className="auth-input" />
          </div>
          <div className="auth-input-group">
            <input type="text" placeholder="Mobile Number" className="auth-input" />
          </div>
          <div className="auth-input-group">
            <input type="text" placeholder="Address" className="auth-input" />
          </div>
          <div className="auth-input-group">
            <input type="password" placeholder="Password" className="auth-input" />
          </div>
          <button type="submit" className="auth-button">Sign up</button>
        </form>
        <div className="separator">OR</div>
        <button className="google-button">
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google icon" className="google-icon" />
          <span>Continue with Google</span>
        </button>
        <p className="auth-switch-link">
          Have an Account? <Link to="/login">Log In</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
