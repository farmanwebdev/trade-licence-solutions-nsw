import ContactForm from '@/components/ContactForm/ContactForm';

export default function ResourcesPage() {
  const resources = [
    {
      category: 'Guides',
      title: 'NSW Trade Licence Application Checklist',
      description: 'A comprehensive checklist to ensure you have all required documents before applying.',
      downloadLink: '#'
    },
    {
      category: 'Templates',
      title: 'Experience Log Template',
      description: 'Professional template to document your trade experience for licence applications.',
      downloadLink: '#'
    },
    {
      category: 'FAQs',
      title: 'Common Licensing Questions Answered',
      description: 'Answers to the most frequently asked questions about NSW trade licensing.',
      downloadLink: '#'
    },
    {
      category: 'Regulations',
      title: 'NSW Fair Trading Updates 2024',
      description: 'Latest changes to NSW licensing regulations and compliance requirements.',
      downloadLink: '#'
    },
    {
      category: 'Guides',
      title: 'Builders Licence Requirements Guide',
      description: 'Detailed guide to understanding and meeting builders licence qualifications.',
      downloadLink: '#'
    },
    {
      category: 'Tools',
      title: 'Licence Eligibility Calculator',
      description: 'Interactive tool to assess your eligibility for different trade licences.',
      downloadLink: '#'
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
          <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>Resources & Guides</h1>
          <p style={{ fontSize: '20px', maxWidth: '800px', margin: '0 auto' }}>
            Free tools, templates, and guides to help you navigate NSW trade licensing.
          </p>
        </div>
      </div>
      
      <section className="section">
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 className="section-title">Free Resources For Trade Professionals</h2>
            <p style={{
              fontSize: '18px',
              color: 'var(--text-color)',
              maxWidth: '700px',
              margin: '0 auto'
            }}>
              Download our collection of free resources to simplify your licensing journey.
            </p>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '30px'
          }}>
            {resources.map((resource, index) => (
              <div key={index} style={{
                backgroundColor: 'white',
                padding: '30px',
                borderRadius: '10px',
                boxShadow: 'var(--shadow)',
                transition: 'transform 0.3s'
              }}>
                <div style={{
                  backgroundColor: 'var(--primary-color)',
                  color: 'white',
                  padding: '5px 15px',
                  borderRadius: '20px',
                  display: 'inline-block',
                  fontSize: '12px',
                  fontWeight: '600',
                  marginBottom: '15px'
                }}>
                  {resource.category}
                </div>
                <h3 style={{
                  fontSize: '20px',
                  color: 'var(--dark-color)',
                  marginBottom: '15px',
                  fontWeight: '600'
                }}>
                  {resource.title}
                </h3>
                <p style={{
                  color: 'var(--text-color)',
                  lineHeight: '1.6',
                  marginBottom: '20px'
                }}>
                  {resource.description}
                </p>
                <a href={resource.downloadLink} style={{
                  color: 'var(--primary-color)',
                  textDecoration: 'none',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  Download Resource
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <ContactForm />
    </>
  );
}