import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 250]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const scrollToDestinations = () => {
    const element = document.getElementById('destinations');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden flex flex-col justify-center">
      {/* Animated Background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full min-h-screen bg-gradient-to-br from-orange-400 via-red-500 to-pink-500"
      >
        <div className="absolute inset-0 bg-black/30 w-full h-full min-h-screen" />
        <div 
          className="absolute inset-0 opacity-40 w-full h-full min-h-screen"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 flex flex-col justify-center items-center text-center text-white min-h-[70vh]"
      >
        <div className="max-w-2xl w-full mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-2xl xs:text-3xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 leading-tight"
          >
            Discover the 
            <span className="text-orange-300"> Magic </span>
            of India
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-sm xs:text-base sm:text-xl md:text-2xl mb-6 sm:mb-8 text-gray-200"
          >
            Experience the incredible diversity, rich culture, and breathtaking landscapes 
            that make India truly extraordinary
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToDestinations}
              className="bg-orange-600 hover:bg-orange-700  text-white mx-3 px-4 py-3 sm:px-8 sm:py-4 rounded-full text-sm sm:text-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2 sm:w-auto"
            >
              Explore Destinations
              <ArrowRight size={20} />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className="border-2 border-white text-white hover:bg-white mx-3 hover:text-gray-900 px-4 py-3 sm:px-8 sm:py-4 rounded-full text-sm sm:text-lg font-semibold transition-all duration-200 sm:w-auto"
            >
              Contact Us
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-white"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-2 sm:h-3 bg-white rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
