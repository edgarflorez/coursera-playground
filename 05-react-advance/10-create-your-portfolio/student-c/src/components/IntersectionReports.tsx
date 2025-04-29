import React from 'react';
import '../styles/IntersectionReports.css';

const IntersectionReports: React.FC = () => {
  return (
    <section className="section intersection-section">
      <h2 className="section-title">Intersection <span className="accent-text">Reports</span></h2>
      <div className="intersections-grid">
        <div className="intersection-card">
          <div className="intersection-header">
            <h3>Downtown Central</h3>
            <span className="status optimal">Optimal</span>
          </div>
          <div className="intersection-body">
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-label">Wait Time</span>
                <span className="stat-value">45s</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Vehicles/hr</span>
                <span className="stat-value">980</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Congestion</span>
                <span className="stat-value">12%</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Optimization</span>
                <span className="stat-value">98%</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="intersection-card">
          <div className="intersection-header">
            <h3>North Bridge</h3>
            <span className="status attention">Attention</span>
          </div>
          <div className="intersection-body">
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-label">Wait Time</span>
                <span className="stat-value">120s</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Vehicles/hr</span>
                <span className="stat-value">1250</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Congestion</span>
                <span className="stat-value">38%</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Optimization</span>
                <span className="stat-value">72%</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="intersection-card">
          <div className="intersection-header">
            <h3>East Highway</h3>
            <span className="status optimal">Optimal</span>
          </div>
          <div className="intersection-body">
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-label">Wait Time</span>
                <span className="stat-value">35s</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Vehicles/hr</span>
                <span className="stat-value">820</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Congestion</span>
                <span className="stat-value">8%</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Optimization</span>
                <span className="stat-value">96%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntersectionReports;