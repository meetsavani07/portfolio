import { motion } from 'framer-motion';
import { Code, Palette, Brain, Zap, Target, Heart } from 'lucide-react';

const About = () => {
  const skills = [
    {
      icon: <Code size={28} />,
      title: 'Development',
      description: 'Expert in modern web technologies and frameworks',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Palette size={28} />,
      title: 'Design',
      description: 'Creating beautiful and intuitive user interfaces',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: <Brain size={28} />,
      title: 'Problem Solving',
      description: 'Analytical approach to complex challenges',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: <Zap size={28} />,
      title: 'Performance',
      description: 'Optimizing applications for speed and efficiency',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: <Target size={28} />,
      title: 'Goal-Oriented',
      description: 'Focused on delivering results that matter',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Heart size={28} />,
      title: 'Passion',
      description: 'Genuine love for creating digital experiences',
      color: 'from-red-500 to-pink-500'
    },
  ];

  const achievements = [
    { number: "6+", label: "Projects Completed", description: "Successfully delivered web applications" },
    { number: "5+", label: "Technologies", description: "Modern frameworks and tools mastered" },
    { number: "100%", label: "Dedication", description: "Committed to excellence in every project" },
    { number: "24/7", label: "Learning", description: "Continuously improving and growing" }
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
              About Me
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full"></div>
          </div>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg font-mono leading-relaxed">
            A passionate developer with a keen eye for design and a commitment
            to creating exceptional digital experiences that make a difference in people's lives.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 h-full">
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`} />
                
                <div className={`w-16 h-16 bg-gradient-to-r ${skill.color} rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {skill.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-400 transition-colors duration-300">
                  {skill.title}
                </h3>
                
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 font-mono leading-relaxed">
                  {skill.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Journey Section */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="space-y-8"
          >
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-purple-500/30 transition-all duration-300">
              <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                My Journey
              </h3>
              
              <div className="space-y-6 text-gray-300 font-mono leading-relaxed">
                <p className="hover:text-white transition-colors duration-300 p-4 rounded-lg hover:bg-slate-700/20">
                  As a passionate and motivated fresher in web development, I am
                  eager to apply my skills to create user-centric digital solutions.
                  I am enthusiastic about learning and contributing to diverse
                  projects that enhance user experiences.
                </p>
                
                <p className="hover:text-white transition-colors duration-300 p-4 rounded-lg hover:bg-slate-700/20">
                  My journey began with curiosity about how websites work, which led me
                  to dive deep into frontend technologies. Every project teaches me
                  something new, and I'm constantly amazed by the possibilities that
                  modern web development offers.
                </p>
                
                <p className="hover:text-white transition-colors duration-300 p-4 rounded-lg hover:bg-slate-700/20">
                  I believe in writing clean, maintainable code and creating interfaces
                  that not only look great but also provide exceptional user experiences.
                  My goal is to bridge the gap between design and functionality.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-purple-500/30 transition-all duration-300">
              <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                Achievements
              </h3>
              
              <div className="grid grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="text-center p-6 bg-gradient-to-r from-slate-700/30 to-slate-600/30 rounded-xl hover:from-purple-600/10 hover:to-pink-600/10 transition-all duration-300 border border-slate-600/30 hover:border-purple-500/50 group"
                  >
                    <div className="text-3xl font-black text-purple-400 mb-2 group-hover:text-purple-300 transition-colors duration-300">
                      {achievement.number}
                    </div>
                    <div className="text-white font-semibold mb-1 group-hover:text-purple-400 transition-colors duration-300">
                      {achievement.label}
                    </div>
                    <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {achievement.description}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Philosophy Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-2xl p-12 border border-slate-700/50 hover:border-purple-500/30 transition-all duration-300">
            <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              My Philosophy
            </h3>
            
            <blockquote className="text-xl text-gray-300 font-mono leading-relaxed max-w-4xl mx-auto">
              "Great design is not just about how it looks, but how it works. I strive to create
              digital experiences that are not only visually stunning but also intuitive,
              accessible, and meaningful to users."
            </blockquote>
            
            <div className="mt-8 flex justify-center">
              <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;