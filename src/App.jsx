import Navbar from './assets/components/Navbar';
import Home from './assets/components/Home';
import About from './assets/components/About';
import Projects from './assets/components/Projects';
import Contact from './assets/components/Contact';

function App() {
  return (
    <>
      <div className="bg-slate-950">
        <Navbar />
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </>
  );
}

export default App;
