import './App.scss';
import { useState } from 'react';
import About from './components/About';

import Navigation from './components/Navigation';
import Bingo from './components/Bingo';

import Projects from './components/Projects';
import Contact from './components/Contact';
import Hero from './components/Hero';
import LanguageBtn from './components/LanguageBtn';
import Footer from './components/Footer';

function App() {
  const [language, setLanguage] = useState<'en' | 'sv'>('en');

  return (
    <>
      <main className="main">
        <div className="btnContainer">
          <LanguageBtn language={language} setLanguage={setLanguage} />
          <Navigation />
        </div>
        <div className="line" />
        <Hero />
      </main>

      <section id="about" className="about">
        <About />
      </section>

      <section className="traitsBingo">
        <Bingo />
      </section>
      <section id="projects" className="myProjects">
        <Projects />
      </section>
      <section id="contact" className="contact">
        <Contact />
      </section>
      <Footer />
    </>
  );
}

export default App;
