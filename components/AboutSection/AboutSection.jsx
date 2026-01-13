import Link from 'next/link';
import Image from 'next/image';
import styles from './AboutSection.module.css';

export default function AboutSection() {
  return (
    <section className={`${styles.about} section`}>
      <div className="container">
        <div className={styles.aboutContent}>
          <div className={styles.aboutImage}>
            <Image 
              src="/fs.jpeg" 
              alt="Daniel Pleaner - Trade Licence Expert"
              width={989}
              height={990}
              className={styles.image}
            />
          </div>
          <div className={styles.aboutText}>
            <p className={styles.sectionLabel}>ABOUT US</p>
            <h2 className="section-title">Expert Trade Licence Solution For NSW Contractors</h2>
            <div className={styles.description}>
              <p>
                Navigating NSW's trade licensing process can be complex, but you don't have to do it alone. 
                At Trade Licence Solutions NSW, we provide expert end-to-end support for contractors, 
                builders and tradespeople across all license types-from initial applications to renewals and compliance. 
                Our personalised approach cuts through the red tape of Fair Trading requirements, saving you time 
                and minimizing costly errors.
              </p>
              <p>
                Whether you need a new builders licence, company registration or specialist trade certification, 
                our deep understanding of NSW regulations ensures your application is completed accurately and efficiently. 
                With one-on-one guidance tailored to your specific trade, we help you obtain The right credentials faster 
                so you can focus on growing your business with confidence.
              </p>
            </div>
            <Link href="/contact-us" className="btn">
              Get A Free Licence Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}