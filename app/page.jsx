import Hero from '@/components/Hero/Hero';
import Stats from '@/components/Stats/Stats';
import Features from '@/components/Features/Features';
import AboutSection from '@/components/AboutSection/AboutSection';
import ServicesSection from '@/components/ServicesSection/ServicesSection';
import Testimonials from '@/components/Testimonials/Testimonials';
import ContactForm from '@/components/ContactForm/ContactForm';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Features />
      <AboutSection />
      <ServicesSection />
      <Testimonials />
      <ContactForm />
    </>
  );
}