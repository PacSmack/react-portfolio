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

      
      <section className="honeyYellow">
        <h1>Nice Curves</h1>
        <p>Voluptas quaerat nobis culpa voluptate, rerum unde atque! Adipisci quae maiores, incidunt labore assumenda necessitatibus ab eos possimus, culpa vero perspiciatis. Quasi rerum delectus dolorem explicabo doloribus perferendis odio voluptatum.</p>
      </section>
      <section className="yellowCrayola">
        <h1>Nice Curves</h1>
        <p>Sint, porro doloremque quod illo at dignissimos et? At velit ab corporis vel officiis, sunt facere accusamus itaque dolores ipsam sequi aliquam fuga asperiores. Nemo sunt natus harum illo dolores.</p>
      </section>
      <section className="gold">
        <h1>Nice Curves</h1>
        <p>Temporibus ad quod esse minima earum voluptate eos delectus ipsa, obcaecati perspiciatis magni, iste quia, sunt atque velit fugit aut culpa. Quo maiores dignissimos qui, corporis suscipit iure minus ea.</p>
      </section>

      <footer></footer>


    </div>
  );
}

export default App;
