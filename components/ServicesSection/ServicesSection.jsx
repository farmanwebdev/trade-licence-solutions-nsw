import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import styles from './ServicesSection.module.css';

export default function ServicesSection() {
  const services = [
    {
      id: 1,
      title: 'Trade Licence Consultation',
      description: 'Get clarity on NSW licensing requirements with a personalised 1:1 consultation-we’ll assess your eligibility and map out your simplest path to approval.',
      link: '/services'
    },
    {
      id: 2,
      title: 'Trade Licence Application Preparation',
      description: 'From document checks to flawless submissions, we handle the paperwork so your trade license application meets every Fair Trading standard.',
      link: '/services'
    },
    {
      id: 3,
      title: 'Builders Licence Application Preparation',
      description: 'Skip the stress-our experts prepare your builders license application with precision, ensuring all experience logs and compliance details are submission-ready.',
      link: '/services'
    }
  ];

  return (
    <section className={`${styles.services} section`}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <p className={styles.sectionLabel}>COMPREHENSIVE SERVICES FOR TRADE LICENSING</p>
          <h2 className="section-title">Tailored Solutions For Every Trade Professional</h2>
        </div>
        <div className={styles.servicesGrid}>
          {services.map((service) => (
            <div key={service.id} className={styles.serviceCard}>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
              <Link href={service.link} className={styles.serviceLink}>
                <span>Learn More</span>
                <FaArrowRight />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}