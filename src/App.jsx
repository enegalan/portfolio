import './App.css';
import 'aos/dist/aos.css';

import React, { useEffect } from 'react';

import Header from './Components/Header';
import Tools from './Components/Tools';
import DeveloperQuotes from './Components/DeveloperQuotes';
import ProjectList from './Components/ProjectList';
import Contact from './Components/Contact';

function App() {
  return (
    <>
      <Header />
      <Tools />
      <DeveloperQuotes />
      <ProjectList />
      <Contact />
    </>
  );
}

export default App;
