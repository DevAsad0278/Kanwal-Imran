import React, { useState, useEffect } from 'react';
import BackgroundAnimations from './components/BackgroundAnimations';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { motion } from 'framer-motion';

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-900'
    }`}>
      <BackgroundAnimations />
      <Navigation isDark={isDark} setIsDark={setIsDark} />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Services />
        <Contact />
        <Footer />
      </motion.div>
    </div>
  );
}

export default App;