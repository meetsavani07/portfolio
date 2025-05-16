import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
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
    },
    {
      title: 'Hospital-Management-System',
      category: 'Frontend Development',
      image: HMSMedicare,
      technologies: ['Figma', 'React', 'Vite', 'Tailwind CSS'],
      link: 'https://hms-medicare.netlify.app/',
    },
    {
      title: 'Grosry Store',
      category: 'Frontend Development',
      image: Freshmart,
      technologies: ['Vite.js', 'framer-motion'],
      link: 'https://freshmart-grocerystore.netlify.app/',
    },
    {
      title: 'Mind Map',
      category: 'Frontend Development',
      image: Mindmap,
      technologies: ['@reactflow/node-resizer', 'Prisma', 'y-websocket'],
      link: 'https://mind-map-creater.netlify.app/',
    },
    {
      title: 'World Watch',
      category: 'Frontend Development',
      image: WorldWatch,
      technologies: ['Next.js', 'Prisma', 'zustand', 'react-leaflet'],
      link: 'https://worldwatch-news.netlify.app/',
    },
    {
      title: 'VeggieBite',
      category: 'API Development',
      image: veggiebite,
      technologies: ['Node JS', 'Express', 'MongoDB'],
      link: 'https://veggiebite.netlify.app/',
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
              <motion.button
                key={category}
                onClick={() => setFilter(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 ${
                  filter === category
                    ? 'bg-purple-600 text-white'
                    : 'bg-slate-800/50 text-gray-400 hover:bg-slate-700/50'
                }`}
              >
                {category === 'all' ? 'All Projects' : category}
              </motion.button>
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
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative overflow-hidden rounded-xl bg-slate-800/50 shadow-lg transition-all duration-300 hover:shadow-purple-500/20"
              >
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={project.image}
                      // alt={project.title}
                      className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"
                    whileHover={{ opacity: 1 }}
                  >
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-purple-400 text-sm group-hover:text-purple-300 transition-colors duration-300">
                          {project.category}
                        </p>
                        <ExternalLink className="text-purple-400 group-hover:text-purple-300 transition-colors duration-300" size={20} />
                      </div>
                      <h3 className="text-xl font-semibold mb-3 group-hover:text-purple-400 transition-colors duration-300 font-mono">
                        {project.title}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs bg-purple-600/20 text-purple-400 px-2 py-1 rounded-full transition-all duration-300 hover:bg-purple-600/30 hover:scale-105"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </a>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Gallery;