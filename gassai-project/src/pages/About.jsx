import React from 'react';
import '../App.css';

export default function About() {
  return (
    <section className="page-section">
      <h1 className="about-title">
        Who <span className="about-highlight">We</span> Are
      </h1>
      <p className="about-text">
        SSSM GAS is a small business that resells and distributes LPG to local households and businesses, offering safe, reliable products and friendly refilling services.
      </p>
      <a href="#" className="about-link">Read more</a>
    </section>
  );
}
