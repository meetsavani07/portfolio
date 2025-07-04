import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  Download,
  Briefcase,
  GraduationCap,
  Award,
  Code2,
  Calendar,
  MapPin,
  User,
  Star,
  Mail,
  Phone,
  ExternalLink,
  ChevronRight,
  Eye,
  X,
} from 'lucide-react';
import reactImg from '../assets/Image/react.png';
import jsImg from '../assets/Image/javascript.png';
import tsImg from '../assets/Image/typescript.png';
import nodejsImg from '../assets/Image/nodejs.png';
import UIUXImg from '../assets/Image/figma.png';
import myresume from '../assets/meet_resume.pdf';

const Resume = () => {
  const [showPDFModal, setShowPDFModal] = useState(false);

  const skills = [
    { name: 'JavaScript', icon: jsImg, color: 'from-yellow-400 to-yellow-600' },
    { name: 'TypeScript', icon: tsImg, color: 'from-blue-400 to-blue-600' },
    { name: 'React.JS', icon: reactImg, color: 'from-cyan-400 to-cyan-600' },
    { name: 'Node.js', icon: nodejsImg, color: 'from-green-400 to-green-600' },
    { name: 'UI/UX Design', icon: UIUXImg, color: 'from-pink-400 to-pink-600' },
  ];

  // Duplicate skills array for infinite scroll effect
  const infiniteSkills = [...skills, ...skills, ...skills];

  const experience = [
    {
      title: 'Frontend Developer',
      company: 'Tech Solutions Inc.',
      period: '2025 - Internship',
      location: 'On Site',
      description:
        'Led the frontend development team in creating modern web applications using React and TypeScript.',
      achievements: [
        'Developed responsive web applications',
        'Collaborated with design team',
        'Implemented modern UI/UX practices',
      ],
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Git'],
      link: '#',
    },
  ];

  const education = [
    {
      degree: 'Bachelor of Computer Application',
      school: 'Bhagawan Mahavir University',
      period: '2022 - 2025',
      location: 'Surat, Gujarat',
      description:
        'Major in Computer Application with focus on modern web technologies.',
      gpa: '8.3/10',
      courses: ['Data Structures', 'Web Development', 'Database Management', 'Software Engineering'],
      link: 'https://www.bmuni.ac.in/',
    },
  ];

  const certifications = [
    {
      name: 'React Specialist',
      issuer: 'Meta',
      date: '2024',
      icon: '🏆',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'UI/UX Design Professional',
      issuer: 'Google',
      date: '2023',
      icon: '🎨',
      color: 'from-pink-500 to-purple-500',
    },
  ];

  const personalInfo = {
    name: 'Meet Savani',
    title: 'Frontend Developer & UI/UX Designer',
    email: 'savanimeet11@gmail.com',
    phone: '+91 98243 57565',
    location: 'Surat, Gujarat, India',
    summary:
      'Passionate frontend developer with a creative mindset and dedication to crafting exceptional user experiences. Skilled in modern web technologies and design principles.',
  };

  const handleViewPDF = () => {
    setShowPDFModal(true);
  };

  const handleDownloadPDF = () => {
    const link = document.createElement('a');
    link.href = myresume;
    link.download = 'meet_savani_resume.pdf';
    link.click();
  };

  const handleViewInNewTab = () => {
    window.open(myresume, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-16 bg-gradient-to-br from-black via-slate-900 to-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-20"
        >
          <div className="relative inline-block mb-6">
            <h2 className="text-5xl font-black bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Resume
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full"></div>
          </div>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg font-mono leading-relaxed">
            Discover my professional journey, technical expertise, and creative
            achievements
          </p>
        </motion.div>

        {/* Personal Info Card */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-purple-500/30 transition-all duration-300">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-pink-500/20 to-orange-500/20 rounded-full blur-2xl"></div>

            <div className="relative z-10 grid lg:grid-cols-3 gap-8 items-center">
              {/* Profile Info */}
              <div className="lg:col-span-2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <User className="text-white" size={32} />
                  </div>
                  <div>
                    <h2 className="text-4xl font-bold text-white">
                      {personalInfo.name}
                    </h2>
                    <p className="text-xl text-blue-400 font-medium">
                      {personalInfo.title}
                    </p>
                  </div>
                </div>

                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  {personalInfo.summary}
                </p>

                {/* Contact Info Grid */}
                <div className="grid md:grid-cols-3 gap-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-3 p-4 bg-slate-700/50 rounded-xl border border-slate-600/30 hover:border-blue-500/50 transition-all duration-300"
                  >
                    <Mail className="text-blue-400" size={20} />
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wide">
                        Email
                      </p>
                      <p className="text-white font-medium">
                        {personalInfo.email}
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-3 p-4 bg-slate-700/50 rounded-xl border border-slate-600/30 hover:border-purple-500/50 transition-all duration-300"
                  >
                    <Phone className="text-purple-400" size={20} />
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wide">
                        Phone
                      </p>
                      <p className="text-white font-medium">
                        {personalInfo.phone}
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-3 p-4 bg-slate-700/50 rounded-xl border border-slate-600/30 hover:border-pink-500/50 transition-all duration-300"
                  >
                    <MapPin className="text-pink-400" size={20} />
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wide">
                        Location
                      </p>
                      <p className="text-white font-medium">
                        {personalInfo.location}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Resume Action Buttons */}
              <div className="flex flex-col gap-4 justify-center lg:justify-end">
                {/* View Resume Button */}
                <motion.div
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group"
                >
                  {/* Animated background glow */}
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 rounded-xl blur opacity-0 group-hover:opacity-75 transition-all duration-500"
                    animate={{
                      background: [
                        "linear-gradient(45deg, #059669, #0d9488, #0891b2)",
                        "linear-gradient(45deg, #0d9488, #0891b2, #059669)",
                        "linear-gradient(45deg, #0891b2, #059669, #0d9488)"
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

                  <button
                    onClick={handleViewPDF}
                    className="relative w-full bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:from-emerald-700 hover:via-teal-700 hover:to-cyan-700 text-white px-6 py-3 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 shadow-lg hover:shadow-emerald-500/25 font-semibold overflow-hidden"
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
                    <motion.div
                      className="relative z-10"
                      animate={{
                        scale: [1, 1.1, 1]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <Eye size={20} />
                    </motion.div>
                    
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
                      View Resume Online
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

                {/* Download Resume Button */}
                <motion.div
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group"
                >
                  {/* Animated background glow */}
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-xl blur opacity-0 group-hover:opacity-75 transition-all duration-500"
                    animate={{
                      background: [
                        "linear-gradient(45deg, #2563eb, #9333ea, #ec4899)",
                        "linear-gradient(45deg, #9333ea, #ec4899, #2563eb)",
                        "linear-gradient(45deg, #ec4899, #2563eb, #9333ea)"
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

                  <button
                    onClick={handleDownloadPDF}
                    className="relative w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 font-semibold overflow-hidden"
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
                    <motion.div
                      className="relative z-10"
                      animate={{
                        y: [0, -5, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <Download size={20} />
                    </motion.div>
                    
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
                      Download Resume
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
            </div>
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Skills & Certifications */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            {/* Technical Skills with Infinite Scroll */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-purple-500/30 transition-all duration-300 overflow-hidden">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Code2 className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Technical Skills
                </h3>
              </div>

              {/* Infinite Scroll Container */}
              <div className="relative h-80 overflow-hidden">
                {/* Gradient overlays for smooth fade effect */}
                <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-slate-800/50 to-transparent z-10"></div>
                <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-slate-800/50 to-transparent z-10"></div>
                
                {/* Scrolling Skills Container */}
                <motion.div
                  className="flex flex-col space-y-4"
                  animate={{
                    y: [0, -100 * (infiniteSkills.length / 3)]
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  {infiniteSkills.map((skill, index) => (
                    <motion.div
                      key={`${skill.name}-${index}`}
                      className="group flex items-center gap-4 p-4 bg-slate-700/30 rounded-xl border border-slate-600/30 hover:border-purple-500/50 transition-all duration-300 min-h-[80px]"
                      whileHover={{ 
                        scale: 1.05,
                        x: 10,
                        backgroundColor: "rgba(71, 85, 105, 0.5)"
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.div 
                        className="w-12 h-12 bg-slate-700/50 rounded-xl flex items-center justify-center flex-shrink-0"
                        whileHover={{ 
                          scale: 1.2,
                          rotate: 360
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-8 h-8 object-contain"
                        />
                      </motion.div>
                      
                      <div className="flex-1 min-w-0">
                        <motion.span 
                          className="font-semibold text-white group-hover:text-blue-400 transition-colors duration-300 block truncate"
                          whileHover={{ x: 5 }}
                        >
                          {skill.name}
                        </motion.span>
                      </div>
                      
                      {/* Floating skill indicator */}
                      <motion.div
                        className="w-3 h-3 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 1, 0.5]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Skills Summary */}
              <motion.div 
                className="mt-6 p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-500/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <div className="flex items-center justify-between text-sm">
                  <span className="text-blue-400 font-medium">
                    🚀 Continuously Learning
                  </span>
                  <span className="text-purple-400 font-medium">
                    {skills.length}+ Technologies
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Certifications */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-purple-500/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Award className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Certifications
                </h3>
              </div>

              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="group p-4 rounded-xl bg-gradient-to-r from-slate-700/40 to-slate-600/40 hover:from-purple-600/20 hover:to-pink-600/20 transition-all duration-300 border border-slate-600/30 hover:border-purple-500/50 cursor-pointer"
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${cert.color} rounded-xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        {cert.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white group-hover:text-purple-400 transition-colors duration-300 mb-1">
                          {cert.name}
                        </h4>
                        <p className="text-sm text-gray-400 group-hover:text-gray-300 mb-2">
                          {cert.issuer}
                        </p>
                        <div className="flex items-center gap-2">
                          <Calendar size={12} className="text-purple-400" />
                          <span className="text-xs text-purple-400 font-medium">
                            {cert.date}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Experience & Education */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Experience */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-green-500/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Briefcase className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Work Experience
                </h3>
              </div>

              <div className="space-y-8">
                {experience.map((job, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ 
                      scale: 1.02, 
                      y: -5,
                      transition: { duration: 0.2 }
                    }}
                    className="relative pl-8 border-l-2 border-green-500/30 hover:border-green-500 transition-all duration-300 group cursor-pointer"
                  >
                    <motion.div 
                      className="absolute w-5 h-5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full -left-[11px] top-3 shadow-lg shadow-green-500/50"
                      whileHover={{ scale: 1.3, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    />

                    <div className="bg-gradient-to-r from-slate-700/40 to-slate-600/40 rounded-xl p-6 group-hover:from-green-600/10 group-hover:to-emerald-600/10 transition-all duration-300 border border-slate-600/30 hover:border-green-500/50 hover:shadow-lg hover:shadow-green-500/10">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <h4 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors duration-300">
                            {job.title}
                          </h4>
                          <motion.div
                            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            whileHover={{ x: 5 }}
                          >
                            <ChevronRight className="text-green-400" size={20} />
                          </motion.div>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-green-400 bg-green-500/10 px-3 py-1 rounded-full group-hover:bg-green-500/20 transition-colors duration-300">
                          <Calendar size={14} />
                          <span className="font-medium">{job.period}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-6 mb-4 text-sm text-gray-300">
                        <span className="font-medium text-white group-hover:text-green-400 transition-colors duration-300">
                          {job.company}
                        </span>
                        <div className="flex items-center gap-2">
                          <MapPin size={14} className="text-green-400" />
                          <span>{job.location}</span>
                        </div>
                        {job.link && (
                          <motion.a
                            href={job.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-green-400 hover:text-green-300 transition-colors duration-300"
                            whileHover={{ scale: 1.05 }}
                            onClick={(e) => e.stopPropagation()}
                          >
                          </motion.a>
                        )}
                      </div>

                      <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                        {job.description}
                      </p>

                      {/* Technologies */}
                      <div className="mb-6">
                        <h5 className="font-semibold text-green-400 mb-3 flex items-center gap-2">
                          <Code2 size={16} />
                          Technologies Used:
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {job.technologies.map((tech, techIndex) => (
                            <motion.span
                              key={techIndex}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.8 + techIndex * 0.1 }}
                              whileHover={{ scale: 1.1, y: -2 }}
                              className="text-xs bg-green-500/20 text-green-400 px-3 py-1 rounded-full border border-green-500/30 hover:bg-green-500/30 hover:border-green-500/50 transition-all duration-300 cursor-pointer"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h5 className="font-semibold text-green-400 flex items-center gap-2">
                          <Star size={16} />
                          Key Achievements:
                        </h5>
                        <ul className="space-y-2 ml-6">
                          {job.achievements.map((achievement, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.8 + i * 0.1 }}
                              whileHover={{ x: 5, scale: 1.02 }}
                              className="text-gray-300 text-sm flex items-start gap-3 group-hover:text-gray-200 transition-all duration-300 cursor-pointer"
                            >
                              <motion.span 
                                className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"
                                whileHover={{ scale: 1.5 }}
                              />
                              {achievement}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-orange-500/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg">
                  <GraduationCap className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">Education</h3>
              </div>

              <div className="space-y-8">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    whileHover={{ 
                      scale: 1.02, 
                      y: -5,
                      transition: { duration: 0.2 }
                    }}
                    className="relative pl-8 border-l-2 border-orange-500/30 hover:border-orange-500 transition-all duration-300 group cursor-pointer"
                  >
                    <motion.div 
                      className="absolute w-5 h-5 bg-gradient-to-r from-orange-500 to-red-500 rounded-full -left-[11px] top-3 shadow-lg shadow-orange-500/50"
                      whileHover={{ scale: 1.3, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    />

                    <div className="bg-gradient-to-r from-slate-700/40 to-slate-600/40 rounded-xl p-6 group-hover:from-orange-600/10 group-hover:to-red-600/10 transition-all duration-300 border border-slate-600/30 hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/10">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <h4 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300">
                            {edu.degree}
                          </h4>
                          <motion.div
                            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            whileHover={{ x: 5 }}
                          >
                            <ChevronRight className="text-orange-400" size={20} />
                          </motion.div>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-orange-400 bg-orange-500/10 px-3 py-1 rounded-full group-hover:bg-orange-500/20 transition-colors duration-300">
                          <Calendar size={14} />
                          <span className="font-medium">{edu.period}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-6 mb-4 text-sm text-gray-300 flex-wrap">
                        <span className="font-medium text-white group-hover:text-orange-400 transition-colors duration-300">
                          {edu.school}
                        </span>
                        <div className="flex items-center gap-2">
                          <MapPin size={14} className="text-orange-400" />
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center gap-2 bg-orange-500/10 px-2 py-1 rounded-full group-hover:bg-orange-500/20 transition-colors duration-300">
                          <Star size={14} className="text-orange-400" />
                          <span className="text-orange-400 font-medium">
                            GPA: {edu.gpa}
                          </span>
                        </div>
                        {edu.link && (
                          <motion.a
                            href={edu.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-orange-400 hover:text-orange-300 transition-colors duration-300"
                            whileHover={{ scale: 1.05 }}
                            onClick={(e) => e.stopPropagation()}
                          >
                          </motion.a>
                        )}
                      </div>

                      <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
                        {edu.description}
                      </p>

                      {/* Courses */}
                      <div className="space-y-3">
                        <h5 className="font-semibold text-orange-400 flex items-center gap-2">
                          <Star size={16} />
                          Key Courses:
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {edu.courses.map((course, courseIndex) => (
                            <motion.span
                              key={courseIndex}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.8 + courseIndex * 0.1 }}
                              whileHover={{ scale: 1.1, y: -2 }}
                              className="text-xs bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full border border-orange-500/30 hover:bg-orange-500/30 hover:border-orange-500/50 transition-all duration-300 cursor-pointer"
                            >
                              {course}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* PDF Modal */}
      {showPDFModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowPDFModal(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="bg-slate-800/90 backdrop-blur-md rounded-2xl p-6 max-w-4xl w-full max-h-[90vh] border border-slate-700/50"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Eye className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Resume Preview</h3>
                  <p className="text-sm text-gray-400">Meet Savani - Frontend Developer</p>
                </div>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setShowPDFModal(false)}
                className="w-10 h-10 bg-slate-700/50 hover:bg-slate-600/50 rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
              >
                <X size={20} />
              </motion.button>
            </div>

            {/* PDF Viewer Options */}
            <div className="bg-slate-700/30 rounded-xl p-6 mb-6">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Eye className="text-white" size={32} />
                </div>
                
                <h4 className="text-lg font-semibold text-white">Choose Viewing Option</h4>
                <p className="text-gray-400 text-sm max-w-md mx-auto">
                  Select how you'd like to view the resume. You can open it in a new tab for better viewing experience.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative group"
                  >
                    {/* Animated background glow */}
                    <motion.div
                      className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl blur opacity-0 group-hover:opacity-75 transition-all duration-500"
                      animate={{
                        background: [
                          "linear-gradient(45deg, #059669, #0d9488)",
                          "linear-gradient(45deg, #0d9488, #059669)",
                          "linear-gradient(45deg, #059669, #0d9488)"
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

                    <button
                      onClick={handleViewInNewTab}
                      className="relative bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-6 py-3 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 shadow-lg hover:shadow-emerald-500/25 font-semibold overflow-hidden"
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
                      <motion.div
                        className="relative z-10"
                        animate={{
                          scale: [1, 1.1, 1]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <ExternalLink size={18} />
                      </motion.div>
                      
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
                        Open in New Tab
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
                  
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative group"
                  >
                    {/* Animated background glow */}
                    <motion.div
                      className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-0 group-hover:opacity-75 transition-all duration-500"
                      animate={{
                        background: [
                          "linear-gradient(45deg, #2563eb, #9333ea)",
                          "linear-gradient(45deg, #9333ea, #2563eb)",
                          "linear-gradient(45deg, #2563eb, #9333ea)"
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

                    <button
                      onClick={handleDownloadPDF}
                      className="relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 font-semibold overflow-hidden"
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
                      <motion.div
                        className="relative z-10"
                        animate={{
                          y: [0, -5, 0]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <Download size={18} />
                      </motion.div>
                      
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
                        Download PDF
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
              </div>
            </div>

            {/* Quick Info */}
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-slate-700/20 rounded-lg p-4 text-center">
                <div className="text-emerald-400 font-semibold text-sm">File Format</div>
                <div className="text-white font-medium">PDF Document</div>
              </div>
              <div className="bg-slate-700/20 rounded-lg p-4 text-center">
                <div className="text-emerald-400 font-semibold text-sm">Last Updated</div>
                <div className="text-white font-medium">December 2024</div>
              </div>
              <div className="bg-slate-700/20 rounded-lg p-4 text-center">
                <div className="text-emerald-400 font-semibold text-sm">File Size</div>
                <div className="text-white font-medium">~2.5 MB</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Resume;