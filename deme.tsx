  import { motion } from "framer-motion";
  import { Download, Briefcase, GraduationCap, Award, Code2, Calendar, MapPin, User, Star, Mail, Phone} from "lucide-react";
  import reactImg from "../assets/Image/react.png";
  import jsImg from "../assets/Image/javascript.png";
  import tsImg from "../assets/Image/typescript.png";
  import nodejsImg from "../assets/Image/nodejs.png";
  import UIUXImg from "../assets/Image/figma.png";
  import myresume from '../assets/meet_resume.pdf';

  const Resume = () => {
    const skills = [
      { name: "JavaScript", icon: jsImg, level: 85, color: "from-yellow-400 to-yellow-600" },
      { name: "TypeScript", icon: tsImg, level: 80, color: "from-blue-400 to-blue-600" },
      { name: "React.JS", icon: reactImg, level: 90, color: "from-cyan-400 to-cyan-600" },
      { name: "Node.js", icon: nodejsImg, level: 70, color: "from-green-400 to-green-600" },
      { name: "UI/UX Design", icon: UIUXImg, level: 85, color: "from-pink-400 to-pink-600" },
    ];

    const experience = [
      {
        title: "Frontend Developer",
        company: "Tech Solutions Inc.",
        period: "2023 - Internship",
        location: "Remote",
        description: "Led the frontend development team in creating modern web applications using React and TypeScript.",
        achievements: [
          "Developed responsive web applications",
          "Collaborated with design team",
          "Implemented modern UI/UX practices"
        ]
      },
    ];

    const education = [
      {
        degree: "Bachelor of Computer Application",
        school: "Bhagawan Mahavir University",
        period: "2022 - 2025",
        location: "Surat, Gujarat",
        description: "Major in Computer Application with focus on modern web technologies.",
        gpa: "8.5/10"
      },
    ];

    const certifications = [
      { name: "React Native Specialist", issuer: "Meta", date: "2022", icon: "🏆", color: "from-blue-500 to-cyan-500" },
      { name: "UI/UX Design Professional", issuer: "Google", date: "2022", icon: "🎨", color: "from-pink-500 to-purple-500" },
    ];

    const personalInfo = {
      name: "Meet Savani",
      title: "Frontend Developer & UI/UX Designer",
      email: "savanimeet11@gmail.com",
      phone: "+91 98243 57565",
      location: "Surat, Gujarat, India",
      summary: "Passionate frontend developer with a creative mindset and dedication to crafting exceptional user experiences. Skilled in modern web technologies and design principles."
    };

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen pt-16 bg-gradient-to-br from-gray-900 via-gray-800 to-black"
      >
        {/* Animated Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-500/10 to-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Header Section */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-16"
          >
            <div className="relative inline-block">
              <motion.h1 
                className="text-6xl font-black mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Resume
              </motion.h1>
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-32 h-1.5 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full"></div>
            </div>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-gray-300 max-w-3xl mx-auto mt-8 text-xl font-light leading-relaxed"
            >
              Discover my professional journey, technical expertise, and creative achievements
            </motion.p>
          </motion.div>

          {/* Hero Profile Card */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-16"
          >
            <div className="relative bg-gradient-to-r from-gray-800/80 to-gray-700/80 backdrop-blur-xl rounded-3xl p-8 border border-gray-600/30 overflow-hidden">
              {/* Decorative elements */}
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
                      <h2 className="text-4xl font-bold text-white">{personalInfo.name}</h2>
                      <p className="text-xl text-blue-400 font-medium">{personalInfo.title}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-lg leading-relaxed mb-8">{personalInfo.summary}</p>
                  
                  {/* Contact Info Grid */}
                  <div className="grid md:grid-cols-3 gap-4">
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-3 p-4 bg-gray-700/50 rounded-xl border border-gray-600/30 hover:border-blue-500/50 transition-all duration-300"
                    >
                      <Mail className="text-blue-400" size={20} />
                      <div>
                        <p className="text-xs text-gray-400 uppercase tracking-wide">Email</p>
                        <p className="text-white font-medium">{personalInfo.email}</p>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-3 p-4 bg-gray-700/50 rounded-xl border border-gray-600/30 hover:border-purple-500/50 transition-all duration-300"
                    >
                      <Phone className="text-purple-400" size={20} />
                      <div>
                        <p className="text-xs text-gray-400 uppercase tracking-wide">Phone</p>
                        <p className="text-white font-medium">{personalInfo.phone}</p>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-3 p-4 bg-gray-700/50 rounded-xl border border-gray-600/30 hover:border-pink-500/50 transition-all duration-300"
                    >
                      <MapPin className="text-pink-400" size={20} />
                      <div>
                        <p className="text-xs text-gray-400 uppercase tracking-wide">Location</p>
                        <p className="text-white font-medium">{personalInfo.location}</p>
                      </div>
                    </motion.div>
                  </div>
                </div>
                
                {/* Download Button */}
                <div className="flex justify-center lg:justify-end">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      const link = document.createElement("a");
                      link.href = myresume;
                      link.download = "meet_savani_resume.pdf";
                      link.click();
                    }}
                    className="group relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-2xl flex items-center gap-3 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 font-semibold text-lg"
                  >
                    <Download size={24} className="group-hover:animate-bounce" />
                    Download Resume
                    <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>


          {/* Main Content */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Skills & Certifications */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="space-y-8"
            >
              {/* Technical Skills */}
              <div className="bg-gray-800/60 backdrop-blur-xl rounded-2xl p-6 border border-gray-600/30 hover:border-blue-500/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                    <Code2 className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Technical Skills</h3>
                </div>
                
                <div className="space-y-6">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="group"
                    >
                      <div className="flex items-center gap-4 mb-3">
                        <div className="w-12 h-12 bg-gray-700/50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <img
                            src={skill.icon}
                            alt={skill.name}
                            className="w-8 h-8 object-contain"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-center">
                            <span className="font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                              {skill.name}
                            </span>
                            <span className="text-sm font-bold text-blue-400">
                              {skill.level}%
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="w-full bg-gray-700/50 rounded-full h-3 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ delay: 0.7 + index * 0.1, duration: 1.2, ease: "easeOut" }}
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                        >
                          <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div className="bg-gray-800/60 backdrop-blur-xl rounded-2xl p-6 border border-gray-600/30 hover:border-purple-500/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                    <Award className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Certifications</h3>
                </div>
                
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      whileHover={{ scale: 1.02, y: -2 }}
                      className="group p-4 rounded-xl bg-gradient-to-r from-gray-700/40 to-gray-600/40 hover:from-purple-600/20 hover:to-pink-600/20 transition-all duration-300 border border-gray-600/30 hover:border-purple-500/50 cursor-pointer"
                    >
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${cert.color} rounded-xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
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
                            <span className="text-xs text-purple-400 font-medium">{cert.date}</span>
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
              <div className="bg-gray-800/60 backdrop-blur-xl rounded-2xl p-8 border border-gray-600/30 hover:border-green-500/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
                    <Briefcase className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Work Experience</h3>
                </div>
                
                <div className="space-y-8">
                  {experience.map((job, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="relative pl-8 border-l-2 border-green-500/30 hover:border-green-500 transition-colors duration-300 group"
                    >
                      <div className="absolute w-5 h-5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full -left-[11px] top-3 group-hover:scale-125 transition-transform duration-300 shadow-lg shadow-green-500/50" />
                      
                      <div className="bg-gradient-to-r from-gray-700/40 to-gray-600/40 rounded-xl p-6 group-hover:from-green-600/10 group-hover:to-emerald-600/10 transition-all duration-300 border border-gray-600/30 hover:border-green-500/50">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                          <h4 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors duration-300">
                            {job.title}
                          </h4>
                          <div className="flex items-center gap-2 text-sm text-green-400 bg-green-500/10 px-3 py-1 rounded-full">
                            <Calendar size={14} />
                            <span className="font-medium">{job.period}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-6 mb-4 text-sm text-gray-300">
                          <span className="font-medium text-white">{job.company}</span>
                          <div className="flex items-center gap-2">
                            <MapPin size={14} className="text-green-400" />
                            <span>{job.location}</span>
                          </div>
                        </div>
                        
                        <p className="text-gray-300 mb-6 leading-relaxed">
                          {job.description}
                        </p>
                        
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
                                className="text-gray-300 text-sm flex items-start gap-3"
                              >
                                <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
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
              <div className="bg-gray-800/60 backdrop-blur-xl rounded-2xl p-8 border border-gray-600/30 hover:border-orange-500/30 transition-all duration-300">
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
                      className="relative pl-8 border-l-2 border-orange-500/30 hover:border-orange-500 transition-colors duration-300 group"
                    >
                      <div className="absolute w-5 h-5 bg-gradient-to-r from-orange-500 to-red-500 rounded-full -left-[11px] top-3 group-hover:scale-125 transition-transform duration-300 shadow-lg shadow-orange-500/50" />
                      
                      <div className="bg-gradient-to-r from-gray-700/40 to-gray-600/40 rounded-xl p-6 group-hover:from-orange-600/10 group-hover:to-red-600/10 transition-all duration-300 border border-gray-600/30 hover:border-orange-500/50">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                          <h4 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300">
                            {edu.degree}
                          </h4>
                          <div className="flex items-center gap-2 text-sm text-orange-400 bg-orange-500/10 px-3 py-1 rounded-full">
                            <Calendar size={14} />
                            <span className="font-medium">{edu.period}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-6 mb-4 text-sm text-gray-300">
                          <span className="font-medium text-white">{edu.school}</span>
                          <div className="flex items-center gap-2">
                            <MapPin size={14} className="text-orange-400" />
                            <span>{edu.location}</span>
                          </div>
                          <div className="flex items-center gap-2 bg-orange-500/10 px-2 py-1 rounded-full">
                            <Star size={14} className="text-orange-400" />
                            <span className="text-orange-400 font-medium">GPA: {edu.gpa}</span>
                          </div>
                        </div>
                        
                        <p className="text-gray-300 leading-relaxed">
                          {edu.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    );
  };

  export default Resume;