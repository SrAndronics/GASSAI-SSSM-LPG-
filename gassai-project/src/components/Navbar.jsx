import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css'; // Create this for styling
import gassaiLogo from '../assets/gassai_logo.png';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <NavLink to="/">
          <img src={gassaiLogo} alt="GASSAI Logo" className="navbar-logo" />
        </NavLink>
      </div>
      <div className="navbar-center">
        <ul className="nav-links">
          <li>
            <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/products" className={({ isActive }) => isActive ? 'active' : ''}>Products</NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink>
          </li>
          <li>
            <NavLink to="/favorites" className={({ isActive }) => isActive ? 'active' : ''}>Favorites</NavLink>
          </li>
        </ul>
        <div className="nav-actions">
          <div className="search-container">
            <span className="search-icon">🔍</span>
            <input type="text" placeholder="Search" className="search" />
          </div>
          <span className="icon">🛒</span>
          <span className="icon">🔔</span>
          <span className="icon">👤</span>
        </div>
      </div>
    </nav>
  );
}