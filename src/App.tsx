import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Resume from './components/Resume';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';

function App() {
  const [time, setTime] = useState(new Date());

  // Update time every minute
  setInterval(() => {
    setTime(new Date());
  }, 60000);

  return (
    <Router>
      <div className="min-h-screen bg-slate-900 text-white relative">
        {/* Main Content */}
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>

        {/* OS-like Taskbar */}
        <div className="fixed bottom-0 left-0 right-0 h-12 bg-slate-800/90 backdrop-blur-sm border-t border-slate-700/50 flex items-center justify-between px-4 z-50">
          {/* Start Menu Button */}
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-slate-700/50 rounded-lg transition-colors duration-300">
              <img src="/src/assets/Image/avatar.svg" alt="Logo" className="w-6 h-6" />
            </button>
          </div>

          {/* Center Quick Launch */}
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-slate-700/50 rounded-lg transition-colors duration-300 group">
              <span className="text-purple-400 group-hover:text-purple-300">⌘</span>
            </button>
            <button className="p-2 hover:bg-slate-700/50 rounded-lg transition-colors duration-300 group">
              <span className="text-purple-400 group-hover:text-purple-300">⌥</span>
            </button>
          </div>

          {/* System Tray */}
          <div className="flex items-center gap-4">
            <div className="text-sm text-gray-400">
              {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App; 