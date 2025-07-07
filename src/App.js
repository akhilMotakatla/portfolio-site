import React from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Trips from './components/Trips';
import WhatILike from './components/WhatILike';


function App() {
  return (
    <div className="App">
      <Header />
      <Contact />
      <div className="main-sections">
       
        <AboutMe />
       
      </div>
       <Skills />
      <Experience />
      <Projects />
      <Trips />
      <WhatILike />
    </div>
  );
}


export default App;
