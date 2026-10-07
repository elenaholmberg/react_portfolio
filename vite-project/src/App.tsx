import './App.css';
import Header from './components/Header';

function App() {
  return (
    <>
      <main className="hero">
        <Header />
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
