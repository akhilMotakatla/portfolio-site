import React, { useState, useEffect } from 'react';
import './App.css';

import VideoIntro from './components/VideoIntro';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import WhatILike from './components/WhatILike';
import Trips from './components/Trips';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark');

  return (
    <div className="App">
      <CustomCursor />

      {/* ── Cinematic video intro — always the first thing the visitor sees ── */}
      <VideoIntro />

      {/* ── Portfolio content — below the video ── */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <AboutMe />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <WhatILike />
        <Trips />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
