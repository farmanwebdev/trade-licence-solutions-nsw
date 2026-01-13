'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaBars, FaTimes } from 'react-icons/fa';
import styles from './Header.module.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Resources', path: '/resources' },
    { name: 'Contact Us', path: '/contact-us' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className={styles.topBar}>
        <div className="container">
          <div className={styles.topBarContent}>
            <div className={styles.contactInfo}>
              <a href="tel:+61412767129" className={styles.contactItem}>
                <FaPhone />
                <span>+61412767129</span>
              </a>
              <a href="mailto:Alshams@trade.com" className={styles.contactItem}>
                <FaEnvelope />
                <span>Alshams@trade.com</span>
              </a>
            </div>
            <div className={styles.socialIcons}>
              <a href="https://www.faceboo.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a href="https://www.instagram." target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={styles.header}>
        <div className="container">
          <div className={styles.headerContent}>
            {/* Logo */}
            <div className={styles.logo}>
              <Link href="/">
                <Image 
                  src="/logo.png" 
                  alt="Trade Licence Solutions NSW" 
                  width={120}
                  height={60}
                  priority
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className={styles.desktopNav}>
              <ul className={styles.navList}>
                {menuItems.map((item) => (
                  <li key={item.name}>
                    <Link href={item.path} className={styles.navLink}>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* CTA Button */}
            <div className={styles.ctaButton}>
              <Link href="/contact-us" className="btn">
                Get A Free Licence Consultation
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className={styles.menuToggle}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className={`${styles.mobileNav} ${isMenuOpen ? styles.active : ''}`}>
            <ul className={styles.mobileNavList}>
              {menuItems.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.path} 
                    className={styles.mobileNavLink}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className={styles.mobileCta}>
              <Link href="/contact-us" className="btn" onClick={() => setIsMenuOpen(false)}>
                Get Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}