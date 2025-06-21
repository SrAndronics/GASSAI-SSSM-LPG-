import React, { useState, useEffect } from 'react';
import productsData from '../data/productsData';
import '../styles/Cart.css';

const Cart = ({ cartItems, updateCartQuantity, removeFromCart }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  // Get full product details for items in cart
  const cartProductDetails = cartItems.map(item => {
    const product = productsData.find(p => p.id === item.id);
    return { ...product, ...item };
  });

  const handleSelectItem = (id) => {
    setSelectedItems(prev =>
      prev.includes(id) ? prev.filter(itemId => itemId !== id) : [...prev, id]
    );
  };

  const calculateTotal = () => {
    return selectedItems.reduce((total, id) => {
      const item = cartProductDetails.find(p => p.id === id);
      const price = parseFloat(item.price.replace(/,/g, ''));
      return total + (price * item.quantity);
    }, 0).toFixed(2);
  };

  return (
    <div className="cart-page">
      <h1 className="cart-title">
        <span className="cart-icon">🛒</span> Cart({cartItems.length})
      </h1>

      <div className="cart-container">
        <div className="cart-header">
          <div className="header-product">Product</div>
          <div className="header-price">Price</div>
          <div className="header-quantity">Quantity</div>
          <div className="header-total">Total Price</div>
        </div>

        <div className="cart-items-list">
          {cartProductDetails.length > 0 ? (
            cartProductDetails.map(item => (
              <div key={item.id} className="cart-item">
                <div className="item-product">
                  {item.image ? (
                    <img src={item.image} alt={item.name} className="item-image" />
                  ) : (
                    <div className="item-image-placeholder"></div>
                  )}
                  <span>{item.name}</span>
                </div>
                <div className="item-price">₱{item.price}</div>
                <div className="item-quantity">
                  <button onClick={() => updateCartQuantity(item.id, item.quantity - 1)}>-</button>
                  <input type="text" value={item.quantity} readOnly />
                  <button onClick={() => updateCartQuantity(item.id, item.quantity + 1)}>+</button>
                </div>
                <div className="item-total">
                  ₱{(parseFloat(item.price.replace(/,/g, '')) * item.quantity).toFixed(2)}
                </div>
                <div className="item-actions">
                  <input
                    type="checkbox"
                    checked={selectedItems.includes(item.id)}
                    onChange={() => handleSelectItem(item.id)}
                  />
                  <button className="delete-button" onClick={() => removeFromCart(item.id)}>🗑️</button>
                </div>
              </div>
            ))
          ) : (
            <p className="cart-empty-message">Your cart is empty.</p>
          )}
        </div>
      </div>
      
      <div className="cart-summary">
        <div className="summary-selected-count">Item Select ({selectedItems.length})</div>
        <div className="summary-total">
          Total: <span>₱{calculateTotal()}</span>
        </div>
        <button className="checkout-button">Check Out</button>
      </div>
    </div>
  );
};

export default Cart;
