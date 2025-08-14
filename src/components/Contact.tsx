import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  MessageSquareText,
  MapPin,
  Send,
  Linkedin,
  Phone,
  Clock,
  User,
  ChevronDown,
  Code,
  Palette,
  Globe,
  MessageCircle,
  FileText,
  Zap,
} from 'lucide-react';

const Contact = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const serviceOptions = [
    {
      value: 'Web Development',
      label: 'Web Development',
      icon: <Globe size={18} />,
      description: 'Full-stack web applications',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      value: 'UI/UX Design',
      label: 'UI/UX Design',
      icon: <Palette size={18} />,
      description: 'User interface & experience design',
      color: 'from-pink-500 to-rose-500',
    },
    {
      value: 'Frontend Development',
      label: 'Frontend Development',
      icon: <Code size={18} />,
      description: 'React, Vue, modern frameworks',
      color: 'from-purple-500 to-indigo-500',
    },
    {
      value: 'Freelance Consultation',
      label: 'Freelance Consultation',
      icon: <MessageCircle size={18} />,
      description: 'Technical advice & planning',
      color: 'from-green-500 to-emerald-500',
    },
    {
      value: 'Long-term Contract',
      label: 'Long-term Contract',
      icon: <FileText size={18} />,
      description: '3+ months engagement',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      value: 'Short-term Project',
      label: 'Short-term Project',
      icon: <Zap size={18} />,
      description: '1-12 weeks delivery',
      color: 'from-red-500 to-pink-500',
    },
  ];

  const handlePhoneClick = () => {
    window.location.href = 'https://wa.me/9824357565';
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:meetsavani0711@gmail.com';
  };

  const handleLinkedinClick = () => {
    window.open('https://www.linkedin.com/in/meet-savani-30088931b/', '_blank');
  };

  const handleLocationClick = () => {
    window.open('https://maps.google.com/?q=Surat,Gujarat,India', '_blank');
  };

  const handleCallClick = () => {
    window.location.href = 'tel:+919824357565';
  };

  const contactMethods = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      description: 'Send me an email',
      action: handleEmailClick,
      color: 'from-blue-500 to-cyan-500',
      detail: 'savanimeet11@gmail.com',
    },
    {
      icon: <MessageSquareText size={24} />,
      title: 'WhatsApp',
      description: 'Chat on WhatsApp',
      action: handlePhoneClick,
      color: 'from-green-500 to-emerald-500',
      detail: '+91 98243 57565',
    },
    {
      icon: <Phone size={24} />,
      title: 'Call',
      description: 'Give me a call',
      action: handleCallClick,
      color: 'from-purple-500 to-indigo-500',
      detail: '+91 98243 57565',
    },
    {
      icon: <Linkedin size={24} />,
      title: 'LinkedIn',
      description: 'Connect professionally',
      action: handleLinkedinClick,
      color: 'from-blue-600 to-blue-700',
      detail: 'meet-savani-30088931b',
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      description: 'Find me here',
      action: handleLocationClick,
      color: 'from-red-500 to-pink-500',
      detail: 'Gujarat, India',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-16 bg-gradient-to-br from-black via-slate-900 to-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-20"
        >
          <div className="relative inline-block mb-6">
            <h2 className="text-5xl font-black bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Get in Touch
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full"></div>
          </div>

          <p className="text-gray-300 max-w-3xl mx-auto text-lg font-mono leading-relaxed mb-6">
            Looking for a freelance developer? Let's discuss how I can help
            bring your project to life with modern web technologies and creative
            solutions.
          </p>

          <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-4 max-w-2xl mx-auto border border-slate-700/50">
            <p className="text-purple-400 font-medium">
              💼 Freelance Services: Click any method below for project
              discussions
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Or fill out the form for detailed project requirements and quotes
            </p>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="space-y-8"
          >
            {/* Contact Info Card */}
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-purple-500/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-purple-600/20 rounded-lg">
                  <User className="text-purple-400" size={24} />
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                  Contact Information
                </h3>
              </div>

              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={method.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    onClick={method.action}
                    whileHover={{ scale: 1.02, x: 10 }}
                    whileTap={{ scale: 0.98 }}
                    className="group cursor-pointer p-4 rounded-xl bg-slate-700/30 hover:bg-slate-700/50 transition-all duration-300 border border-slate-600/30 hover:border-purple-500/50"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        {method.icon}
                      </div>

                      <div className="flex-1">
                        <h4 className="font-semibold text-white group-hover:text-purple-400 transition-colors duration-300">
                          {method.title}
                        </h4>
                        <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                          {method.description}
                        </p>
                        <p className="text-xs text-purple-400 mt-1 font-mono">
                          {method.detail}
                        </p>
                      </div>

                      <motion.div
                        className="text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                      >
                        →
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Availability Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-purple-500/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-green-600/20 rounded-lg">
                  <Clock className="text-green-400" size={20} />
                </div>
                <h4 className="font-semibold text-green-400">
                  Available for Freelance Work and On Site Work
                </h4>
              </div>
              <p className="text-gray-300 text-sm font-mono">
                Currently accepting freelance projects and client work.
                Available for both short-term and long-term engagements.
                Response time: Usually within 24 hours.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-purple-500/30 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Send a Message
            </h3>

            <form
              className="space-y-6"
              action="https://api.web3forms.com/submit"
              method="POST"
            >
              <input
                type="hidden"
                name="access_key"
                value="91f23690-3e48-4782-bdc7-a9c1180e4c40"
              />

              <div className="grid md:grid-cols-2 gap-6">
                <motion.div whileHover={{ y: -2 }} className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300">
                    First Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                    placeholder="Meet"
                    name="First_Name"
                  />
                </motion.div>

                <motion.div whileHover={{ y: -2 }} className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                    placeholder="Savani"
                    name="Last_Name"
                  />
                </motion.div>
              </div>

              <motion.div whileHover={{ y: -2 }} className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                  placeholder="meetsavani0711@gmail.com"
                  name="Email"
                />
              </motion.div>

              <motion.div whileHover={{ y: -2 }} className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">
                  Service Type
                </label>

                {/* Custom Dropdown */}
                <div className="relative">
                  <motion.button
                    type="button"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-white flex items-center justify-between group hover:bg-slate-700/70"
                  >
                    <div className="flex items-center gap-3">
                      {selectedService ? (
                        <>
                          <div
                            className={`w-8 h-8 bg-gradient-to-r ${
                              serviceOptions.find(
                                (opt) => opt.value === selectedService
                              )?.color
                            } rounded-lg flex items-center justify-center text-white shadow-lg`}
                          >
                            {
                              serviceOptions.find(
                                (opt) => opt.value === selectedService
                              )?.icon
                            }
                          </div>
                          <div className="text-left">
                            <div className="font-medium">{selectedService}</div>
                            <div className="text-xs text-gray-400">
                              {
                                serviceOptions.find(
                                  (opt) => opt.value === selectedService
                                )?.description
                              }
                            </div>
                          </div>
                        </>
                      ) : (
                        <span className="text-gray-400">
                          Select a service type
                        </span>
                      )}
                    </div>

                    <motion.div
                      animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-purple-400 group-hover:text-purple-300"
                    >
                      <ChevronDown size={20} />
                    </motion.div>
                  </motion.button>

                  {/* Hidden input for form submission */}
                  <input
                    type="hidden"
                    name="Project_Type"
                    value={selectedService}
                  />

                  {/* Dropdown Options */}
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{
                      opacity: isDropdownOpen ? 1 : 0,
                      y: isDropdownOpen ? 0 : -10,
                      scale: isDropdownOpen ? 1 : 0.95,
                      pointerEvents: isDropdownOpen ? 'auto' : 'none',
                    }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className="absolute top-full left-0 right-0 mt-2 bg-slate-800/95 backdrop-blur-md border border-slate-700/50 rounded-xl shadow-2xl z-50 overflow-hidden"
                  >
                    <div className="p-2 space-y-1 max-h-56 overflow-y-auto custom-scrollbar">
                      {serviceOptions.map((option, index) => (
                        <motion.button
                          key={option.value}
                          type="button"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          whileHover={{ x: 5, scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => {
                            setSelectedService(option.value);
                            setIsDropdownOpen(false);
                          }}
                          className={`w-full p-3 rounded-lg text-left transition-all duration-300 group border border-transparent hover:border-purple-500/50 ${
                            selectedService === option.value
                              ? 'bg-purple-600/20 border-purple-500/50'
                              : 'hover:bg-slate-700/50'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-10 h-10 bg-gradient-to-r ${option.color} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                            >
                              {option.icon}
                            </div>
                            <div className="flex-1">
                              <div
                                className={`font-medium transition-colors duration-300 ${
                                  selectedService === option.value
                                    ? 'text-purple-400'
                                    : 'text-white group-hover:text-purple-400'
                                }`}
                              >
                                {option.label}
                              </div>
                              <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                                {option.description}
                              </div>
                            </div>
                            {selectedService === option.value && (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="w-2 h-2 bg-purple-400 rounded-full"
                              />
                            )}
                          </div>
                        </motion.button>
                      ))}

                      {/* Other option */}
                      <motion.button
                        type="button"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: serviceOptions.length * 0.05 }}
                        whileHover={{ x: 5, scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => {
                          setSelectedService('Other');
                          setIsDropdownOpen(false);
                        }}
                        className={`w-full p-3 rounded-lg text-left transition-all duration-300 group border border-transparent hover:border-purple-500/50 ${
                          selectedService === 'Other'
                            ? 'bg-purple-600/20 border-purple-500/50'
                            : 'hover:bg-slate-700/50'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-gray-500 to-gray-600 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                            <MessageCircle size={18} />
                          </div>
                          <div className="flex-1">
                            <div
                              className={`font-medium transition-colors duration-300 ${
                                selectedService === 'Other'
                                  ? 'text-purple-400'
                                  : 'text-white group-hover:text-purple-400'
                              }`}
                            >
                              Other
                            </div>
                            <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                              Custom requirements or discussion
                            </div>
                          </div>
                          {selectedService === 'Other' && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="w-2 h-2 bg-purple-400 rounded-full"
                            />
                          )}
                        </div>
                      </motion.button>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
              <motion.div whileHover={{ y: -2 }} className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">
                  Message *
                </label>
                <textarea
                  rows={6}
                  required
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400 resize-none"
                  placeholder="Describe your project requirements, timeline, budget range, and any specific needs for freelance work..."
                  name="Message"
                ></textarea>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative group"
              >
                {/* Animated background glow */}
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-xl blur opacity-0 group-hover:opacity-75 transition-all duration-500"
                  animate={{
                    background: [
                      'linear-gradient(45deg, #8b5cf6, #ec4899, #8b5cf6)',
                      'linear-gradient(45deg, #ec4899, #8b5cf6, #ec4899)',
                      'linear-gradient(45deg, #8b5cf6, #ec4899, #8b5cf6)',
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />

                {/* Floating particles effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-white rounded-full"
                      style={{
                        left: `${20 + i * 15}%`,
                        top: `${30 + (i % 2) * 40}%`,
                      }}
                      animate={{
                        y: [-10, -20, -10],
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2,
                        ease: 'easeInOut',
                      }}
                    />
                  ))}
                </div>

                <button
                  type="submit"
                  className="relative w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-4 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 font-semibold overflow-hidden"
                >
                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100"
                    animate={{
                      x: ['-100%', '100%'],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatDelay: 2,
                      ease: 'easeInOut',
                    }}
                  />

                  {/* Button content */}
                  <motion.span
                    className="relative z-10"
                    animate={{
                      color: ['#ffffff', '#f0f0f0', '#ffffff'],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    Send Message
                  </motion.span>

                  <motion.div
                    className="relative z-10"
                    animate={{
                      x: [0, 5, 0],
                      rotate: [0, 15, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    <Send
                      size={20}
                      className="group-hover:translate-x-1 transition-transform duration-300"
                    />
                  </motion.div>

                  {/* Ripple effect on hover */}
                  <motion.div
                    className="absolute inset-0 bg-white/10 rounded-xl opacity-0 group-hover:opacity-100"
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                </button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
