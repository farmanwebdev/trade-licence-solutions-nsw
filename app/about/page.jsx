import AboutSection from '@/components/AboutSection/AboutSection';
import Features from '@/components/Features/Features';
import Testimonials from '@/components/Testimonials/Testimonials';
import ContactForm from '@/components/ContactForm/ContactForm';

export default function AboutPage() {
  return (
    <>
      <div className="hero-section" style={{
        background: 'linear-gradient(135deg, var(--primary-color) 0%, #1a5f8a 100%)',
        color: 'white',
        padding: '100px 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>About Trade Licence Solutions NSW</h1>
          <p style={{ fontSize: '20px', maxWidth: '800px', margin: '0 auto' }}>
            We're dedicated to simplifying the complex world of NSW trade licensing for contractors, 
            builders, and tradespeople across the state.
          </p>
        </div>
      </div>
      
      <AboutSection />
      <Features />
      <Testimonials />
      <ContactForm />
    </>
  );
}