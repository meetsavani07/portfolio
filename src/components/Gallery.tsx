import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Gallery = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: 'E-commerce Platform',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3',
      technologies: ['React', 'Node.js', 'MongoDB'],
    },
    {
      title: 'Mobile Banking App',
      category: 'Mobile Development',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3',
      technologies: ['React Native', 'Firebase'],
    },
    {
      title: 'Portfolio Website',
      category: 'UI/UX Design',
      image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d',
      technologies: ['Figma', 'React', 'Tailwind'],
    },
    {
      title: 'Social Media Dashboard',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
      technologies: ['Vue.js', 'Express', 'PostgreSQL'],
    },
    {
      title: 'Fitness Tracking App',
      category: 'Mobile Development',
      image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5',
      technologies: ['Flutter', 'Firebase'],
    },
    {
      title: 'Restaurant Website',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
      technologies: ['Next.js', 'Prisma', 'PostgreSQL'],
    },
  ];

  const categories = [
    'all',
    'Web Development',
    'Mobile Development',
    'UI/UX Design',
  ];
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
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            A showcase of my recent projects and creative work. Each project
            represents a unique challenge and innovative solution.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === category
                    ? 'bg-purple-600 text-white'
                    : 'bg-slate-800/50 text-gray-400 hover:bg-slate-700/50'
                }`}
              >
                {category === 'all' ? 'All Projects' : category}
              </button>
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
                className="group relative overflow-hidden rounded-xl bg-slate-800/50"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-purple-400 text-sm mb-2">
                      {project.category}
                    </p>
                    <h3 className="text-xl font-semibold mb-3">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs bg-purple-600/20 text-purple-400 px-2 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
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
