import './App.css';

import Header from './components/HeaderComponent';
import About from './components/AboutComponent';
import Projects from './components/ProjectsComponent';
import Technologies from './components/TechnologiesComponent';
import Interests from './components/InterestsComponent';
import Contact from './components/ContactComponent';
import NavBar from './components/NavBarComponent';


function App() {

  return (
    <div className="App">
      <NavBar />
      <div className="main">

      <Header />

      <About />

      <Projects />

      <Technologies />

      <Interests />
      
      <Contact />
      </div>
    </div>
  );
}

export default App;
