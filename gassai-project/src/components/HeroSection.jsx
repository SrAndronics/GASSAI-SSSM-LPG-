import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HeroSection.css'; // Create this for styling

export default function HeroSection() {
  return (
    <section className="hero" style={{ backgroundImage: "url('/path/to/gas-bg.jpg')" }}>
      <div className="hero-content">
        <h1>
          MAKE YOUR COOKING <br />
          EFFORTLESS WITH <br />
          <span className="sssm">SSSM</span> <span className="gas">GAS</span>
        </h1>
        <Link to="/products" className="order-btn">ORDER NOW</Link>
      </div>
    </section>
  );
}