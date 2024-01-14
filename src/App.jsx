import './App.css';

import Header from './Components/Header';
import DeveloperQuotes from './Components/DeveloperQuotes';
import ProjectList from './Components/ProjectList';
import Contact from './Components/Contact';
import About from './Components/About';

function App() {
  return (
    <>
      <Header/>
      <DeveloperQuotes />
      <ProjectList />
      <Contact />
      <About />
    </>
  );
}

export default App;
