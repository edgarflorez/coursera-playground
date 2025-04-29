import React from 'react';
import '../styles/AboutSection.css';

const AboutSection: React.FC = () => {
  return (
    <section className="section about-section" id="about">
      <h2 className="section-title">About Our <span className="accent-text">Smart Traffic</span> System</h2>
      <div className="about-content">
        <div className="about-text">
          <p>Our AI-powered smart traffic management system uses real-time data and advanced algorithms to optimize traffic flow, reduce congestion, and improve road safety.</p>
          <ul className="feature-list">
            <li>Real-time traffic monitoring and analysis</li>
            <li>Adaptive signal control systems</li>
            <li>Congestion prediction and prevention</li>
            <li>Emergency vehicle prioritization</li>
            <li>Reduced emissions and environmental impact</li>
          </ul>
        </div>
        <div className="about-image">
          <img src="https://images.pexels.com/photos/1868414/pexels-photo-1868414.jpeg" alt="Smart traffic monitoring" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;