import Link from 'next/link';
import Image from 'next/image';
import { FaPhone } from 'react-icons/fa';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <p className={styles.subtitle}>Expert Trade Licence Consulting in NSW</p>
            <h1 className={styles.title}>
              Sick of Fair Trading Headaches? Get Your NSW Trade Licence Faster and easier with expert support
            </h1>
            <p className={styles.description}>
              We've got your back if the forms, fine print, and Fair Trading rules are doing your head in. 
              Book a free consultation or give Daniel a call below — he's helped <strong>500+ tradies</strong> 
              through the licensing process with a <strong>98% approval rate.</strong> Skip the stress, 
              avoid rejections, and finally get licensed with confidence.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="#contact" className="btn">
                Get A Free Licence Consultation
              </Link>
              <a href="tel:+61412767129" className={`${styles.callButton} btn btn-secondary`}>
                <FaPhone />
                Call Now
              </a>
            </div>
          </div>
          <div className={styles.heroImage}>
            <Image 
              src="/hero.png" 
              alt="Trade Licence Expert Consultation"
              width={600}
              height={400}
              priority
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
}