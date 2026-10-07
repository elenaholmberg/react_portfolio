import { useState } from 'react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="navigation">
      <button
        className="menuButton"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Stäng meny' : 'Öppna meny'}
        aria-expanded={isOpen}
      >
        <span className="material-symbols-outlined">
          {isOpen ? 'close' : 'menu'}
        </span>
      </button>

      <ul className={isOpen ? 'navList open' : 'navList'}>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
