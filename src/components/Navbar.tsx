import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import BlurText from "../assets/BlurText";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/resume', label: 'Resume' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-gradient-to-b from-slate-900/95 to-slate-900/75 backdrop-blur-lg border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <BlurText
              text="Meet Savani"
              delay={150}
              animateBy="words"
              direction="top"
              className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent"
            />
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-1">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  location.pathname === link.path
                    ? 'text-white bg-purple-600/20'
                    : 'text-gray-300 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                {location.pathname === link.path && (
                  <motion.span
                    layoutId="navHighlight"
                    className="absolute inset-0 rounded-lg bg-purple-600/20"
                    initial={false}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2 rounded-lg transition-colors hover:bg-slate-800/50"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.2 }}
        className="md:hidden overflow-hidden bg-slate-800/50 backdrop-blur-lg"
      >
        <div className="px-4 py-2 space-y-1">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block px-4 py-2 text-base font-medium rounded-lg transition-colors ${
                location.pathname === link.path
                  ? 'text-white bg-purple-600/20'
                  : 'text-gray-300 hover:text-white hover:bg-slate-700/50'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;