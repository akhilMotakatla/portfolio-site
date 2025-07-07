import React from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Trips from './components/Trips';


function App() {
  return (
    <div className="App">
      <Header />

      <div className="about-contact-wrapper">
        <Contact />
        <AboutMe />
      </div>
      <Skills />
      <Experience />
      <Projects />
      <Trips />
    </div>
  );
}


export default App;
