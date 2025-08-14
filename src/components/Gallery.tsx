import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, Calendar, Users, Code, Zap, Eye } from 'lucide-react';
import HMSMedicare from '../assets/Gallery-Image/HMS-Medicare.png';
import MeetSavani from '../assets/Gallery-Image/Meet-Savani.png';
import Freshmart from '../assets/Gallery-Image/Fresh-Mart.png';
import Mindmap from '../assets/Gallery-Image/Mind-Map.png';
import WorldWatch from '../assets/Gallery-Image/WorldWatch.png';
import veggiebite from '../assets/Gallery-Image/VegggieBite.png';
import cleartask from '../assets/Gallery-Image/ClearTask.png';

const Gallery = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      title: 'Portfolio Website',
      category: 'Frontend Development',
      image: MeetSavani,
      technologies: ['Figma', 'React', 'Tailwind'],
      link: 'https://meet-savani.netlify.app/',
      github: 'https://github.com/meetsavani07/Meet-Savani',
      description: 'A modern portfolio website showcasing my work and skills, built with React and Tailwind CSS. Features smooth animations and responsive design.',
      detailedDescription: 'This portfolio website represents my journey as a frontend developer, featuring a modern design with smooth animations and responsive layouts. Built with React and styled using Tailwind CSS, it showcases my projects, skills, and professional experience in an engaging and interactive way.',
      features: [
        'Responsive design that works on all devices',
        'Smooth animations using Framer Motion',
        'Interactive project gallery',
        'Contact form with validation',
        'Modern UI/UX design principles',
        'Fast loading and optimized performance'
      ],
      duration: '2 weeks',
      teamSize: '1 (Solo Project)',
      challenges: 'Creating smooth animations while maintaining performance, implementing responsive design across all screen sizes',
      learnings: 'Advanced React patterns, Framer Motion animations, Tailwind CSS best practices'
    },
    {
      title: 'ClearTask',
      category: 'Frontend Development',
      image: cleartask,
      technologies: ['React', 'Tailwind', 'Framer Motion'],
      link: 'https://cleartask-ms.netlify.app/',
      github: 'https://github.com/meetsavani07/ClearTask.git',
      description: 'The Simple To-Do App is a lightweight, user-friendly task management tool designed to help users stay organized and productive.',
      detailedDescription: 'The Simple To-Do App is a lightweight, user-friendly task management tool designed to help users stay organized and productive. With an intuitive interface, users can easily add, edit, mark as completed, and delete tasks. The app ensures smooth interaction and quick updates, making it ideal for personal daily planning or basic project tracking.',
      features: [
        'Responsive design for both desktop and mobile.',
        'Persistent storage using local storage.',
        'Smooth animations using Framer Motion',
        'User Login with google and email Store Data.',
        'Filter Option with count task.',
      ],
      duration: '4 Day',
      teamSize: '1 (Solo Project)',
      challenges: 'Load task data two page in same time with using local storage.',
      learnings: 'How Store Data In Local Storage and how get data from local storage.'
    },
    {
      title: 'Grosry Store',
      category: 'Frontend Development',
      image: Freshmart,
      technologies: ['Vite.js', 'framer-motion'],
      link: 'https://freshmart-grocerystore.netlify.app/',
      github: 'https://github.com/meetsavani07/Fresh-Mart',
      description: 'An e-commerce platform for grocery shopping with a modern UI, smooth animations, and an intuitive shopping experience.',
      detailedDescription: 'Fresh Mart is a modern e-commerce platform designed specifically for grocery shopping. It features a clean, intuitive interface that makes online grocery shopping as easy as visiting a physical store.',
      features: [
        'Product catalog with categories',
        'Shopping cart functionality',
        'Product search and filtering',
        'Smooth animations and transitions',
        'Mobile-first responsive design',
        'Modern checkout process'
      ],
      duration: '2.5 weeks',
      teamSize: '1 (Solo Project)',
      challenges: 'Implementing smooth animations without affecting performance, creating an intuitive shopping experience',
      learnings: 'E-commerce UX patterns, performance optimization, advanced Framer Motion techniques'
    },
    {
      title: 'Mind Map',
      category: 'Frontend Development',
      image: Mindmap,
      technologies: ['@reactflow/node-resizer', 'Prisma', 'y-websocket'],
      link: 'https://mind-map-creater.netlify.app/',
      github: 'https://github.com/meetsavani07/Mind-Map',
      description: 'A collaborative mind mapping tool that allows users to create, share, and edit mind maps in real-time.',
      detailedDescription: 'Mind Map Creator is an innovative collaborative tool that enables users to visualize their thoughts and ideas through interactive mind maps. Built with real-time collaboration features, it allows multiple users to work together seamlessly.',
      features: [
        'Real-time collaborative editing',
        'Drag and drop node creation',
        'Multiple mind map templates',
        'Export functionality (PDF, PNG)',
        'User authentication and sharing',
        'Responsive canvas interface'
      ],
      duration: '4 weeks',
      teamSize: '1 (Solo Project)',
      challenges: 'Implementing real-time collaboration, managing complex node relationships, optimizing canvas performance',
      learnings: 'Real-time technologies, complex data structures, collaborative software patterns'
    },
    {
      title: 'World Watch',
      category: 'Frontend Development',
      image: WorldWatch,
      technologies: ['Next.js', 'Prisma', 'zustand', 'react-leaflet'],
      link: 'https://worldwatch-news.netlify.app/',
      github: 'https://github.com/meetsavani07/WorldWatch',
      description: 'A global news aggregator with interactive maps showing news coverage and events from around the world.',
      detailedDescription: 'World Watch is a comprehensive news aggregation platform that combines global news coverage with interactive geographical visualization. Users can explore news from different regions through an intuitive map interface.',
      features: [
        'Interactive world map with news markers',
        'Real-time news aggregation',
        'Category-based news filtering',
        'Geolocation-based news discovery',
        'Responsive design for all devices',
        'News bookmarking and sharing'
      ],
      duration: '5 weeks',
      teamSize: '1 (Solo Project)',
      challenges: 'Integrating multiple news APIs, optimizing map performance with large datasets, creating intuitive navigation',
      learnings: 'API integration, geospatial data handling, state management with Zustand, Next.js optimization'
    },
    {
      title: 'Hospital-Management-System',
      category: 'Frontend Development',
      image: HMSMedicare,
      technologies: ['Figma', 'React', 'Vite', 'Tailwind CSS'],
      link: 'https://hms-medicare.netlify.app/',
      github: 'https://github.com/meetsavani07/HMS-Medicare',
      description: 'A comprehensive hospital management system with patient records, appointment scheduling, and medical staff management features.',
      detailedDescription: 'HMS Medicare is a comprehensive hospital management system designed to streamline healthcare operations. The system provides an intuitive interface for managing patient records, scheduling appointments, and coordinating medical staff activities.',
      features: [
        'Patient registration and record management',
        'Appointment scheduling system',
        'Medical staff management',
        'Dashboard with analytics',
        'Responsive design for tablets and mobile',
        'Real-time data updates'
      ],
      duration: '3 weeks',
      teamSize: '1 (Solo Project)',
      challenges: 'Managing complex state for multiple user roles, creating an intuitive interface for healthcare workers',
      learnings: 'Complex state management, healthcare domain knowledge, user experience design for professional applications'
    },
    {
      title: 'VeggieBite',
      category: 'API Development',
      image: veggiebite,
      technologies: ['Node JS', 'Express', 'MongoDB'],
      link: 'https://veggiebite.netlify.app/',
      github: 'https://github.com/meetsavani07/VeggieBite',
      description: 'A RESTful API backend for a vegetarian recipe sharing platform with user authentication and recipe management.',
      detailedDescription: 'VeggieBite is a robust backend API designed for a vegetarian recipe sharing platform. It provides comprehensive endpoints for user management, recipe operations, and community features, built with modern Node.js technologies.',
      features: [
        'RESTful API architecture',
        'User authentication and authorization',
        'Recipe CRUD operations',
        'Image upload and processing',
        'Search and filtering capabilities',
        'Rating and review system'
      ],
      duration: '3 weeks',
      teamSize: '1 (Solo Project)',
      challenges: 'Designing scalable API architecture, implementing secure authentication, optimizing database queries',
      learnings: 'Backend development, API design patterns, database optimization, security best practices'
    }
  ];

  const categories = ['all', 'Frontend Development', 'UI/UX Design', 'API Development'];

  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((project) => project.category === filter);

  const openProjectModal = (project: any) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

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
                className="bg-slate-800/50 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 group"
              >
                <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105 cursor-pointer"
                    onClick={() => openProjectModal(project)}
                  />
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer"
                       onClick={() => openProjectModal(project)}>
                    <div className="text-center">
                      <Eye className="w-8 h-8 text-white mb-2 mx-auto" />
                      <span className="text-white font-medium">View Details</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-purple-400 text-sm">{project.category}</span>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 transition-colors duration-300"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                  <h3 
                    className="text-xl font-semibold mb-3 text-white font-mono cursor-pointer hover:text-purple-400 transition-colors duration-300"
                    onClick={() => openProjectModal(project)}
                  >
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
                      onClick={(e) => e.stopPropagation()}
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

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeProjectModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-slate-900/95 backdrop-blur-md rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden border border-slate-700/50"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header with Hero Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent" />
                
                {/* Close Button */}
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={closeProjectModal}
                  className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-red-500/50 transition-colors duration-300"
                >
                  <X size={20} />
                </motion.button>

                {/* Project Title Overlay */}
                <div className="absolute bottom-4 left-6">
                  <h2 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h2>
                  <span className="text-purple-400 text-sm font-medium bg-purple-500/20 px-3 py-1 rounded-full">
                    {selectedProject.category}
                  </span>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 max-h-[calc(90vh-16rem)] overflow-y-auto custom-scrollbar">
                {/* Action Buttons */}
                <div className="flex gap-4 mb-6">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </motion.a>
                  
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300"
                  >
                    <Github size={18} />
                    Source Code
                  </motion.a>
                </div>

                {/* Project Details Grid */}
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700/50">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="text-purple-400" size={18} />
                      <span className="text-purple-400 font-medium">Duration</span>
                    </div>
                    <p className="text-gray-300">{selectedProject.duration}</p>
                  </div>
                  
                  <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700/50">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="text-purple-400" size={18} />
                      <span className="text-purple-400 font-medium">Team Size</span>
                    </div>
                    <p className="text-gray-300">{selectedProject.teamSize}</p>
                  </div>
                  
                  <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700/50">
                    <div className="flex items-center gap-2 mb-2">
                      <Code className="text-purple-400" size={18} />
                      <span className="text-purple-400 font-medium">Type</span>
                    </div>
                    <p className="text-gray-300">{selectedProject.category}</p>
                  </div>
                </div>

                {/* Project Description */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Zap className="text-purple-400" size={20} />
                    Project Overview
                  </h3>
                  <p className="text-gray-300 leading-relaxed font-mono">
                    {selectedProject.detailedDescription}
                  </p>
                </div>

                {/* Key Features */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-white mb-4">Key Features</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {selectedProject.features.map((feature: string, index: number) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-3 bg-slate-800/30 p-3 rounded-lg"
                      >
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-white mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.technologies.map((tech: string, index: number) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-purple-400 px-4 py-2 rounded-full text-sm font-medium border border-purple-500/30"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Challenges & Learnings */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-3">Challenges</h3>
                    <p className="text-gray-300 text-sm leading-relaxed bg-slate-800/30 p-4 rounded-lg">
                      {selectedProject.challenges}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-bold text-white mb-3">Key Learnings</h3>
                    <p className="text-gray-300 text-sm leading-relaxed bg-slate-800/30 p-4 rounded-lg">
                      {selectedProject.learnings}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Gallery;