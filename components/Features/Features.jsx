import Image from 'next/image';
import { FaHandshake, FaBullseye, FaUsers } from 'react-icons/fa';
import styles from './Features.module.css';

export default function Features() {
  const features = [
    {
      id: 1,
      icon: <FaHandshake />,
      title: 'Licence Guidance',
      description: 'From Application to approval - we navigate NSW Fair Trading requirements so you don\'t have to.'
    },
    {
      id: 2,
      icon: <FaBullseye />,
      title: 'Affordable Solutions',
      description: 'Transparent advice to avoid hidden fees and budget surprises in your license process'
    },
    {
      id: 3,
      icon: <FaUsers />,
      title: 'Compliance Assurance',
      description: 'Stay licensed and building commission compliant with tailored advice for your business.'
    }
  ];

  return (
    <section className={`${styles.features} section`}>
      <div className="container">
        <div className={styles.featuresContent}>
          <div className={styles.featuresText}>
            <h2 className="section-title">Your Trusted Partner For NSW Trade Licensing Advice.</h2>
            <div className={styles.featureImage}>
              <Image 
                src="/logo.png" 
                alt="Contractor License"
                width={788}
                height={508}
                className={styles.image}
              />
            </div>
          </div>
          <div className={styles.featuresList}>
            {features.map((feature) => (
              <div key={feature.id} className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  {feature.icon}
                </div>
                <div className={styles.featureContent}>
                  <h3 className={styles.featureTitle}>{feature.title}</h3>
                  <p className={styles.featureDescription}>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}