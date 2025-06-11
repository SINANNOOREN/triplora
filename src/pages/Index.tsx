import React, { useState } from 'react';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import Destinations from '../components/Destinations';
import FAQ from '../components/FAQ';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import WhatsAppButton from '../components/WhatsAppButton';
import ScrollToTop from '../components/ScrollToTop';

const Index = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 w-full max-w-full ${isDark ? 'dark' : ''}`}>
      <Navigation isDark={isDark} toggleTheme={toggleTheme} />
      <Hero />
      <AboutUs />
      <Destinations />
      <FAQ />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
};

export default Index;
