import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';
import '../styles/Admin.css';

const AdminLayout = ({ isAdmin, onLogout }) => {
  if (!isAdmin) {
    return <Navigate to="/admin/login" replace />;
  }
  
  return (
    <div className="admin-layout">
      <AdminSidebar onLogout={onLogout} />
      <main className="admin-main-content">
        <Outlet /> 
      </main>
    </div>
  );
};

export default AdminLayout; 