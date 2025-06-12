
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
    question: "Why should I choose Triplora for my trip?",
    answer: "At Triplora, we craft personalized travel experiences with expert planning, verified stays, local guides, and 24/7 support — ensuring your journey is smooth, safe, and unforgettable."
  },
  {
    question: "Can I customize my travel itinerary with Triplora?",
    answer: "Yes! We specialize in custom travel planning. Whether you're looking for a romantic escape, cultural tour, or adventure trip, our team tailors every detail to your preferences."
  },
  {
    question: "What destinations does Triplora cover?",
    answer: "We offer curated travel packages across India — from Kerala's backwaters and Goa’s beaches to Rajasthan's forts and the Himalayas’ serenity. International packages are also available on request."
  },
  {
    question: "Is Triplora suitable for family or group travel?",
    answer: "Absolutely! We offer packages for families, honeymooners, solo travelers, and groups — including guided tours, safe accommodations, and activities suitable for all age groups."
  },
  {
    question: "What’s included in Triplora’s travel packages?",
    answer: "Our packages usually include accommodation, transportation, local guides, daily breakfast, entry tickets to attractions, and round-the-clock support. Optional add-ons like flights and activities can be arranged."
  },
  {
    question: "How do I book a trip with Triplora?",
    answer: "Booking is simple — contact us via our website or WhatsApp, and our travel consultant will guide you through destination selection, itinerary planning, and payment options."
  },
  {
    question: "Is it safe to travel with Triplora?",
    answer: "Safety is our priority. We partner with trusted local vendors, offer secure transportation, and provide emergency support lines to ensure a worry-free travel experience."
  },
  {
    question: "Do you offer travel assistance like visas or insurance?",
    answer: "Yes, we assist with visa applications and guide you in choosing reliable travel insurance through our partner providers. We’re here to support you every step of the way."
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
