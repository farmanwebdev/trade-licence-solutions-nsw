'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { FaStar } from 'react-icons/fa';
import styles from './Testimonials.module.css';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Corey W',
      role: 'Client',
      content: `Dan's assistance with obtaining my builders licence made the whole process extremely easy and straightforward- he has strong knowledge and understanding of the process and I would highly recommend him and his business.`,
      rating: 5
    },
    {
      id: 2,
      name: 'James K.',
      role: 'Client',
      content: 'Trade Licence Solutions took the stress out of my builder’s licence application. What usually takes months was sorted in weeks—no rejections, no back-and-forth. Highly recommend',
      rating: 5
    },
    {
      id: 3,
      name: 'Sarah M.',
      role: 'Client',
      content: 'As a first-time applicant, I was overwhelmed by the paperwork. Their team caught errors I’d never have spotted and got my electrician’s licence approved first go.',
      rating: 5
    },
    {
      id: 4,
      name: 'Emma L.',
      role: 'Client',
      content: 'The renewal process for my company licence was confusing, but they handled everything seamlessly. Now I can focus on my business, not bureaucracy.',
      rating: 5
    },
    {
      id: 5,
      name: 'Michael T.',
      role: 'Client',
      content: 'Honest advice and no false promises. They told me exactly what I needed to qualify for my carpentry licence and delivered results faster than I expected.',
      rating: 5
    }
  ];

  return (
    <section className={`${styles.testimonials} section`}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <p className={styles.sectionLabel}>TESTIMONIALS</p>
          <h2 className="section-title">What Our Clients Say About TLS NSW</h2>
        </div>
        
        <div className={styles.swiperContainer}>
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              }
            }}
            className={styles.swiper}
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className={styles.testimonialCard}>
                  <div className={styles.quoteIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 11H6C5.46957 11 4.96086 10.7893 4.58579 10.4142C4.21071 10.0391 4 9.53043 4 9V7C4 6.46957 4.21071 5.96086 4.58579 5.58579C4.96086 5.21071 5.46957 5 6 5H10V11ZM10 11V15C10 15.5304 9.78929 16.0391 9.41421 16.4142C9.03914 16.7893 8.53043 17 8 17M20 11H16C15.4696 11 14.9609 10.7893 14.5858 10.4142C14.2107 10.0391 14 9.53043 14 9V7C14 6.46957 14.2107 5.96086 14.5858 5.58579C14.9609 5.21071 15.4696 5 16 5H20V11ZM20 11V15C20 15.5304 19.7893 16.0391 19.4142 16.4142C19.0391 16.7893 18.5304 17 18 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  
                  <div className={styles.rating}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className={styles.star} />
                    ))}
                  </div>
                  
                  <p className={styles.content}>{testimonial.content}</p>
                  
                  <div className={styles.author}>
                    <div className={styles.authorInfo}>
                      <h4 className={styles.authorName}>{testimonial.name}</h4>
                      <p className={styles.authorRole}>{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}