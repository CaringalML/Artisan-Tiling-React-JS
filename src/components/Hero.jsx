import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Transform Your Space with
          <span className="highlight"> Expert Tiling</span>
        </h1>
        <p className="hero-subtitle">
          Over 10 years of excellence in commercial, residential, and industrial tiling. Specializing in bathroom, kitchen, and outdoor tiling with premium craftsmanship.
        </p>
        <div className="hero-cta">
          <a href="#contact" className="btn btn-primary">Get a Quote</a>
          <a href="#projects" className="btn btn-secondary">View Our Work</a>
        </div>
      </div>
      <div className="hero-overlay"></div>
    </section>
  );
};

export default Hero;