
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, Clock, Users, Star } from 'lucide-react';

const Packages = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const packages = [
    {
      name: 'Golden Triangle',
      duration: '7 Days',
      groupSize: '2-15 People',
      rating: 4.9,
      price: '₹35,000',
      originalPrice: '₹45,000',
      image: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      features: [
        'Delhi - Agra - Jaipur Tour',
        'Taj Mahal Sunrise Visit',
        'Luxury Accommodation',
        'Professional Guide',
        'All Meals Included'
      ],
      popular: false
    },
    {
      name: 'Kerala Paradise',
      duration: '10 Days',
      groupSize: '2-12 People',
      rating: 4.9,
      price: '₹55,000',
      originalPrice: '₹70,000',
      image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      features: [
        'Backwater Houseboat Stay',
        'Munnar Hill Station',
        'Spice Plantation Tour',
        'Ayurveda Spa Sessions',
        'Cultural Performances'
      ],
      popular: true
    },
    {
      name: 'Himalayan Adventure',
      duration: '14 Days',
      groupSize: '4-8 People',
      rating: 4.8,
      price: '₹75,000',
      originalPrice: '₹95,000',
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      features: [
        'Manali - Leh - Ladakh',
        'High Altitude Trekking',
        'Monastery Visits',
        'Mountain Photography',
        'Adventure Activities'
      ],
      popular: false
    }
  ];

  return (
    <section id="packages" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Travel Packages
          </h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Carefully crafted packages that combine the best of India's culture, 
            nature, and adventure
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ${
                pkg.popular ? 'ring-2 ring-orange-600 scale-105' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="relative">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-semibold">{pkg.rating}</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {pkg.name}
                </h3>

                <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300 mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{pkg.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">{pkg.groupSize}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-3xl font-bold text-orange-600 dark:text-orange-400">
                      {pkg.price}
                    </span>
                    <span className="text-lg text-gray-500 line-through">
                      {pkg.originalPrice}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Per person</p>
                </div>

                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 rounded-lg font-semibold transition-colors duration-200 ${
                    pkg.popular
                      ? 'bg-orange-600 hover:bg-orange-700 text-white'
                      : 'border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white dark:text-orange-400 dark:border-orange-400 dark:hover:bg-orange-400 dark:hover:text-gray-900'
                  }`}
                >
                  Book Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
