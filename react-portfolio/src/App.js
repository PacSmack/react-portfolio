import './App.css';
import myPhoto from './assets/myPhoto.png'
import githubIcon from './assets/gitHubIcon.png'
import emailIcon from './assets/emailIcon.png'
import linkedinIcon from './assets/linkedinIcon.png'


function App() {

  return (
    <div className="App">

      <section className="black">
        <div className="photoWrap">
          <img src={myPhoto} alt="" />
        </div>
        <div className="iconsWrapper">
          <a href="https://www.linkedin.com/in/nathan-dias-silva/" target="_blank"><img src={linkedinIcon} alt="" /></a>
          <a href="https://github.com/PacSmack" target="_blank"><img src={githubIcon} alt="" /></a>
          <a href="mailto: nathandsbr@gmail.com" target="_blank"><img src={emailIcon} alt="" /></a>
        </div>

        <h1>Hello, my name is Nathan da Silva.<br />
          I am a Full-Stack Web Developer living in Mesa, AZ.
        </h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam quaerat adipisci id at minus. Pariatur exercitationem adipisci perspiciatis qui atque eaque quas recusandae reiciendis, quam ut assumenda dolorem mollitia iste.</p>

      </section>


      <section className="blue">
        <h1>Nice Curves</h1>
        <p>Quam, consectetur tempore ipsa ex officiis culpa eaque, sequi perferendis nam itaque quis aut blanditiis laboriosam exercitationem. Minima consectetur excepturi quaerat natus, accusantium neque iusto labore? Et enim officia quae!</p>

        <div className="headerWave">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
          </svg>
        </div>
      </section>
      <section className="spanishBlue">
        <h1>Nice Curves</h1>
        <p>A, minima delectus? Necessitatibus tempora sequi laborum eos placeat deleniti, laudantium atque labore saepe maxime, hic, repudiandae perspiciatis minus autem beatae. Et, quo deleniti fugit a accusamus distinctio sequi quasi?</p>
      </section>
      <section className="russianGreen">
        <h1>Nice Curves</h1>
        <p>Quis recusandae dolores aspernatur tenetur libero sapiente, enim vel tempora molestiae molestias blanditiis eligendi alias dignissimos harum. Dolor in eius, possimus itaque ut, magnam voluptates veritatis excepturi dolore rem velit!</p>
      </section>
      <section className="emerald">
        <h1>Nice Curves</h1>
        <p>Vero sunt eaque dicta eius aspernatur cupiditate fugiat autem dolorem? Ullam obcaecati quae, rerum perferendis, est quisquam quam porro temporibus dolores enim unde pariatur omnis facilis commodi asperiores libero ea.</p>
      </section>
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
