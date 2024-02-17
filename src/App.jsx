import './App.css';
import 'aos/dist/aos.css';

import React from 'react';

import Header from './Components/Header';
import Tools from './Components/Tools';
import DeveloperQuotes from './Components/DeveloperQuotes';
import ProjectList from './Components/ProjectList';
import Contact from './Components/Contact';

function App() {
  return (
    <>
      <Header />
      <div id="tools-tech-section">
        <h2>Tools and Technologies</h2>
      </div>
      <Tools />
      <DeveloperQuotes />
      <ProjectList />
      <Contact />
    </>
  );
}

export default App;
