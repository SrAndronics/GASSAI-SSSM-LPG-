import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserLayout from './components/UserLayout';
import AdminLayout from './components/AdminLayout';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Favorites from './pages/Favorites';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Cart from './pages/Cart';
import Notification from './pages/Notification';
import AdminDashboard from './pages/admin/Dashboard';
import ManageProducts from './pages/admin/ManageProducts';
import ManageOrders from './pages/admin/ManageOrders';
import ManageUsers from './pages/admin/ManageUsers';
import AdminLogin from './pages/admin/AdminLogin';
import AdminProfile from './pages/admin/AdminProfile';
import './App.css';
import productsData from './data/productsData';

function App() {
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]); // Initialize with an empty array
  const [isAdmin, setIsAdmin] = useState(false); // Assume not logged in initially

  const handleAdminLogin = () => setIsAdmin(true);
  const handleAdminLogout = () => setIsAdmin(false);

  const toggleFavorite = (productId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(productId)
        ? prevFavorites.filter((id) => id !== productId)
        : [...prevFavorites, productId]
    );
  };

  const addToCart = (productId) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(item => item.id === productId);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { id: productId, quantity: 1 }];
    });
  };

  const updateCartQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      // Remove item if quantity is 0 or less
      setCart((prevCart) => prevCart.filter(item => item.id !== productId));
    } else {
      setCart((prevCart) =>
        prevCart.map(item =>
          item.id === productId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== productId));
  };

  const favoritedProducts = productsData.filter(p => favorites.includes(p.id));

  return (
    <Router>
      <Routes>
        {/* User-facing routes - unprotected */}
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route
            path="products"
            element={<Products favorites={favorites} toggleFavorite={toggleFavorite} addToCart={addToCart} />}
          />
          <Route path="about" element={<About />} />
          <Route
            path="favorites"
            element={<Favorites favoriteItems={favoritedProducts} favorites={favorites} toggleFavorite={toggleFavorite} />}
          />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route
            path="cart"
            element={<Cart cartItems={cart} updateCartQuantity={updateCartQuantity} removeFromCart={removeFromCart} />}
          />
          <Route path="notifications" element={<Notification />} />
        </Route>
        
        {/* Admin Login Route - unprotected */}
        <Route path="/admin/login" element={<AdminLogin onLogin={handleAdminLogin} />} />

        {/* Protected Admin routes */}
        <Route path="/admin" element={<AdminLayout isAdmin={isAdmin} onLogout={handleAdminLogout} />}>
          <Route index element={<AdminDashboard />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="products" element={<ManageProducts />} />
          <Route path="orders" element={<ManageOrders />} />
          <Route path="notifications" element={<Notification />} />
          <Route path="profile" element={<AdminProfile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;