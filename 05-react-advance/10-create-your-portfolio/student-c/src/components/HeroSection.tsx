import React from 'react';
import '../styles/HeroSection.css';

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section" id="home">
      <div className="hero-content">
        <h1>Smart Traffic Management System</h1>
        <p>AI-powered solutions for efficient traffic flow and reduced congestion</p>
        <div className="hero-btns">
          <a href="#reports" className="btn primary">View Reports</a>
          <a href="#about" className="btn secondary">Learn More</a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;