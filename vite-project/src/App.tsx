import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';

function App() {
  return (
    <>
      <main className="hero">
        <Header />
        <Navigation />
      </main>
      <section className="about">
        <h1>About</h1>
      </section>

      <section className="traitsBingo"></section>
      <section className="myProjects"></section>
      <section className="contact"></section>
    </>
  );
}

export default App;
