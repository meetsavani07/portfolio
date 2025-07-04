import { motion } from "framer-motion";
import { Mail, MessageSquareText, MapPin, Send, Linkedin, Phone, Clock, User } from "lucide-react";

const Contact = () => {
  const handlePhoneClick = () => {
    window.location.href = "https://wa.me/9824357565";
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:savanimeet11@gmail.com";
  };

  const handleLinkedinClick = () => {
    window.open("https://www.linkedin.com/in/meet-savani-30088931b/", "_blank");
  };
  
  const handleLocationClick = () => {
    window.open("https://maps.google.com/?q=Surat,Gujarat,India", "_blank");
  };

  const handleCallClick = () => {
    window.location.href = "tel:+919824357565";
  };

  const contactMethods = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      description: "Send me an email",
      action: handleEmailClick,
      color: "from-blue-500 to-cyan-500",
      detail: "savanimeet11@gmail.com"
    },
    {
      icon: <MessageSquareText size={24} />,
      title: "WhatsApp",
      description: "Chat on WhatsApp",
      action: handlePhoneClick,
      color: "from-green-500 to-emerald-500",
      detail: "+91 98243 57565"
    },
    {
      icon: <Phone size={24} />,
      title: "Call",
      description: "Give me a call",
      action: handleCallClick,
      color: "from-purple-500 to-indigo-500",
      detail: "+91 98243 57565"
    },
    {
      icon: <Linkedin size={24} />,
      title: "LinkedIn",
      description: "Connect professionally",
      action: handleLinkedinClick,
      color: "from-blue-600 to-blue-700",
      detail: "meet-savani-30088931b"
    },
    {
      icon: <MapPin size={24} />,
      title: "Location",
      description: "Find me here",
      action: handleLocationClick,
      color: "from-red-500 to-pink-500",
      detail: "Surat, Gujarat, India"
    }
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
            Have a project in mind? Let's discuss how we can work together to
            bring your ideas to life with modern web technologies.
          </p>
          
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-4 max-w-2xl mx-auto border border-slate-700/50">
            <p className="text-purple-400 font-medium">
              💡 Quick Contact: Click any method below for instant connection
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Or fill out the form for detailed project discussions
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
                      <div className={`w-12 h-12 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
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
                <h4 className="font-semibold text-green-400">Available for Projects</h4>
              </div>
              <p className="text-gray-300 text-sm font-mono">
                Currently accepting new projects and collaborations. 
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
                <motion.div
                  whileHover={{ y: -2 }}
                  className="space-y-2"
                >
                  <label className="block text-sm font-medium text-gray-300">
                    First Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                    placeholder="John"
                    name="First_Name"
                  />
                </motion.div>
                
                <motion.div
                  whileHover={{ y: -2 }}
                  className="space-y-2"
                >
                  <label className="block text-sm font-medium text-gray-300">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                    placeholder="Doe"
                    name="Last_Name"
                  />
                </motion.div>
              </div>
              
              <motion.div
                whileHover={{ y: -2 }}
                className="space-y-2"
              >
                <label className="block text-sm font-medium text-gray-300">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                  placeholder="john@example.com"
                  name="Email"
                />
              </motion.div>
              
              <motion.div
                whileHover={{ y: -2 }}
                className="space-y-2"
              >
                <label className="block text-sm font-medium text-gray-300">
                  Project Type
                </label>
                <select
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-white"
                  name="Project_Type"
                >
                  <option value="">Select a project type</option>
                  <option value="Web Development">Web Development</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="Frontend Development">Frontend Development</option>
                  <option value="Consultation">Consultation</option>
                  <option value="Other">Other</option>
                </select>
              </motion.div>
              
              <motion.div
                whileHover={{ y: -2 }}
                className="space-y-2"
              >
                <label className="block text-sm font-medium text-gray-300">
                  Message *
                </label>
                <textarea
                  rows={6}
                  required
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400 resize-none"
                  placeholder="Tell me about your project, timeline, and any specific requirements..."
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
                      "linear-gradient(45deg, #8b5cf6, #ec4899, #8b5cf6)",
                      "linear-gradient(45deg, #ec4899, #8b5cf6, #ec4899)",
                      "linear-gradient(45deg, #8b5cf6, #ec4899, #8b5cf6)"
                    ]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
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
                        ease: "easeInOut"
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
                      x: ["-100%", "100%"]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatDelay: 2,
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* Button content */}
                  <motion.span
                    className="relative z-10"
                    animate={{
                      color: ["#ffffff", "#f0f0f0", "#ffffff"]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    Send Message
                  </motion.span>
                  
                  <motion.div
                    className="relative z-10"
                    animate={{
                      x: [0, 5, 0],
                      rotate: [0, 15, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Send size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
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
                      ease: "easeInOut"
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