import React from "react";
import { motion } from "framer-motion";
import homeimage from "../assets/Image/home-main.svg";
import Type from "../assets/type";
import myimage from "../assets/Image/avatar.svg";
import { ArrowRight, Github, Linkedin, Twitter, MailCheck, MessageSquareText, QrCode } from "lucide-react";
import { Link } from "react-router-dom";
import TiltedCard from '../assets/TiltedCard ';


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
    {/* Left Side Content */}
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="w-full md:w-2/3 px-4"
    >
      <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
        LET ME {" "}
        <span className="bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent">
          INTRODUCE {' '}
        </span>
        MYSELF
      </h1>
      <p className="mt-5 text-base sm:text-lg">
        I fell in love with programming and I have at least learnt something, I think... 🤷‍♂️
      </p>
      <p className="mt-5 text-base sm:text-lg">
        I am fluent in classics like 
        <span className="italic text-purple-400"> JavaScript and Python.</span>
      </p>
      <p className="mt-5 text-base sm:text-lg">
        My field of interest is building new 
        <span className="italic text-purple-400"> Web Technologies and Products </span>
        and also in areas related to <span className="italic text-purple-400">Backend.</span>
      </p>
      <p className="mt-5 text-base sm:text-lg">
        Whenever possible, I also apply my passion for developing products with
        <span className="text-purple-400"> Node.js </span> and
        <span className="italic text-purple-400"> Modern JavaScript Frameworks </span>
        like <span className="text-purple-400">React.js and Next.js</span>
      </p>

      {/* Buttons and Links */}
      <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
        <Link
          to="/contact"
          className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full flex items-center gap-2 transition-colors text-white w-full sm:w-48 justify-center"
        >
          Get in touch <ArrowRight size={20} />
        </Link>
        <div className="flex gap-4">
          <a href="#" className="text-gray-400 hover:text-white transition-colors"><Github size={24} /></a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={24} /></a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={24} /></a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors"><MailCheck size={24} /></a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors"><MessageSquareText size={24}/></a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors"><QrCode size={24}/></a>
        </div>
      </div>
    </motion.div>

    {/* Right Side Image */}
    <div className="mt-6 md:mt-0 md:w-1/2 flex justify-center max-w-xs sm:max-w-sm">
      <TiltedCard
        imageSrc={myimage}
        altText="avatar"
        rotateAmplitude={12}
        scaleOnHover={1.2}
        showMobileWarning={false}
        displayOverlayContent={true}
      />
    </div>
  </div>
</motion.div>

    </>
  );
};

export default Home;