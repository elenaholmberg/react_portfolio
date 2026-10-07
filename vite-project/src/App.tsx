import './App.css';
import About from './components/About';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Bingo from './components/Bingo';
import Tecniques from './components/Tecniques';

function App() {
  return (
    <>
      <main className="hero">
        <Header />
        <Navigation />
        <h1 className="heroTitle">Creative</h1>
        <h2 className="heroSubtitle">PORTFOLIO</h2>
        <img
          src="/src/assets/heroImage.png"
          alt="hero image"
          className="heroImage"
        />
      </main>

      <section className="about">
        <Header />
        <About />
      </section>

      <section className="traitsBingo">
        <Bingo />
      </section>
      <section className="myProjects">
        <Tecniques />
      </section>
      <section className="contact"></section>
    </>
  );
}

export default App;
