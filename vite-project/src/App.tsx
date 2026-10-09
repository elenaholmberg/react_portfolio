import './App.css';
import { useState } from 'react';
import About from './components/About';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Bingo from './components/Bingo';
import Tecniques from './components/Tecniques';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Hero from './components/Hero';
import LanguageBtn from './components/LanguageBtn';

function App() {
  const [language, setLanguage] = useState<'en' | 'sv'>('en');

  return (
    <>
      <main className="main">
        <Header />
        <div className="btnContainer">
          <LanguageBtn language={language} setLanguage={setLanguage} />
          <Navigation />
        </div>
        <Hero />
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
