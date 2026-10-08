import './App.css';
import About from './components/About';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Bingo from './components/Bingo';
import Tecniques from './components/Tecniques';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Hero from './components/Hero';

function App() {
  return (
    <>
      <main className="main">
        <Header />
        <Navigation />
        <Hero/>
       
      
      </main>

      <section className="about">
        <About />
      </section>

      <section className="traitsBingo">
        <Bingo />
      </section>
      <section className="myProjects">
        <Tecniques />
        <Projects />
      </section>
      <section className="contact">
        <Contact />
      </section>
    </>
  );
}

export default App;
