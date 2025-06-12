import React from 'react';
import { motion } from 'framer-motion';
import { Heart, MapPin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    'Quick Links': [
      { name: 'About Us', href: '#about' },
      { name: 'Destinations', href: '#destinations' },
      { name: 'Packages', href: '#packages' },
      { name: 'Contact', href: '#contact' }
    ],
    'Popular Destinations': [
      { name: 'Delhi & Taj Mahal', href: '#' },
      { name: 'Goa', href: '#' },
      { name: 'Manali, Himachal Pradesh', href: '#' },
      { name: 'Munnar, Kerala', href: '#' }
    ]
  };

  return (
    <footer className="bg-gray-900 px-2 text-white">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold  text-orange-400 mb-4">Triplora</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Discover the incredible beauty and rich culture of India with our expertly 
              crafted travel experiences. Your journey of a lifetime awaits.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-4 h-4 text-orange-400" />
                <span className="text-sm">Malappuram, Kerala, India</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="w-4 h-4 text-orange-400" />
                <span className="text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="w-4 h-4 text-orange-400" />
                <span className="text-sm">info@indiaexplore.com</span>
              </div>
            </div>
          </motion.div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-orange-400 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col md:flex-row justify-center items-center gap-4"
        >
          <div className="text-gray-300 text-sm text-center">
            © 2025 Triplora. All rights reserved.
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
