import React from 'react';
import '../styles/EcoModeSection.css';

const EcoModeSection: React.FC = () => {
  return (
    <section className="section eco-section" id="impact">
      <h2 className="section-title">Eco <span className="accent-text">Mode</span></h2>
      <div className="eco-content">
        <div className="eco-info">
          <h3 className="section-subtitle">Environmental Impact</h3>
          <p>Our Smart Traffic system's Eco Mode optimizes traffic flow to reduce idle times and emissions, helping cities achieve their sustainability goals.</p>
          
          <div className="eco-benefits">
            <div className="benefit">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="#00e676" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div className="benefit-content">
                <h4>Reduced CO2 Emissions</h4>
                <p>Up to 45% reduction in carbon emissions at optimized intersections.</p>
              </div>
            </div>
            
            <div className="benefit">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="#00e676" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3v18M3 12h18"></path>
                </svg>
              </div>
              <div className="benefit-content">
                <h4>Less Fuel Consumption</h4>
                <p>Average 32% decrease in fuel usage during peak hours.</p>
              </div>
            </div>
            
            <div className="benefit">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="#00e676" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                </svg>
              </div>
              <div className="benefit-content">
                <h4>Cleaner Air Quality</h4>
                <p>Noticeable improvement in air quality index around smart intersections.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="eco-visual">
          <div className="eco-stats">
            <div className="eco-meter">
              <div className="meter-circle">
                <svg viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="#333" strokeWidth="5" />
                  <circle 
                    cx="50" 
                    cy="50" 
                    r="45" 
                    fill="none" 
                    stroke="#00e676" 
                    strokeWidth="5" 
                    strokeDasharray="283" 
                    strokeDashoffset="85" 
                    className="meter-progress" 
                  />
                </svg>
                <div className="meter-value">
                  <span className="value">68</span>
                  <span className="unit">%</span>
                </div>
              </div>
              <p className="meter-label">CO2 Reduction</p>
            </div>
            <div className="eco-saving">
              <div className="saving-value">2.4M</div>
              <div className="saving-label">Tons of CO2 saved annually</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcoModeSection;