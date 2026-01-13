import ServicesSection from '@/components/ServicesSection/ServicesSection';
import ContactForm from '@/components/ContactForm/ContactForm';
import Testimonials from '@/components/Testimonials/Testimonials';

export default function ServicesPage() {
  const additionalServices = [
    {
      title: 'Company Registration',
      description: 'We handle your business registration with ASIC, ensuring proper structure for licensing requirements.',
      features: ['ASIC Registration', 'Business Structure Advice', 'ABN/TFN Setup']
    },
    {
      title: 'Compliance Support',
      description: 'Ongoing support to maintain your licence compliance with NSW Fair Trading regulations.',
      features: ['Renewal Management', 'Compliance Audits', 'Regulation Updates']
    },
    {
      title: 'Licence Upgrades',
      description: 'Upgrade your existing licence to higher categories or add new trade specialisations.',
      features: ['Category Upgrades', 'Additional Trade Endorsements', 'Supervisor Certifications']
    }
  ];

  return (
    <>
      <div className="hero-section" style={{
        background: 'linear-gradient(135deg, var(--primary-color) 0%, #1a5f8a 100%)',
        color: 'white',
        padding: '100px 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>Our Services</h1>
          <p style={{ fontSize: '20px', maxWidth: '800px', margin: '0 auto' }}>
            Comprehensive trade licence solutions tailored to your specific needs and goals.
          </p>
        </div>
      </div>
      
      <ServicesSection />
      
      <section className="section" style={{ backgroundColor: 'var(--light-bg)' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '60px' }}>
            <p style={{
              color: 'var(--primary-color)',
              fontWeight: '600',
              fontSize: '14px',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              marginBottom: '15px'
            }}>
              ADDITIONAL SERVICES
            </p>
            <h2 className="section-title">Extended Support For Your Business</h2>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '30px'
          }}>
            {additionalServices.map((service, index) => (
              <div key={index} style={{
                backgroundColor: 'white',
                padding: '40px 30px',
                borderRadius: '10px',
                boxShadow: 'var(--shadow)'
              }}>
                <h3 style={{
                  fontSize: '24px',
                  color: 'var(--dark-color)',
                  marginBottom: '20px',
                  fontWeight: '600'
                }}>
                  {service.title}
                </h3>
                <p style={{
                  color: 'var(--text-color)',
                  lineHeight: '1.6',
                  marginBottom: '25px'
                }}>
                  {service.description}
                </p>
                <ul style={{
                  listStyle: 'none',
                  padding: '0'
                }}>
                  {service.features.map((feature, idx) => (
                    <li key={idx} style={{
                      padding: '8px 0',
                      color: 'var(--text-color)',
                      borderBottom: '1px solid var(--border-color)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px'
                    }}>
                      <span style={{
                        color: 'var(--primary-color)',
                        fontWeight: 'bold'
                      }}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Testimonials />
      <ContactForm />
    </>
  );
}