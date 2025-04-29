import React, { useState } from 'react';
import '../styles/ContactForm.css';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    alert('Thank you for your message! We will get back to you soon.');
  };
  
  return (
    <section className="section contact-section" id="contact">
      <h2 className="section-title">Contact <span className="accent-text">Us</span></h2>
      <div className="contact-content">
        <div className="contact-info">
          <h3 className="section-subtitle">Get in Touch</h3>
          <p>Interested in implementing our Smart Traffic Management System in your city? Have questions about how it works? Fill out the form and our team will get back to you.</p>
          
          <div className="contact-details">
            <div className="contact-item">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="#00e676" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div className="contact-text">
                <h4>Phone</h4>
                <p>+20 2 0123 4567</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="#00e676" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div className="contact-text">
                <h4>Email</h4>
                <p>info@smarttraffic.com</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="#00e676" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div className="contact-text">
                <h4>Address</h4>
                <p>Tahrir Square, Cairo, Egypt</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input 
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input 
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email address"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              >
                <option value="">Select a subject</option>
                <option value="Implementation">Implementation</option>
                <option value="Consultation">Consultation</option>
                <option value="Partnership">Partnership</option>
                <option value="Support">Technical Support</option>
                <option value="Other">Other</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Enter your message"
                rows={5}
              ></textarea>
            </div>
            
            <button type="submit" className="btn submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;