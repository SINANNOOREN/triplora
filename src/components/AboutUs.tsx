import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const AboutUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-12 sm:py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Triplora
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-orange-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Rooted in India, Inspired by Adventure
            </h3>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Founded with a deep love for India's incredible diversity, IndiaExplore has been 
              crafting unforgettable journeys for over a decade. We believe that travel is not 
              just about visiting places—it's about connecting with cultures, creating memories, 
              and discovering the extraordinary in the everyday.
            </p>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              From the snow-capped Himalayas to the sun-kissed beaches of Goa, from the bustling 
              streets of Mumbai to the serene backwaters of Kerala, we help you experience the 
              real India through authentic, personalized travel experiences.
            </p>
            
            <div className="grid grid-cols-3 gap-4 sm:gap-6">
              {[
                { number: '10+', label: 'Years Experience' },
                { number: '50k+', label: 'Happy Travelers' },
                { number: '200+', label: 'Destinations' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold text-orange-600 dark:text-orange-400">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Indian Architecture"
                className="w-full h-56 sm:h-80 md:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-600/20 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 max-w-xs"
            >
              <div className="text-orange-600 hidden sm:block dark:text-orange-400 text-2xl font-bold mb-2">
                Our Mission
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                To showcase India's beauty while supporting local communities and sustainable tourism.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
