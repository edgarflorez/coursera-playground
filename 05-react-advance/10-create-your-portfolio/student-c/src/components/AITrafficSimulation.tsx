import React from 'react';
import '../styles/AITrafficSimulation.css';

const AITrafficSimulation: React.FC = () => {
  return (
    <section className="section ai-simulation-section">
      <h2 className="section-title">AI Traffic <span className="accent-text">Simulation</span></h2>
      <div className="simulation-content">
        <div className="simulation-visual">
          <div className="simulation-placeholder">
            <div className="sim-grid">
              {Array(16).fill(0).map((_, i) => (
                <div key={i} className="sim-cell"></div>
              ))}
            </div>
            <div className="traffic-lights">
              <div className="traffic-light"></div>
              <div className="traffic-light"></div>
              <div className="traffic-light"></div>
              <div className="traffic-light"></div>
            </div>
            <div className="vehicles">
              {Array(8).fill(0).map((_, i) => (
                <div key={i} className={`vehicle vehicle-${i+1}`}></div>
              ))}
            </div>
          </div>
        </div>
        <div className="simulation-info">
          <h3 className="section-subtitle">How Our AI Manages Traffic</h3>
          <p>Our advanced AI simulation predicts traffic patterns and optimizes signal timings in real-time, reducing wait times by up to 40%.</p>
          <div className="sim-stats">
            <div className="stat">
              <span className="stat-value">-35%</span>
              <span className="stat-label">Average Wait Time</span>
            </div>
            <div className="stat">
              <span className="stat-value">+28%</span>
              <span className="stat-label">Traffic Flow</span>
            </div>
            <div className="stat">
              <span className="stat-value">-42%</span>
              <span className="stat-label">CO2 Emissions</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AITrafficSimulation;