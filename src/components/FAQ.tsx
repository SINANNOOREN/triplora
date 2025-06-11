
import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const faqs = [
    {
      question: "What is the best time to visit India?",
      answer: "The best time to visit India depends on the region. Generally, October to March is ideal for most parts of India with pleasant weather. For hill stations like Manali and Shimla, April to June is perfect. Kerala and Goa are great year-round destinations."
    },
    {
      question: "Do I need a visa to visit India?",
      answer: "Most foreign nationals require a visa to enter India. We offer e-visa assistance for tourists, which is valid for 30 days and can be applied online. Our team will guide you through the entire visa application process."
    },
    {
      question: "What types of accommodations do you provide?",
      answer: "We offer a range of accommodations from luxury 5-star hotels and heritage palaces to comfortable 3-star hotels and boutique properties. All our accommodations are carefully selected for quality, location, and authentic Indian hospitality."
    },
    {
      question: "Is it safe to travel in India?",
      answer: "India is generally safe for tourists when proper precautions are taken. We provide 24/7 support, experienced local guides, and ensure all our itineraries follow safe routes. We also provide safety guidelines and emergency contacts for peace of mind."
    },
    {
      question: "What is included in your travel packages?",
      answer: "Our packages typically include accommodation, daily breakfast, private transportation, professional English-speaking guides, entrance fees to monuments, and 24/7 customer support. International flights and personal expenses are usually not included."
    },
    {
      question: "Can I customize my travel itinerary?",
      answer: "Absolutely! We specialize in creating personalized travel experiences. Whether you want to add extra days, change destinations, or include specific activities, our team will work with you to create your perfect Indian adventure."
    },
    {
      question: "What should I pack for my India trip?",
      answer: "Pack comfortable, modest clothing suitable for the climate. Include sunscreen, insect repellent, any personal medications, and comfortable walking shoes. We provide a detailed packing checklist based on your specific destinations and travel dates."
    },
    {
      question: "Do you provide travel insurance?",
      answer: "We strongly recommend travel insurance and can assist you in selecting appropriate coverage. While we don't provide insurance directly, we work with trusted partners to ensure you have comprehensive protection during your journey."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-20 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Find answers to common questions about traveling to India and our services
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-4 sm:px-6 py-4 sm:py-6 text-left flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white pr-4">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-orange-600" />
                  ) : (
                    <Plus className="w-5 h-5 text-orange-600" />
                  )}
                </motion.div>
              </button>
              
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12 sm:mt-16"
        >
          <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm sm:text-base">
            Still have questions? We're here to help!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToContact}
            className="bg-orange-600 hover:bg-orange-700 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            Contact Us
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
