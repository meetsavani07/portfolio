import React from "react";
import { motion } from "framer-motion";
import homeimage from "../assets/Image/home-main.svg";
import Type from "../assets/code/type";
import { ArrowRight, Github, Linkedin, Twitter, MailCheck, MessageSquareText } from "lucide-react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen pt-16 flex items-center bg-gradient-to-br from-black via-slate-900 to-black"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="mb-6"
              >
                <h1 className="text-3xl md:text-5xl font-black mb-6">
                  <span className="text-4xl bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                    Hi There!
                  </span>
                  <motion.span 
                    className="wave text-4xl ml-3" 
                    role="img" 
                    aria-labelledby="wave"
                    animate={{ rotate: [0, 20, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    👋🏻
                  </motion.span>
                  <br />
                  <span className="text-white">I'm </span>
                  <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                    Meet Savani
                  </span>
                  <div
                    className="text-3xl md:text-4xl mt-10 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent"
                    style={{ paddingBottom: 20, textAlign: "left" }}
                  >
                    <Type />
                  </div>
                </h1>
              </motion.div>
              
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-gray-300 text-lg mb-8 font-mono leading-relaxed"
              >
                Crafting digital experiences that blend creativity with technical
                excellence. Let's bring your vision to life with modern web technologies.
              </motion.p>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="flex flex-col sm:flex-row items-start gap-6"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
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

                  <Link
                    to="/contact"
                    className="relative group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 rounded-xl flex items-center gap-3 transition-all duration-300 shadow-lg hover:shadow-purple-500/50 font-semibold overflow-hidden"
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
                      Get in touch
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
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
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
                  </Link>
                </motion.div>
                
                <div className="flex gap-4">
                  {[
                    { href: "https://github.com/meetsavani07", icon: Github, label: "GitHub" },
                    { href: "https://www.linkedin.com/in/meet-savani-30088931b/", icon: Linkedin, label: "LinkedIn" },
                    { href: "https://x.com/meetsavani07", icon: Twitter, label: "Twitter" },
                    { href: "mailto:savanimeet11@gmail.com", icon: MailCheck, label: "Email" },
                    { href: "https://wa.me/9824357565", icon: MessageSquareText, label: "WhatsApp" }
                  ].map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      className="p-3 bg-slate-800/50 hover:bg-slate-700/50 rounded-xl text-gray-400 hover:text-purple-400 transition-all duration-300 border border-slate-700/50 hover:border-purple-500/50 group"
                      title={social.label}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="relative"
            >
              <motion.div 
                className="aspect-square rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 absolute inset-0 blur-3xl"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 4 }}
              />
              <motion.img
                src={homeimage}
                alt="Profile"
                className="rounded-2xl w-full object-cover relative z-10 shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* About Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen bg-gradient-to-br from-slate-900 via-black to-slate-900 flex flex-col items-center px-4 md:px-8"
      >
        <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl min-h-screen text-left md:text-left">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="w-full px-4"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-center mb-12"
            >
              <h1 className="text-3xl sm:text-5xl font-black leading-tight mb-8">
                LET ME{" "}
                <span className="bg-gradient-to-r from-pink-400 via-purple-500 to-purple-600 bg-clip-text text-transparent">
                  INTRODUCE{" "}
                </span>
                MYSELF
              </h1>
            </motion.div>
            
            <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl mb-10 p-8 border border-slate-700/50 hover:border-purple-500/30 transition-all duration-300">
              <div className="space-y-6 text-gray-300 font-mono leading-relaxed">
                {[
                  "I'm a passionate frontend developer with a creative mindset and a dedication to crafting exceptional user experiences. 🚀",
                  "My expertise lies in modern web technologies, particularly React.js, Next.js, and TypeScript. I love bringing designs to life with smooth animations and responsive layouts.",
                  "I have a strong foundation in HTML5, CSS3, and JavaScript, and I'm constantly learning new technologies and best practices.",
                  "My approach combines clean code principles with modern design patterns to create scalable and maintainable applications. I'm particularly interested in performance optimization and accessibility.",
                  "Currently exploring the exciting world of backend development with Node.js and database management to become a more well-rounded developer.",
                  "I believe in the power of continuous learning and staying updated with the latest industry trends and technologies. 📚"
                ].map((text, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="hover:text-white transition-colors duration-300 p-4 rounded-lg hover:bg-slate-700/20"
                  >
                    {text.split(' ').map((word, wordIndex) => {
                      const isHighlight = ['React.js', 'Next.js', 'TypeScript', 'HTML5', 'CSS3', 'JavaScript', 'Node.js'].includes(word.replace(',', '').replace('.', ''));
                      return (
                        <span
                          key={wordIndex}
                          className={isHighlight ? 'text-purple-400 font-semibold' : ''}
                        >
                          {word}{' '}
                        </span>
                      );
                    })}
                  </motion.p>
                ))}
              </div>
            </div>  
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Home;