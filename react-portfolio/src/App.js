import './App.css';

import Header from './components/HeaderComponent';
import About from './components/AboutComponent';
import Projects from './components/ProjectsComponent';
import Technologies from './components/TechnologiesComponent';
import Interests from './components/InterestsComponent';
import Contact from './components/ContactComponent';


function App() {

  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <Technologies />
      <Interests />
      <Contact />
    </div>
  );
}

export default App;
