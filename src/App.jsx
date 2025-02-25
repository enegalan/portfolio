import './App.css';
import 'aos/dist/aos.css';

import React from 'react';

import Header from './Components/Header';
import Tools from './Components/Tools';
import ProjectList from './Components/ProjectList';
import Contact from './Components/Contact';
import HoverText from './Components/HoverText';

function App() {
  return (
    <>
      <Header />
      <div id="tools-tech-section">
        <HoverText style={{ fontSize: '2rem', textWrap: 'balance' }} string='Tools and Technologies' />
      </div>
      <Tools />
      <ProjectList />
      <Contact />
    </>
  );
}

export default App;
