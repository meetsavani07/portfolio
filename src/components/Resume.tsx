import { motion } from 'framer-motion';
import { Download, Briefcase, GraduationCap, Award, Code2 } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';

const Resume = () => {
  const skills = [
    { name: 'React/Next.js', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'UI/UX Design', level: 75 },
    { name: 'Python', level: 70 },
    { name: 'DevOps', level: 65 },
  ];

  const experience = [
    {
      title: ' Frontend Developer',
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
          <ScrollAnimation
            from={{ opacity: 0, y: 30 }}
            to={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl font-bold mb-4">Resume</h2>
            <p className="text-gray-400">My professional journey and skillset</p>
          </ScrollAnimation>
          <ScrollAnimation
            from={{ opacity: 0, y: 30 }}
            to={{ opacity: 1, y: 0 }}
          >
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors whitespace-nowrap">
              Download CV <Download size={20} />
            </button>
          </ScrollAnimation>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left Column - Skills */}
          <ScrollAnimation
            from={{ opacity: 0, x: -50 }}
            to={{ opacity: 1, x: 0 }}
            threshold={[0, 0.5]}
            className="lg:col-span-4 space-y-8"
          >
            {/* Technical Skills */}
            <div className="bg-slate-800/50 p-8 rounded-xl backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6">
                <Code2 className="text-purple-400" size={24} />
                <h3 className="text-2xl font-semibold">Technical Skills</h3>
              </div>
              <div className="space-y-6">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-purple-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-slate-800/50 p-8 rounded-xl backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6">
                <Award className="text-purple-400" size={24} />
                <h3 className="text-2xl font-semibold">Certifications</h3>
              </div>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <ScrollAnimation
                    key={index}
                    from={{ opacity: 0, y: 20 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={[0, 0.5]}
                    className="p-4 rounded-lg bg-slate-700/50 hover:bg-slate-700 transition-colors"
                  >
                    <p className="font-medium">{cert.name}</p>
                    <p className="text-sm text-purple-400 mt-1">{cert.date}</p>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </ScrollAnimation>

          {/* Right Column - Experience & Education */}
          <ScrollAnimation
            from={{ opacity: 0, x: 50 }}
            to={{ opacity: 1, x: 0 }}
            threshold={[0, 0.5]}
            className="lg:col-span-8 space-y-8"
          >
            {/* Experience */}
            <div className="bg-slate-800/50 p-8 rounded-xl backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-8">
                <Briefcase className="text-purple-400" size={24} />
                <h3 className="text-2xl font-semibold">Work Experience</h3>
              </div>
              <div className="space-y-12">
                {experience.map((job, index) => (
                  <ScrollAnimation
                    key={index}
                    from={{ opacity: 0, y: 20 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={[0, 0.5]}
                    className="relative pl-8 border-l-2 border-purple-600/30"
                  >
                    <div className="absolute w-4 h-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full -left-[9px] top-2" />
                    <div className="absolute w-2 h-2 bg-white rounded-full -left-[5px] top-3" />
                    <h4 className="text-xl font-semibold">{job.title}</h4>
                    <p className="text-purple-400 text-sm mb-3">
                      {job.company} | {job.period}
                    </p>
                    <p className="text-gray-400">{job.description}</p>
                  </ScrollAnimation>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="bg-slate-800/50 p-8 rounded-xl backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-8">
                <GraduationCap className="text-purple-400" size={24} />
                <h3 className="text-2xl font-semibold">Education</h3>
              </div>
              <div className="space-y-12">
                {education.map((edu, index) => (
                  <ScrollAnimation
                    key={index}
                    from={{ opacity: 0, y: 20 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={[0, 0.5]}
                    className="relative pl-8 border-l-2 border-purple-600/30"
                  >
                    <div className="absolute w-4 h-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full -left-[9px] top-2" />
                    <div className="absolute w-2 h-2 bg-white rounded-full -left-[5px] top-3" />
                    <h4 className="text-xl font-semibold">{edu.degree}</h4>
                    <p className="text-purple-400 text-sm mb-3">
                      {edu.school} | {edu.period}
                    </p>
                    <p className="text-gray-400">{edu.description}</p>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;