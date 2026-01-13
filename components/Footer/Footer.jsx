import Link from 'next/link';
import Image from 'next/image';
import { FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          {/* Logo and Description */}
          <div className={styles.footerSection}>
            <div className={styles.logo}>
              <Link href="/">
                <Image 
                  src="/logo.png" 
                  alt="Trade Licence Solutions NSW" 
                  width={150}
                  height={75}
                />
              </Link>
            </div>
            <p className={styles.description}>
              Expert trade licence consulting in NSW. We help contractors, builders and tradespeople 
              navigate the licensing process with confidence and achieve a 98% approval rate.
            </p>
            <div className={styles.socialIcons}>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.footerSection}>
            <h3 className={styles.sectionTitle}>Quick Links</h3>
            <ul className={styles.linksList}>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/resources">Resources</Link></li>
              <li><Link href="/contact-us">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className={styles.footerSection}>
            <h3 className={styles.sectionTitle}>Our Services</h3>
            <ul className={styles.linksList}>
              <li><Link href="/services">Trade Licence Consultation</Link></li>
              <li><Link href="/services">Trade Licence Application</Link></li>
              <li><Link href="/services">Builders Licence Application</Link></li>
              <li><Link href="/services">Company Registration</Link></li>
              <li><Link href="/services">Compliance Support</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className={styles.footerSection}>
            <h3 className={styles.sectionTitle}>Contact Info</h3>
            <ul className={styles.contactList}>
              <li>
                <FaPhone />
                <a href="tel:+61412767129">+61412767129</a>
              </li>
              <li>
                <FaEnvelope />
                <a href="mailto:Alshams@trade.com">Alshams@trade.com</a>
              </li>
              <li>
                <FaMapMarkerAlt />
                <span>Serving all of NSW, Pakistan</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className={styles.copyright}>
          <p>&copy; {currentYear} Trade Licence Solutions NSW. All rights reserved.</p>
          <p className={styles.legal}>
            <Link href="/privacy-policy">Privacy Policy</Link> | 
            <Link href="/terms">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}