import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import HMSMedicare from '../assets/Gallery-Image/HMS-Medicare.png';
import MeetSavani from '../assets/Gallery-Image/Meet-Savani.png';
import Freshmart from '../assets/Gallery-Image/Fresh-Mart.png';
import Mindmap from '../assets/Gallery-Image/Mind-Map.png';
import WorldWatch from '../assets/Gallery-Image/WorldWatch.png';
import veggiebite from '../assets/Gallery-Image/VegggieBite.png'

const Gallery = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: 'Portfolio Website',
      category: 'Frontend Development',
      image: MeetSavani,
      technologies: ['Figma', 'React', 'Tailwind'],
      link: 'https://meet-savani.netlify.app/',
      github: 'https://github.com/meetsavani07/Meet-Savani',
      description: 'A modern portfolio website showcasing my work and skills, built with React and Tailwind CSS. Features smooth animations and responsive design.',
    },
    {
      title: 'Hospital-Management-System',
      category: 'Frontend Development',
      image: HMSMedicare,
      technologies: ['Figma', 'React', 'Vite', 'Tailwind CSS'],
      link: 'https://hms-medicare.netlify.app/',
      github: 'https://github.com/meetsavani07/HMS-Medicare',
      description: 'A comprehensive hospital management system with patient records, appointment scheduling, and medical staff management features.',
    },
    {
      title: 'Grosry Store',
      category: 'Frontend Development',
      image: Freshmart,
      technologies: ['Vite.js', 'framer-motion'],
      link: 'https://freshmart-grocerystore.netlify.app/',
      github: 'https://github.com/meetsavani07/Fresh-Mart',
      description: 'An e-commerce platform for grocery shopping with a modern UI, smooth animations, and an intuitive shopping experience.',
    },
    {
      title: 'Mind Map',
      category: 'Frontend Development',
      image: Mindmap,
      technologies: ['@reactflow/node-resizer', 'Prisma', 'y-websocket'],
      link: 'https://mind-map-creater.netlify.app/',
      github: 'https://github.com/meetsavani07/Mind-Map',
      description: 'A collaborative mind mapping tool that allows users to create, share, and edit mind maps in real-time.',
    },
    {
      title: 'World Watch',
      category: 'Frontend Development',
      image: WorldWatch,
      technologies: ['Next.js', 'Prisma', 'zustand', 'react-leaflet'],
      link: 'https://worldwatch-news.netlify.app/',
      github: 'https://github.com/meetsavani07/WorldWatch',
      description: 'A global news aggregator with interactive maps showing news coverage and events from around the world.',
    },
    {
      title: 'VeggieBite',
      category: 'API Development',
      image: veggiebite,
      technologies: ['Node JS', 'Express', 'MongoDB'],
      link: 'https://veggiebite.netlify.app/',
      github: 'https://github.com/meetsavani07/VeggieBite',
      description: 'A RESTful API backend for a vegetarian recipe sharing platform with user authentication and recipe management.',
    }
  ];


  const categories = ['all', 'Frontend Development', 'UI/UX Design', 'API Development'];

  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((project) => project.category === filter);

  

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Project Gallery</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8 font-mono">
            A showcase of my recent projects and creative work. Each project
            represents a unique challenge and innovative solution.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <motion.div
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative group"
              >
                {/* Animated background glow for active filter */}
                {filter === category && (
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-full blur opacity-75 transition-all duration-500"
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
                )}
                
                {/* Floating particles effect for active filter */}
                {filter === category && (
                  <div className="absolute inset-0 opacity-100 transition-opacity duration-500">
                    {[...Array(4)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full"
                        style={{
                          left: `${25 + i * 20}%`,
                          top: `${30 + (i % 2) * 40}%`,
                        }}
                        animate={{
                          y: [-5, -10, -5],
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
                )}

                <button
                  onClick={() => setFilter(category)}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 overflow-hidden ${
                    filter === category
                      ? 'bg-purple-600 text-white'
                      : 'bg-slate-800/50 text-gray-400 hover:bg-slate-700/50'
                  }`}
                >
                  {/* Shimmer effect for active filter */}
                  {filter === category && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
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
                  )}
                  
                  {/* Button content */}
                  <span className="relative z-10">
                    {category === 'all' ? 'All Projects' : category}
                  </span>

                  {/* Ripple effect for active filter */}
                  {filter === category && (
                    <motion.div
                      className="absolute inset-0 bg-white/10 rounded-full"
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  )}
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-purple-400 text-sm">{project.category}</span>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white font-mono">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm font-mono leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-purple-600/20 text-purple-400 px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Divider Line */}
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent mb-4"></div>
                  
                  {/* GitHub Button */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative group"
                  >
                    {/* Animated background glow */}
                    <motion.div
                      className="absolute -inset-1 bg-gradient-to-r from-slate-600 via-slate-500 to-slate-600 rounded-lg blur opacity-0 group-hover:opacity-50 transition-all duration-500"
                      animate={{
                        background: [
                          "linear-gradient(45deg, #475569, #64748b, #475569)",
                          "linear-gradient(45deg, #64748b, #475569, #64748b)",
                          "linear-gradient(45deg, #475569, #64748b, #475569)"
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
                      {[...Array(4)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-purple-400 rounded-full"
                          style={{
                            left: `${25 + i * 20}%`,
                            top: `${30 + (i % 2) * 40}%`,
                          }}
                          animate={{
                            y: [-5, -10, -5],
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

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative w-full bg-slate-700/50 hover:bg-slate-700 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 group overflow-hidden"
                    >
                      {/* Shimmer effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100"
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
                      <motion.div
                        className="relative z-10"
                        animate={{
                          rotate: [0, 360]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      >
                        <Github size={18} className="group-hover:text-purple-400 transition-colors duration-300" />
                      </motion.div>
                      
                      <motion.span
                        className="relative z-10 group-hover:text-purple-400 transition-colors duration-300"
                        animate={{
                          color: ["#ffffff", "#e5e7eb", "#ffffff"]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        View Code on GitHub
                      </motion.span>

                      {/* Ripple effect on hover */}
                      <motion.div
                        className="absolute inset-0 bg-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100"
                        animate={{
                          scale: [1, 1.05, 1],
                        }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </a>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Gallery;