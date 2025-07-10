import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState(0);

  const loadingTexts = [
    "Initializing...",
    "Loading Components...",
    "Setting up Interface...",
    "Almost Ready...",
    "Welcome!"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onComplete]);

  useEffect(() => {
    const textTimer = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % loadingTexts.length);
    }, 800);

    return () => clearInterval(textTimer);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="fixed inset-0 z-50 bg-gradient-to-br from-black via-slate-900 to-black flex items-center justify-center"
      >
        {/* Animated background particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-purple-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.1,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Main loading content */}
        <div className="relative z-10 text-center">
          {/* Logo/Name with typewriter effect */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-12"
          >
            {/* Animated Name with Letter-by-Letter Animation */}
            <div className="text-6xl md:text-8xl font-black mb-4">
              {"Meet Savani".split("").map((char, index) => (
                <motion.span
                  key={index}
                  className="inline-block bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent"
                  initial={{ 
                    opacity: 0, 
                    y: 50, 
                    rotateX: -90,
                    scale: 0.5
                  }}
                  animate={{ 
                    opacity: 1, 
                    y: 0, 
                    rotateX: 0,
                    scale: 1
                  }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.1,
                    ease: "easeOut",
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{
                    scale: 1.2,
                    rotateY: 360,
                    color: "#ec4899"
                  }}
                  style={{
                    backgroundSize: "200% 200%",
                    transformOrigin: "center center"
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </div>
            
            {/* Animated Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="text-lg md:text-xl text-gray-400 font-mono mb-4"
            >
              {"Frontend Developer & UI Designer".split("").map((char, index) => (
                <motion.span
                  key={index}
                  className="inline-block"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.05,
                    delay: 1.2 + index * 0.03
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.div>
            
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, delay: 1.8 }}
              className="h-1 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full mx-auto mt-4 relative overflow-hidden"
              style={{ maxWidth: "300px" }}
            >
              {/* Animated glow effect */}
              <motion.div
                className="absolute top-0 left-0 h-full bg-white rounded-full"
                animate={{
                  x: ["-100%", "100%"],
                  opacity: [0, 0.8, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
                style={{ width: "30%" }}
              />
            </motion.div>
          </motion.div>

          {/* Rotating loading ring */}
          <div className="relative mb-8">
            <motion.div
              className="w-32 h-32 mx-auto relative"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute inset-0 rounded-full border-4 border-purple-500/20" />
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-transparent border-t-purple-500 border-r-pink-500"
                animate={{ rotate: 360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
            
            {/* Inner pulsing circle */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>

          {/* Progress bar */}
          <div className="w-80 mx-auto mb-6">
            <div className="bg-slate-800/50 rounded-full h-2 overflow-hidden backdrop-blur-sm border border-slate-700/50">
              <motion.div
                className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full relative overflow-hidden"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {/* Shimmer effect on progress bar */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                  animate={{
                    x: ["-100%", "100%"]
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            </div>
            
            {/* Progress percentage */}
            <motion.div 
              className="text-center mt-3 text-purple-400 font-mono text-lg font-semibold"
              animate={{
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {progress}%
            </motion.div>
          </div>

          {/* Loading text with typewriter effect */}
          <div className="text-gray-300 font-mono text-lg h-8 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentText}
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.8 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="flex items-center"
              >
                {/* Typewriter effect for loading text */}
                <span className="overflow-hidden">
                  {loadingTexts[currentText].split("").map((char, index) => (
                    <motion.span
                      key={`${currentText}-${index}`}
                      className="inline-block"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.05,
                        delay: index * 0.03
                      }}
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </span>
                
                {/* Animated cursor */}
                <motion.span
                  animate={{ 
                    opacity: [1, 0],
                    scaleY: [1, 0.8, 1]
                  }}
                  transition={{ 
                    duration: 0.8, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="ml-1 text-purple-400 font-bold"
                >
                  |
                </motion.span>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Floating text elements */}
          <div className="absolute inset-0 pointer-events-none">
            {["React", "TypeScript", "Tailwind", "Framer"].map((tech, index) => (
              <motion.div
                key={tech}
                className="absolute text-purple-400/30 font-mono text-sm"
                style={{
                  left: `${20 + index * 20}%`,
                  top: `${30 + (index % 2) * 40}%`,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: [0, 0.6, 0],
                  scale: [0, 1, 0],
                  y: [0, -30, -60],
                  rotate: [0, 360]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: 2 + index * 0.5,
                  ease: "easeOut"
                }}
              >
                {tech}
              </motion.div>
            ))}
          </div>

          {/* Glitch effect text (appears occasionally) */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl md:text-8xl font-black text-red-500/20 pointer-events-none"
            animate={{
              opacity: [0, 0, 0, 0.3, 0],
              x: [0, -2, 2, -1, 0],
              textShadow: [
                "0 0 0 transparent",
                "2px 0 0 #ff0000, -2px 0 0 #00ff00",
                "0 0 0 transparent"
              ]
            }}
            transition={{
              duration: 0.2,
              repeat: Infinity,
              repeatDelay: 3,
              ease: "easeInOut"
            }}
          >
            Meet Savani
          </motion.div>

          {/* Floating elements around the loader */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`float-${i}`}
              className="absolute w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
              style={{
                left: '50%',
                top: '50%',
              }}
              animate={{
                x: [0, Math.cos(i * 45 * Math.PI / 180) * 150],
                y: [0, Math.sin(i * 45 * Math.PI / 180) * 150],
                scale: [0, 1, 0],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Bottom decorative elements */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <motion.div
            className="flex space-x-2"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-purple-400 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;