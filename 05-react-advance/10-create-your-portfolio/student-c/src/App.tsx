import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import AITrafficSimulation from './components/AITrafficSimulation';
import ReportsSection from './components/ReportsSection';
import IntersectionReports from './components/IntersectionReports';
import EcoModeSection from './components/EcoModeSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <AITrafficSimulation />
        <ReportsSection />
        <IntersectionReports />
        <EcoModeSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;