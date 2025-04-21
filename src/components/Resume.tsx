import { motion } from 'framer-motion';
import { Download, Briefcase, GraduationCap, Award, Code2 } from 'lucide-react';

const Resume = () => {
  const skills = [
    { name: 'React/Next.js', icon: '/src/assets/Image/react.png' },
    { name: 'TypeScript', icon: '/src/assets/Image/typescript.png' },
    { name: 'Node.js', icon: '/src/assets/Image/nodejs.png' },
    { name: 'UI/UX Design', icon: '/src/assets/Image/figma.png' },
    { name: 'Python', icon: '/src/assets/Image/python.png' },
    { name: 'DevOps', icon: '/src/assets/Image/docker.png' },
  ];

  const experience = [
    {
      title: 'Frontend Developer',
      company: 'Tech Solutions Inc.',
      period: '2023 - Internship',
      description:
        'Led the frontend development team in creating modern web applications using React and TypeScript.',
    },
  ];

  const education = [
    {
      degree: 'Bachelor of Computer Application',
      school: 'Bhagawan Mahavir University',
      period: '2022 - 2025',
      description: 'Major in Computer Application with a minor in Design.',
    },
  ];

  const certifications = [
    { name: 'AWS Certified Developer', date: '2023' },
    { name: 'Google Cloud Professional', date: '2023' },
    { name: 'React Native Specialist', date: '2022' },
    { name: 'UI/UX Design Professional', date: '2022' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-16">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-4xl font-bold mb-4">Resume</h2>
            <p className="text-gray-400">
              My professional journey and skillset
            </p>
          </motion.div>
          <motion.button
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
          >
            Download CV <Download size={20} />
          </motion.button>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left Column - Skills & Certifications */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-4 space-y-8"
          >
            {/* Technical Skills */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="bg-slate-800/50 p-8 rounded-xl backdrop-blur-sm hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <Code2 className="text-purple-400" size={24} />
                <h3 className="text-2xl font-semibold">Technical Skills</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill) => (
                  <motion.div 
                    key={skill.name}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-slate-700/50 p-4 rounded-lg hover:bg-slate-700 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 cursor-pointer group"
                  >
                    <img 
                      src={skill.icon} 
                      alt={skill.name} 
                      className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                    <span className="text-sm text-center mt-3 block group-hover:text-purple-400 transition-colors duration-300">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="bg-slate-800/50 p-8 rounded-xl backdrop-blur-sm hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <Award className="text-purple-400" size={24} />
                <h3 className="text-2xl font-semibold">Certifications</h3>
              </div>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="p-4 rounded-lg bg-slate-700/50 hover:bg-slate-700 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 cursor-pointer group"
                  >
                    <p className="font-medium group-hover:text-purple-400 transition-colors duration-300">
                      {cert.name}
                    </p>
                    <p className="text-sm text-purple-400 mt-1 group-hover:text-purple-300">
                      {cert.date}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Experience & Education */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="lg:col-span-8 space-y-8"
          >
            {/* Experience */}
            <motion.div 
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className="bg-slate-800/50 p-8 rounded-xl backdrop-blur-sm hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-8">
                <Briefcase className="text-purple-400" size={24} />
                <h3 className="text-2xl font-semibold">Work Experience</h3>
              </div>
              <div className="space-y-12">
                {experience.map((job, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 10 }}
                    className="relative pl-8 border-l-2 border-purple-600/30 group hover:border-purple-600 transition-colors duration-300"
                  >
                    <div className="absolute w-4 h-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full -left-[9px] top-2 group-hover:scale-125 transition-transform duration-300" />
                    <div className="absolute w-2 h-2 bg-white rounded-full -left-[5px] top-3 group-hover:scale-125 transition-transform duration-300" />
                    <h4 className="text-xl font-semibold group-hover:text-purple-400 transition-colors duration-300">
                      {job.title}
                    </h4>
                    <p className="text-purple-400 text-sm mb-3 group-hover:text-purple-300">
                      {job.company} | {job.period}
                    </p>
                    <p className="text-gray-400 group-hover:text-gray-300">
                      {job.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div 
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className="bg-slate-800/50 p-8 rounded-xl backdrop-blur-sm hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-8">
                <GraduationCap className="text-purple-400" size={24} />
                <h3 className="text-2xl font-semibold">Education</h3>
              </div>
              <div className="space-y-12">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 10 }}
                    className="relative pl-8 border-l-2 border-purple-600/30 group hover:border-purple-600 transition-colors duration-300"
                  >
                    <div className="absolute w-4 h-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full -left-[9px] top-2 group-hover:scale-125 transition-transform duration-300" />
                    <div className="absolute w-2 h-2 bg-white rounded-full -left-[5px] top-3 group-hover:scale-125 transition-transform duration-300" />
                    <h4 className="text-xl font-semibold group-hover:text-purple-400 transition-colors duration-300">
                      {edu.degree}
                    </h4>
                    <p className="text-purple-400 text-sm mb-3 group-hover:text-purple-300">
                      {edu.school} | {edu.period}
                    </p>
                    <p className="text-gray-400 group-hover:text-gray-300">
                      {edu.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;