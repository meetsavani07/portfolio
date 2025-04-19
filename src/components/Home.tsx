import React from "react";
import { motion } from "framer-motion";
import homeimage from "../assets/Image/home-main.svg";
import Type from "../assets/type";
import { ArrowRight, Github, Linkedin, Twitter, MailCheck, MessageSquareText } from "lucide-react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen pt-16 flex items-center"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-3xl md:text-5xl font-bold mb-6">
                <span className="text-4xl bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                  Hi There!
                </span>
                <span className="wave text-4xl" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
                <br />I'm Meet Savani.
                <div
                  className="text-3xl md:text-4xl mt-10 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent"
                  style={{ paddingBottom: 20, textAlign: "left" }}
                >
                  <Type />
                </div>
              </h1>
              <p className="text-gray-400 text-lg mb-8">
                Crafting digital experiences that blend creativity with technical
                excellence. Let's bring your vision to life.
              </p>
            </motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="relative"
            >
              <div className="aspect-square rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 absolute inset-0 blur-3xl" />
              <img
                src={homeimage}
                alt="Profile"
                className="rounded-2xl w-full object-cover relative z-10"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen pt-16 flex flex-col items-center px-4 md:px-8"
      >
        <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl min-h-screen text-left md:text-left">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="w-full px-4"
          >
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-8">
              LET ME {" "}
              <span className="bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent">
                INTRODUCE {" "}
              </span>
              MYSELF
            </h1>
            
            <div className="space-y-6 text-gray-300">
              <p>
                I'm a passionate frontend developer with a creative mindset and a dedication to crafting exceptional user experiences. 🚀
              </p>
              
              <p>
                My expertise lies in modern web technologies, particularly{" "}
                <span className="text-purple-400">React.js, Next.js, and TypeScript</span>. I love bringing designs to life with smooth animations and responsive layouts.
              </p>
              
              <p>
                I have a strong foundation in{" "}
                <span className="text-purple-400">HTML5, CSS3, and JavaScript</span>, and I'm constantly learning new technologies and best practices.
              </p>
              
              <p>
                My approach combines clean code principles with modern design patterns to create scalable and maintainable applications. I'm particularly interested in{" "}
                <span className="text-purple-400">performance optimization and accessibility</span>.
              </p>
              
              <p>
                Currently exploring the exciting world of{" "}
                <span className="text-purple-400">backend development with Node.js and database management</span> to become a more well-rounded developer.
              </p>
              
              <p>
                I believe in the power of continuous learning and staying updated with the latest industry trends and technologies. 📚
              </p>
            </div>

            {/* Buttons and Links */}
            <div className="mt-12 flex flex-col sm:flex-row items-center gap-4">
              <Link
                to="/contact"
                className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full flex items-center gap-2 transition-colors text-white w-full sm:w-48 justify-center"
              >
                Get in touch <ArrowRight size={20} />
              </Link>
              <div className="flex gap-4">
                <a
                  href="https://github.com/meetsavani07"
                  className="text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={24} />
                </a>

                <a
                  href="https://www.linkedin.com/in/meet-savani-30088931b/"
                  className="text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={24} />
                </a>

                <a
                  href="https://x.com/meetsavani07"
                  className="text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter size={24} />
                </a>

                <a
                  href="mailto:savanimeet11@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MailCheck size={24} />
                </a>

                <a
                  href="https://wa.me/9824357565"
                  className="text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageSquareText size={24} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Home;