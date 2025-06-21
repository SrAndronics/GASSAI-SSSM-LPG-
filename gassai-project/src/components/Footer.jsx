import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section footer-logo-section">
          <img src="/src/assets/gassai_logo_icon.png" alt="Gassai Logo" className="footer-logo" />
          <h3 className="footer-title">SSSM LPG House</h3>
          <div className="footer-social-icons">
            <a href="#" className="social-icon">F</a>
          </div>
        </div>
        <div className="footer-section footer-links-section">
          <a href="/about" className="footer-link">About Us</a>
          <a href="#" className="footer-link">Contact Us</a>
          <a href="#" className="footer-link">Customer Support</a>
        </div>
        <div className="footer-section footer-subscribe-section">
          <h4>We would love to hear from you</h4>
          <div className="subscribe-form">
            <input type="email" placeholder="Enter your email" className="subscribe-input" />
            <button className="subscribe-button">Submit</button>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 SSSM LPG House</p>
      </div>
    </footer>
  );
};

export default Footer; 