import { motion } from 'framer-motion';
import { Globe, PenTool, Database, Layout, Settings } from 'lucide-react';
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
      icon: <PenTool size={24} />,
      stages: 'Learning Complete',
      title: 'UI/UX Design',
      description:
        'Beautiful and intuitive user interfaces that enhance user experience.',
      technologies: [
        'Figma', 
        'Adobe XD', 
        'WIX'
      ],
    },
    {
      icon: <Layout size={24} />,
      stages: 'Learning in Progress',
      title: 'Frontend Development',
      description:
        'Modern and responsive frontend implementations with latest frameworks.',
      technologies: [
        'React.js',
        'Vue.js',
        'Tailwind CSS',
        'Material-UI',
        'Framer Motion',
        'Tailwind UI',
      ],
    },
    {
      icon: <Database size={24} />,
      stages: 'Starting Soon',
      title: 'Backend Development',
      description:
        'Robust and scalable server-side solutions for your applications.',
      technologies: [
        'Node.js', 
        'Express.js', 
        'MongoDB', 
        'Supabase'
      ],
    },
    {
      icon: <Globe size={24} />,
      stages: 'Learning in Progress',
      title: 'Web Development',
      description:
        'Custom websites built with modern technologies and best practices.',
      technologies: [
        'HTML5',
        'CSS5',
        'JavaScript',
        'TypeScript',
        'React.js',
        'Next.js',
      ],
    },
    {
      icon: <Settings size={24} />,
      stages: 'Starting Soon',
      title: 'Technical Consulting',
      description:
        'Expert advice on technology stack and architecture decisions.',
      technologies: [
        'System Architecture',
        'Cloud Services',
        'Performance Optimization',
        'Security',
      ],
    },
  ];

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
          <h2 className="text-4xl font-bold mb-4">Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-mono">
            Comprehensive solutions tailored to your needs. From concept to
            deployment, I deliver quality results that exceed expectations.
          </p>
          <p className="text-sm text-purple-400 mt-4">
            Click on any card to see technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="relative h-[330px] cursor-pointer perspective-1000 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
              onClick={() => toggleCard(index)}
            >
              <motion.div
                className="w-full h-full relative transform-style-3d transition-transform duration-700"
                initial={false}
                animate={{ rotateY: flippedCards.includes(index) ? 180 : 0 }}
                transition={{ duration: 0.6 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Front of card */}
                <div className="absolute w-full h-full bg-slate-800/50 p-8 rounded-xl backdrop-blur-sm hover:bg-slate-700/50 transition-all duration-300 group backface-hidden flex flex-col">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center text-purple-400 group-hover:bg-purple-600/30 transition-all duration-300 group-hover:scale-110">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <span
                        className={`text-sm px-3 py-1 rounded-full transition-colors duration-300 ${
                          service.stages === 'Learning Complete'
                            ? 'bg-green-500/20 text-green-400 group-hover:bg-green-500/30'
                            : service.stages === 'Learning in Progress'
                            ? 'bg-yellow-500/20 text-yellow-400 group-hover:bg-yellow-500/30'
                            : 'bg-blue-500/20 text-blue-400 group-hover:bg-blue-500/30'
                        }`}
                      >
                        {service.stages}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-purple-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 flex-grow group-hover:text-gray-300 transition-colors duration-300 font-mono">
                    {service.description}
                  </p>
                  <div className="text-sm text-purple-400 mt-4 flex items-center gap-2">
                    <span>Click to view technologies</span>
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1 }}
                    >
                      →
                    </motion.span>
                  </div>
                </div>

                {/* Back of card */}
                <div className="absolute w-full h-full bg-slate-800/50 p-6 rounded-xl backdrop-blur-sm hover:bg-slate-700/50 transition-colors group backface-hidden rotate-y-180 flex flex-col">
                  <h3 className="text-xl font-semibold mb-4 text-purple-400">
                    Technologies
                  </h3>
                  <div className="flex-grow overflow-y-auto custom-scrollbar">
                    <ul className="space-y-3 pr-2">
                      {service.technologies.map((tech, techIndex) => (
                        <motion.li
                          key={techIndex}
                          whileHover={{ x: 10 }}
                          className="flex items-center bg-slate-700/50 p-3 rounded-lg hover:bg-slate-700 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 group"
                        >
                          <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></span>
                          <span className="group-hover:text-purple-400 transition-colors duration-300">{tech}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  <div className="text-sm text-purple-400 mt-4 flex items-center gap-2 pt-2 border-t border-slate-700/50">
                    <span>Click to go back</span>
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1 }}
                    >
                      ←
                    </motion.span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Services;