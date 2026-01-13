'use client';

import { useState, useEffect } from 'react';
import styles from './Stats.module.css';

export default function Stats() {
  const [counters, setCounters] = useState({
    experience: 0,
    success: 0,
    licenses: 0,
    satisfaction: 0
  });

  const targetCounters = {
    experience: 5,
    success: 98,
    licenses: 500,
    satisfaction: 100
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;

    const animateCounters = () => {
      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;

        setCounters({
          experience: Math.min(Math.floor(progress * targetCounters.experience), targetCounters.experience),
          success: Math.min(Math.floor(progress * targetCounters.success), targetCounters.success),
          licenses: Math.min(Math.floor(progress * targetCounters.licenses), targetCounters.licenses),
          satisfaction: Math.min(Math.floor(progress * targetCounters.satisfaction), targetCounters.satisfaction)
        });

        if (step >= steps) {
          clearInterval(timer);
        }
      }, interval);

      return () => clearInterval(timer);
    };

    // Start animation when component mounts
    const timer = setTimeout(animateCounters, 500);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { 
      id: 1, 
      value: counters.experience, 
      suffix: '+', 
      label: 'Years of Experience' 
    },
    { 
      id: 2, 
      value: counters.success, 
      suffix: '%', 
      label: 'First Time Success Rate' 
    },
    { 
      id: 3, 
      value: counters.licenses, 
      suffix: '+', 
      label: 'Licences Attained' 
    },
    { 
      id: 4, 
      value: counters.satisfaction, 
      suffix: '%', 
      label: 'Satisfaction Guarantee' 
    },
  ];

  return (
    <section className={`${styles.stats} section`}>
      <div className="container">
        <div className={styles.statsGrid}>
          {stats.map((stat) => (
            <div key={stat.id} className={styles.statItem}>
              <div className={styles.statNumber}>
                {stat.value}
                <span className={styles.statSuffix}>{stat.suffix}</span>
              </div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}