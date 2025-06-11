
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Shield, Heart, Globe, Award, Users, Phone } from 'lucide-react';

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    {
      icon: Shield,
      title: 'Safe & Secure',
      description: 'Your safety is our priority with comprehensive insurance and 24/7 support'
    },
    {
      icon: Heart,
      title: 'Passionate Guides',
      description: 'Local experts who love sharing the stories and secrets of their homeland'
    },
    {
      icon: Globe,
      title: 'Authentic Experiences',
      description: 'Real cultural immersion beyond typical tourist attractions'
    },
    {
      icon: Award,
      title: 'Award Winning',
      description: 'Recognized excellence in sustainable and responsible tourism'
    },
    {
      icon: Users,
      title: 'Small Groups',
      description: 'Intimate group sizes for personalized attention and flexibility'
    },
    {
      icon: Phone,
      title: '24/7 Support',
      description: 'Round-the-clock assistance for peace of mind during your journey'
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Why Choose Triplora
          </h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We don't just plan trips, we craft extraordinary journeys that create 
            lasting memories and meaningful connections
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-20 h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300"
              >
                <feature.icon className="w-10 h-10 text-white" />
              </motion.div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-orange-400 to-red-500 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Start Your Indian Adventure?
            </h3>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Join thousands of happy travelers who've discovered the magic of India with us
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-orange-600 px-4 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Plan Your Journey
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
