import React from 'react';
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
        <button className="order-btn">ORDER NOW</button>
      </div>
    </section>
  );
}