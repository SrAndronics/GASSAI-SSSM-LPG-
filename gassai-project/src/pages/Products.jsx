import React, { useState } from 'react';
import productsData from '../data/productsData';
import ProductCard from '../components/ProductCard';
import '../styles/Products.css';

const Products = ({ favorites, toggleFavorite, addToCart }) => {
  const [products, setProducts] = useState(productsData);
  const [activeSort, setActiveSort] = useState('Latest');

  const categories = [
    { title: 'Fuel Products', items: ['LPG Gas Cylinders', 'LPG Refills'] },
    { title: 'Cooking Equipment', items: ['Gas Burners', 'Stove Kits'] },
    { title: 'Accessories & Parts', items: ['Regulators', 'Hoses', 'Valves', 'Connectors'] },
    { title: 'Appliances', items: ['Single/Double Burner Stoves', 'Portable Cooking Units'] },
    { title: 'Safety Equipment', items: ['Gas Leak Detectors', 'Safety Valves'] },
  ];

  return (
    <div className="products-page">
      <aside className="filter-sidebar">
        <h2 className="products-count">Products({products.length})</h2>
        <div className="filter-section">
          <h3>By Category</h3>
          {categories.map((category) => (
            <div key={category.title} className="category-group">
              <h4>{category.title}</h4>
              {category.items.map((item) => (
                <label key={item} className="filter-option">
                  <input type="checkbox" /> {item}
                </label>
              ))}
            </div>
          ))}
        </div>
      </aside>

      <main className="products-main">
        <div className="sort-bar">
          <span>Sort by:</span>
          <button 
            className={`sort-button ${activeSort === 'Latest' ? 'active' : ''}`}
            onClick={() => setActiveSort('Latest')}
          >
            Latest
          </button>
          <button 
            className={`sort-button ${activeSort === 'Best Seller' ? 'active' : ''}`}
            onClick={() => setActiveSort('Best Seller')}
          >
            Best Seller
          </button>
          <div className="sort-dropdown">
            <select>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              favorites={favorites} 
              toggleFavorite={toggleFavorite}
              addToCart={addToCart}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Products;
