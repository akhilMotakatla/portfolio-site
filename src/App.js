import React from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Contact />
      <AboutMe />
      <Skills />
      <Experience />
      <Projects />
      
      
    </div>
  );
}

export default App;
