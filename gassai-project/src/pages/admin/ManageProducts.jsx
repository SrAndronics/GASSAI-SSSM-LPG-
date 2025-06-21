import React, { useState } from 'react';
import productsData from '../../data/productsData';
import '../../styles/ManageProducts.css';

const StatusBadge = ({ status }) => {
  const statusClass = status.toLowerCase().replace(' ', '-');
  return <span className={`status-badge ${statusClass}`}>{status}</span>;
};

const ManageProducts = () => {
  const [products, setProducts] = useState(productsData);

  return (
    <div className="manage-products-page">
      <div className="page-header">
        <h1>Products</h1>
        <div className="header-actions">
          <button className="filter-button">
            <span className="filter-icon"></span> Filter By
          </button>
          <select className="filter-select">
            <option>Date</option>
          </select>
          <select className="filter-select">
            <option>Product Status</option>
          </select>
          <button className="reset-filter-button">Reset Filter</button>
          <button className="add-item-button">Add New Item</button>
        </div>
      </div>

      <div className="products-table-container">
        <table className="products-table">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Category</th>
              <th>Quantity in Stock</th>
              <th>Restock Level</th>
              <th>Unit Price</th>
              <th>Last Updated</th>
              <th>Status</th>
              <th>Add Stock</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>{product.quantityInStock}</td>
                <td>{product.restockLevel}</td>
                <td>₱{product.price}</td>
                <td>{product.lastUpdated}</td>
                <td><StatusBadge status={product.status} /></td>
                <td>
                  <div className="add-stock-action">
                    <input type="number" defaultValue="0" />
                    <button>+ Add</button>
                  </div>
                </td>
                <td>
                  <div className="action-buttons">
                    <button className="edit-button">Edit</button>
                    <button className="delete-button">🗑️</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProducts; 