import ContactForm from '@/components/ContactForm/ContactForm';

export default function ContactPage() {
  return (
    <>
      <div className="hero-section" style={{
        background: 'linear-gradient(135deg, var(--primary-color) 0%, #1a5f8a 100%)',
        color: 'white',
        padding: '100px 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>Contact Us</h1>
          <p style={{ fontSize: '20px', maxWidth: '800px', margin: '0 auto' }}>
            Get in touch for expert guidance on your NSW trade licence application.
          </p>
        </div>
      </div>
      
      <ContactForm />
      
      <section className="section" style={{ backgroundColor: 'var(--light-bg)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '60px',
            alignItems: 'center'
          }}>
            <div>
              <h2 className="section-title">Why Choose Trade Licence Solutions NSW?</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '30px' }}>
                <div style={{ display: 'flex', gap: '15px' }}>
                  <div style={{
                    backgroundColor: 'var(--primary-color)',
                    color: 'white',
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    1
                  </div>
                  <div>
                    <h3 style={{ fontSize: '18px', color: 'var(--dark-color)', marginBottom: '5px' }}>
                      98% First-Time Approval Rate
                    </h3>
                    <p style={{ color: 'var(--text-color)' }}>
                      Our expertise ensures your application is right the first time.
                    </p>
                  </div>
                </div>
                
                <div style={{ display: 'flex', gap: '15px' }}>
                  <div style={{
                    backgroundColor: 'var(--primary-color)',
                    color: 'white',
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    2
                  </div>
                  <div>
                    <h3 style={{ fontSize: '18px', color: 'var(--dark-color)', marginBottom: '5px' }}>
                      Personalised 1-on-1 Support
                    </h3>
                    <p style={{ color: 'var(--text-color)' }}>
                      Direct access to licensing experts throughout your journey.
                    </p>
                  </div>
                </div>
                
                <div style={{ display: 'flex', gap: '15px' }}>
                  <div style={{
                    backgroundColor: 'var(--primary-color)',
                    color: 'white',
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    3
                  </div>
                  <div>
                    <h3 style={{ fontSize: '18px', color: 'var(--dark-color)', marginBottom: '5px' }}>
                      Transparent Pricing
                    </h3>
                    <p style={{ color: 'var(--text-color)' }}>
                      No hidden fees or surprises - clear costs from the start.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div style={{
              backgroundColor: 'white',
              padding: '40px',
              borderRadius: '10px',
              boxShadow: 'var(--shadow)'
            }}>
              <h3 style={{
                fontSize: '24px',
                color: 'var(--dark-color)',
                marginBottom: '20px',
                fontWeight: '600'
              }}>
                Ready to Get Started?
              </h3>
              <p style={{ color: 'var(--text-color)', marginBottom: '30px' }}>
                Call us directly to speak with Daniel and get immediate assistance with your licensing needs.
              </p>
              <a href="tel:+61412767129" style={{
                display: 'inline-block',
                backgroundColor: 'var(--primary-color)',
                color: 'white',
                padding: '15px 30px',
                borderRadius: '5px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '16px',
                transition: 'background-color 0.3s'
              }}>
                Call Now: +61412767129
              </a>
              <p style={{
                marginTop: '20px',
                color: 'var(--text-color)',
                fontSize: '14px',
                fontStyle: 'italic'
              }}>
                Available Monday to Saturday
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}