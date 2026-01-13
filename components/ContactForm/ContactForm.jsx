'use client';

import { useState } from 'react';
import { FaPhone, FaEnvelope, FaUser, FaBuilding, FaPaperPlane } from 'react-icons/fa';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    service: 'general'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Here you would typically send the form data to your backend
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitStatus({ type: 'success', message: 'Thank you! Your message has been sent successfully.' });
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        service: 'general'
      });
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Something went wrong. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className={`${styles.contact} section`}>
      <div className="container">
        <div className={styles.contactContent}>
          <div className={styles.contactInfo}>
            <h2 className="section-title">Get Your Free Licence Consultation Today</h2>
            <p className={styles.subtitle}>
              Ready to simplify your trade licence application? Contact us for expert guidance 
              and take the first step toward getting licensed with confidence.
            </p>
            
            <div className={styles.contactMethods}>
              <div className={styles.contactMethod}>
                <div className={styles.methodIcon}>
                  <FaPhone />
                </div>
                <div className={styles.methodInfo}>
                  <h3>Call Us</h3>
                  <a href="tel:+61412767129">+61412767129</a>
                </div>
              </div>
              
              <div className={styles.contactMethod}>
                <div className={styles.methodIcon}>
                  <FaEnvelope />
                </div>
                <div className={styles.methodInfo}>
                  <h3>Email Us</h3>
                  <a href="mailto:Alshams@Trade.com">Alshams@Trade.com</a>
                </div>
              </div>
            </div>
            
            <div className={styles.businessHours}>
              <h3>Business Hours</h3>
              <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
              <p>Saturday: 9:00 AM - 2:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
          
          <div className={styles.contactForm}>
            <form onSubmit={handleSubmit}>
              <div className={styles.formGrid}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">
                    <FaUser />
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Smith"
                  />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="email">
                    <FaEnvelope />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                  />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="phone">
                    <FaPhone />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="0412 345 678"
                  />
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="company">
                    <FaBuilding />
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company"
                  />
                </div>
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="service">Service Interested In *</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="general">General Inquiry</option>
                  <option value="consultation">Trade Licence Consultation</option>
                  <option value="application">Trade Licence Application</option>
                  <option value="builders">Builders Licence Application</option>
                  <option value="company">Company Registration</option>
                  <option value="compliance">Compliance Support</option>
                </select>
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="message">Your Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Tell us about your licensing needs..."
                />
              </div>
              
              {submitStatus && (
                <div className={`${styles.submitStatus} ${styles[submitStatus.type]}`}>
                  {submitStatus.message}
                </div>
              )}
              
              <button 
                type="submit" 
                className={styles.submitButton}
                disabled={isSubmitting}
              >
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                <FaPaperPlane />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}