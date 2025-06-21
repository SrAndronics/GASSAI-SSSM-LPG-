import React from 'react';
import '../styles/ProductCard.css';

const ProductCard = ({ product, favorites, toggleFavorite, addToCart }) => {
  const isFavorite = favorites.includes(product.id);

  return (
    <div className="product-card">
      <div className="product-image-container">
        {product.image ? (
          <img src={product.image} alt={product.name} className="product-image" />
        ) : (
          <div className="product-image-placeholder">No Image</div>
        )}
        <button
          className={`favorite-button ${isFavorite ? 'favorited' : ''}`}
          onClick={() => toggleFavorite(product.id)}
        >
          {isFavorite ? '♥' : '♡'}
        </button>
      </div>
      <h3 className="product-name">{product.name}</h3>
      <p className="product-price">₱{product.price}</p>
      <button className="add-to-cart-button" onClick={() => addToCart(product.id)}>Add to cart</button>
    </div>
  );
};

export default ProductCard; 