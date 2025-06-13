import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlignRight, CircleX, Sun, Moon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NavigationProps {
  isDark?: boolean;
  toggleTheme?: () => void;
}

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#destinations', label: 'Destinations' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
];

const Navigation: React.FC<NavigationProps> = ({ isDark, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Animation variants for the side drawer
  const drawerVariants = {
    hidden: { x: '100%', opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: 'spring', stiffness: 400, damping: 32 } },
    exit: { x: '100%', opacity: 0, transition: { duration: 0.2 } },
  };

  // Animation for the overlay
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 0.5, transition: { duration: 0.2 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full ${
        isScrolled 
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg border-b border-orange-100 dark:border-gray-800'
          : 'bg-transparent'
      }`}
      style={{ WebkitBackdropFilter: 'blur(12px)', backdropFilter: 'blur(12px)' }}
    >
      <div className="max-w-7xl mx-auto w-full px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex-shrink-0"
          >
       <a
  href="#home"
  className="flex items-center  text-2xl font-extrabold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent tracking-tight drop-shadow-sm focus:outline-none"
  onClick={() => typeof setIsMobileMenuOpen === 'function' && setIsMobileMenuOpen(false)}
>
  <img
    src="/logotr.png" // Make sure your logo is in the public folder with this name
    alt="Triplora Logo"
    className="w-10 h-10"
  />
  <span>Triplora</span>
</a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            <div className="flex items-baseline space-x-2 lg:space-x-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="text-gray-700 dark:text-gray-200 hover:text-orange-600 dark:hover:text-orange-400 px-2 lg:px-3 py-2 rounded-lg text-base font-medium transition-colors duration-200"
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
            {/* Theme Toggle */}
            {toggleTheme && (
              <motion.button
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                onClick={toggleTheme}
                className="p-2 bg-gradient-to-tr from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white rounded-full shadow-md transition-colors duration-200 ml-2"
                aria-label="Toggle theme"
              >
                <motion.div
                  initial={false}
                  animate={{ rotate: isDark ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isDark ? <Sun size={18} /> : <Moon size={18} />}
                </motion.div>
              </motion.button>
            )}
          </div>

          {/* Mobile menu button and theme toggle */}
          <div className="md:hidden flex items-center  space-x-2">
            {toggleTheme && (
              <button
                onClick={toggleTheme}
                className="p-2 bg-gradient-to-tr from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white rounded-full shadow-md transition-colors duration-200"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            )}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="text-gray-700 dark:text-gray-200 hover:text-orange-600 dark:hover:text-orange-400 p-2 rounded-lg border border-transparent hover:border-orange-200 dark:hover:border-orange-400 transition"
              aria-label="Open menu"
            >
              <AlignRight size={24} />
            </button>
          </div>
          </div>
        </div>

      {/* Mobile Side Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              key="overlay"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={overlayVariants}
              className="fixed inset-0 z-40 bg-white h-screen  dark:bg-gray-900"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            {/* Drawer */}
            <motion.aside
              key="drawer"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={drawerVariants}
              className="fixed top-0 right-0 z-50 w-4/5 max-w-xs h-screen dark:bg-gray-900/95 shadow-2xl rounded-l-3xl border-l border-orange-100 dark:border-gray-800 flex flex-col p-6 backdrop-blur-xl"
              style={{ WebkitBackdropFilter: 'blur(60px)', backdropFilter: 'blur(60px)' }}
            >
              <div className="flex items-center justify-between mb-8">
                <a
                  href="#home"
                  className="text-xl font-extrabold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent tracking-tight focus:outline-none"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Triplora
                </a>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-full hover:bg-orange-100 dark:hover:bg-gray-800 transition"
                  aria-label="Close menu"
                >
                  <CircleX size={24} />
                </button>
              </div>
              <nav className="flex flex-col gap-2 pb-24 mt-2">
                {navItems.map((item, idx) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    initial={{ x: 40, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 * idx }}
                    className="block px-4 py-3 rounded-xl text-lg font-semibold text-gray-800 dark:text-gray-100 hover:bg-orange-100 dark:hover:bg-gray-800 hover:text-orange-600 dark:hover:text-orange-400 transition-colors duration-200 shadow-sm"
                  >
                    {item.label}
                  </motion.a>
                ))}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
