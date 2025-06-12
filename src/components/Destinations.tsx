import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Star } from 'lucide-react';

const Destinations = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

const destinations = [
  {
    name: 'Munnar, Kerala',
    image: 'https://img.freepik.com/free-photo/beautiful-strawberry-garden-sunrise-doi-ang-khang-chiang-mai-thailand_335224-762.jpg?uid=R180539201&ga=GA1.1.487039513.1735102471&semt=ais_hybrid&w=740',
    description: 'Lush tea gardens, misty hills, and cool climate',
    rating: 4.9,
    price: 'From ₹5,000'
  },
  {
    name: 'Jaipur, Rajasthan',
    image: 'https://img.freepik.com/free-photo/hawa-mahal-palace-jaipur-india_53876-31311.jpg?uid=R180539201&ga=GA1.1.487039513.1735102471&semt=ais_hybrid&w=740',
    description: 'Royal palaces, vibrant bazaars, and pink city charm',
    rating: 4.8,
    price: 'From ₹10,000'
  },
  {
    name: 'Manali, Himachal Pradesh',
    image: 'https://img.freepik.com/free-photo/beautiful-village-snow-covered-mountain_181624-4248.jpg?uid=R180539201&ga=GA1.1.487039513.1735102471&semt=ais_hybrid&w=740',
    description: 'Snow-capped peaks and thrilling adventure sports',
    rating: 4.9,
    price: 'From ₹9,000'
  },
  {
    name: 'Goa',
    image: 'https://img.freepik.com/free-photo/beautiful-tropical-beach-sea_74190-6772.jpg?uid=R180539201&ga=GA1.1.487039513.1735102471&semt=ais_hybrid&w=740',
    description: 'Sun-kissed beaches, nightlife, and coastal cuisine',
    rating: 4.7,
    price: 'From ₹8,000'
  },
{
  name: 'Mysuru, Karnataka',
  image: 'https://media.istockphoto.com/id/172124032/photo/mysore-palace-at-dusk.jpg?s=612x612&w=0&k=20&c=paO74C_dVsY14IbK0RNqs0TD-lSteQy-AW5CnQFEb_4=',
  description: 'Majestic palaces, rich heritage, and vibrant festivals',
  rating: 4.7,
  price: 'From ₹7,500'
}
,
  {
    name: 'Delhi & Taj Mahal',
    image: 'https://img.freepik.com/premium-photo/taj-mahal-unesco-world-heritage-site-most-famous-monument-india-agra-city-uttar-pradesh-state_261932-6841.jpg?uid=R180539201&ga=GA1.1.487039513.1735102471&semt=ais_hybrid&w=740',
    description: 'Iconic monuments, rich history, and cultural fusion',
    rating: 4.8,
    price: 'From ₹11,000'
  }
];


  return (
    <section id="destinations" className="py-12 px-2 sm:py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Top Destinations
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-orange-600 mx-auto mb-8"></div>
          <p className="text-base sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
           Discover the most loved travel spots handpicked by Triplora – where every journey becomes a story.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {destinations.map((destination, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <motion.img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-40 sm:h-56 md:h-64 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent group-hover:from-black/70 transition-all duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center gap-1 mb-2">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-semibold">{destination.rating}</span>
                  </div>
                  <div className="text-lg font-bold">{destination.price}</div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                  {destination.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {destination.description}
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={scrollToContact}
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-semibold transition-colors duration-200"
                >
                  Explore Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
