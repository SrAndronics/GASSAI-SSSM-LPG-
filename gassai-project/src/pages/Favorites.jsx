import React from 'react';
import ProductCard from '../components/ProductCard';
import '../styles/Favorites.css';

const Favorites = ({ favoriteItems, favorites, toggleFavorite }) => {
  return (
    <div className="favorites-page">
      <h1 className="favorites-title">Favorites</h1>
      
      {favoriteItems.length > 0 ? (
        <>
          <div className="favorites-actions">
            <button className="add-all-to-cart-button">ADD ALL TO CART</button>
          </div>
          <div className="favorites-grid">
            {favoriteItems.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                favorites={favorites} 
                toggleFavorite={toggleFavorite} 
              />
            ))}
          </div>
        </>
      ) : (
        <p className="favorites-empty-message">You haven't added any favorites yet.</p>
      )}
    </div>
  );
};

export default Favorites;
