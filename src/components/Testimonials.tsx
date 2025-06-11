
import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'New York, USA',
      rating: 5,
      text: 'IndiaExplore made our dream trip to India absolutely magical. Every detail was perfectly planned, and our guide was incredibly knowledgeable. The Kerala backwaters were breathtaking!',
      image: 'data:image/jpeg;base64,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'
    },
    {
      name: 'Michael Chen',
      location: 'London, UK',
      rating: 5,
      text: 'The Golden Triangle tour exceeded all expectations. From the Taj Mahal at sunrise to the palaces of Jaipur, every moment was unforgettable. Highly recommend!',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'Emma Wilson',
      location: 'Sydney, Australia',
      rating: 5,
      text: 'The Himalayan adventure was life-changing. The landscapes were stunning, and the cultural experiences were authentic. Perfect balance of adventure and comfort.',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      name: 'David Kumar',
      location: 'Toronto, Canada',
      rating: 5,
      text: 'As someone of Indian heritage, I was looking for an authentic experience for my family. IndiaExplore delivered beyond our expectations with genuine cultural immersion.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            What Our Travelers Say
          </h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Real experiences from real travelers who've discovered the magic of India with us
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12"
            >
              <div className="flex items-center justify-center mb-8">
                <Quote className="w-12 h-12 text-orange-600 dark:text-orange-400" />
              </div>

              <blockquote className="text-lg md:text-xl text-gray-700 dark:text-gray-300 text-center mb-8 leading-relaxed">
                "{testimonials[currentIndex].text}"
              </blockquote>

              <div className="flex items-center justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              <div className="flex items-center justify-center">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full mr-4 object-cover"
                />
                <div className="text-center">
                  <div className="font-bold text-gray-900 dark:text-white text-lg">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">
                    {testimonials[currentIndex].location}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors duration-200"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors duration-200"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentIndex
                    ? 'bg-orange-600 dark:bg-orange-400'
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
