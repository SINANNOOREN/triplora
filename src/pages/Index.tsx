import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  const [loading, setLoading] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-white dark:bg-gray-900"
          >
            <motion.img
              src="/logotr.png"
              alt="Triplora Logo"
              className="w-24 h-24 drop-shadow-2xl"
              initial={{ scale: 0.8, rotate: 0, filter: 'drop-shadow(0 0 0px #fb923c)' }}
              animate={{
                scale: [0.8, 1.1, 1],
                rotate: [0, 360],
                filter: [
                  'drop-shadow(0 0 0px #fb923c)',
                  'drop-shadow(0 0 40px #fb923c88)',
                  'drop-shadow(0 0 0px #fb923c)'
                ]
              }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            />
          </motion.div>
        )}
      </AnimatePresence>
      {!loading && (
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
      )}
    </>
  );
};

export default Index;
