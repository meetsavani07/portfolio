import { motion } from 'framer-motion';
import { Code, Palette, Brain } from 'lucide-react';

const About = () => {
  const skills = [
    {
      icon: <Code size={24} />,
      title: 'Development',
      description: 'Expert in modern web technologies and frameworks',
    },
    {
      icon: <Palette size={24} />,
      title: 'Design',
      description: 'Creating beautiful and intuitive user interfaces',
    },
    {
      icon: <Brain size={24} />,
      title: 'Problem Solving',
      description: 'Analytical approach to complex challenges',
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
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A passionate developer with a keen eye for design and a commitment
            to creating exceptional digital experiences that make a difference.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="bg-slate-800/50 p-6 rounded-xl backdrop-blur-sm"
            >
              <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center mb-4 text-purple-400">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-gray-400">{skill.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-20"
        >
          <div className="bg-slate-800/50 rounded-xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4">My Journey</h3>
            <p className="text-gray-400 mb-6">
              As a passionate and motivated fresher in web development, I am
              eager to apply my skills to create user-centric digital solutions.
              I am enthusiastic about learning and contributing to diverse
              projects that enhance user experiences.
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div className="p-4">
                <div className="text-3xl font-bold text-purple-400 mb-2">
                  Fresher
                </div>
                <div className="text-gray-400">Years Experience</div>
              </div>
              <div className="p-4">
                <div className="text-3xl font-bold text-purple-400 mb-2">7</div>
                <div className="text-gray-400">Projects Completed</div>
              </div>
              {/* <div className="p-4">
                <div className="text-3xl font-bold text-purple-400 mb-2"></div>
                <div className="text-gray-400">Happy Clients</div>
              </div> */}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
