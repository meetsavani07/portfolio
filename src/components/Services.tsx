import { motion } from 'framer-motion';
import { Globe, PenTool, Database, Layout, Settings, Smartphone } from 'lucide-react';
import { useState } from 'react';

const Services = () => {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  const toggleCard = (index: number) => {
    setFlippedCards((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const services = [
    {
      icon: <PenTool size={28} />,
      stages: 'Learning Complete',
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user interfaces that enhance user experience and drive engagement.',
      technologies: [
        'Figma', 
        'Adobe XD', 
        'WIX',
        'Sketch',
        'Prototyping',
        'User Research'
      ],
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: <Layout size={28} />,
      stages: 'Learning in Progress',
      title: 'Frontend Development',
      description: 'Modern and responsive frontend implementations with latest frameworks and best practices.',
      technologies: [
        'React.js',
        'Vue.js',
        'Tailwind CSS',
        'Material-UI',
        'Framer Motion',
        'Tailwind UI',
        'SCSS/SASS',
        'Bootstrap'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Database size={28} />,
      stages: 'Starting Soon',
      title: 'Backend Development',
      description: 'Robust and scalable server-side solutions for your applications with modern architecture.',
      technologies: [
        'Node.js', 
        'Express.js', 
        'MongoDB', 
        'Supabase',
        'PostgreSQL',
        'REST APIs',
        'GraphQL'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Globe size={28} />,
      stages: 'Learning in Progress',
      title: 'Web Development',
      description: 'Custom websites built with modern technologies, SEO optimization, and performance focus.',
      technologies: [
        'HTML5',
        'CSS3',
        'JavaScript',
        'TypeScript',
        'React.js',
        'Next.js',
        'Vite',
        'Webpack'
      ],
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: <Smartphone size={28} />,
      stages: 'Learning in Progress',
      title: 'Mobile Development',
      description: 'Cross-platform mobile applications with native performance and modern UI.',
      technologies: [
        'React Native',
        'Flutter',
        'Expo',
        'Mobile UI/UX',
        'App Store Deploy',
        'Push Notifications'
      ],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: <Settings size={28} />,
      stages: 'Starting Soon',
      title: 'Technical Consulting',
      description: 'Expert advice on technology stack, architecture decisions, and project optimization.',
      technologies: [
        'System Architecture',
        'Cloud Services',
        'Performance Optimization',
        'Security',
        'Code Review',
        'Best Practices'
      ],
      color: 'from-yellow-500 to-orange-500'
    },
  ];

  const getStageColor = (stage: string) => {
    switch (stage) {
      case 'Learning Complete':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Learning in Progress':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'Starting Soon':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

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
              Services
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full"></div>
          </div>
          
          <p className="text-gray-300 max-w-3xl mx-auto text-lg font-mono leading-relaxed mb-6">
            Comprehensive solutions tailored to your needs. From concept to
            deployment, I deliver quality results that exceed expectations.
          </p>
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="inline-flex items-center gap-2 bg-slate-800/50 px-6 py-3 rounded-full border border-purple-500/30"
          >
            <span className="text-purple-400 text-sm font-medium">💡</span>
            <span className="text-purple-400 text-sm font-medium">
              Click on any card to explore technologies
            </span>
          </motion.div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="relative h-[420px] cursor-pointer group"
              onClick={() => toggleCard(index)}
              style={{ perspective: '1000px' }}
            >
              <motion.div
                className="w-full h-full relative"
                initial={false}
                animate={{ rotateY: flippedCards.includes(index) ? 180 : 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                style={{ 
                  transformStyle: 'preserve-3d',
                  transformOrigin: 'center center'
                }}
              >
                {/* Front of card */}
                <div 
                  className="absolute w-full h-full bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 flex flex-col"
                  style={{ 
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden'
                  }}
                >
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`} />
                  
                  <div className="flex items-start justify-between mb-6 relative z-10">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      {service.icon}
                    </div>
                    
                    <span className={`text-xs px-3 py-2 rounded-full border transition-all duration-300 font-medium ${getStageColor(service.stages)}`}>
                      {service.stages}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-400 transition-colors duration-300 relative z-10">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-400 flex-grow group-hover:text-gray-300 transition-colors duration-300 font-mono leading-relaxed relative z-10">
                    {service.description}
                  </p>
                  
                  <div className="mt-6 pt-4 border-t border-slate-700/50 relative z-10">
                    <div className="flex items-center justify-between text-sm text-purple-400">
                      <span className="font-medium">View Technologies</span>
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="text-lg"
                      >
                        →
                      </motion.span>
                    </div>
                  </div>
                </div>

                {/* Back of card */}
                <div 
                  className="absolute w-full h-full bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-purple-500/50 transition-colors flex flex-col"
                  style={{ 
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)'
                  }}
                >
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-5 rounded-2xl`} />
                  
                  <div className="flex items-center gap-3 mb-6 relative z-10">
                    <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center text-white shadow-lg`}>
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-purple-400">
                      Technologies & Tools
                    </h3>
                  </div>
                  
                  {/* Scrollable content area */}
                  <div className="flex-grow overflow-hidden relative z-10">
                    <div 
                      className="h-full overflow-y-auto pr-2"
                      style={{
                        scrollbarWidth: 'thin',
                        scrollbarColor: 'rgba(139, 92, 246, 0.3) rgba(15, 23, 42, 0.5)'
                      }}
                    >
                      <div className="space-y-3">
                        {service.technologies.map((tech, techIndex) => (
                          <motion.div
                            key={techIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: techIndex * 0.1 }}
                            whileHover={{ x: 10, scale: 1.02 }}
                            className="flex items-center bg-slate-700/50 p-3 rounded-lg hover:bg-slate-700 transition-all duration-300 group border border-slate-600/30 hover:border-purple-500/50"
                          >
                            <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-3 group-hover:scale-125 transition-transform duration-300 shadow-sm flex-shrink-0`}></div>
                            <span className="group-hover:text-purple-400 transition-colors duration-300 font-medium text-sm">
                              {tech}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-slate-700/50 relative z-10">
                    <div className="flex items-center justify-between text-sm text-purple-400">
                      <span className="font-medium">Back to Overview</span>
                      <motion.span
                        animate={{ x: [0, -5, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="text-lg"
                      >
                        ←
                      </motion.span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-2xl p-12 border border-slate-700/50 hover:border-purple-500/30 transition-all duration-300">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-300 mb-8 font-mono max-w-2xl mx-auto">
              Let's discuss how I can help bring your ideas to life with modern web technologies and creative solutions.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group inline-block"
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

              <button className="relative bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25 overflow-hidden">
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
                  Get In Touch
                </motion.span>

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
          </div>
        </motion.div>
      </div>

      <style>{`
        .overflow-y-auto::-webkit-scrollbar {
          width: 6px;
        }
        
        .overflow-y-auto::-webkit-scrollbar-track {
          background: rgba(15, 23, 42, 0.5);
          border-radius: 3px;
        }
        
        .overflow-y-auto::-webkit-scrollbar-thumb {
          background-color: rgba(139, 92, 246, 0.3);
          border-radius: 3px;
        }
        
        .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background-color: rgba(139, 92, 246, 0.5);
        }
      `}</style>
    </motion.div>
  );
};

export default Services;