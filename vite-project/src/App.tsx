import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';

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
        <div className="textContainer">
          <h3>WHO I AM</h3>
          <p>
            I am a frontend developer with a passion for creating beautiful and
            functional web applications. I have experience working with React,
            TypeScript, and other modern web technologies. I am always eager to
            learn new skills and take on new challenges.
          </p>
        </div>
        <img src="/src/assets/aboutImage.png" alt="about image"></img>
      </section>

      <section className="traitsBingo"></section>
      <section className="myProjects"></section>
      <section className="contact"></section>
    </>
  );
}

export default App;
