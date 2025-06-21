import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../styles/Admin.css';

const AdminSidebar = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/admin/login');
  };

  return (
    <aside className="admin-sidebar">
      <div className="admin-sidebar-header">
        {/* The logo can be added here if needed */}
      </div>
      <nav className="admin-nav">
        <NavLink to="/admin/dashboard" className="admin-nav-link"><span>🖥️</span> Overview</NavLink>
        <NavLink to="/admin/products" className="admin-nav-link"><span>📦</span> Products</NavLink>
        <NavLink to="/admin/orders" className="admin-nav-link"><span>📝</span> Order List</NavLink>
        <NavLink to="/admin/notifications" className="admin-nav-link"><span>🔔</span> Notification</NavLink>
        <NavLink to="/admin/profile" className="admin-nav-link"><span>👤</span> Profile</NavLink>
      </nav>
      <div className="admin-logout-section">
        <button onClick={handleLogout} className="admin-logout-button"><span>🚪</span> Logout</button>
      </div>
    </aside>
  );
};

export default AdminSidebar; 