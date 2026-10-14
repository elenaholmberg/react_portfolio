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
        <svg
          className="menuIcon"
          viewBox="0 0 24 24"
          aria-hidden="true"
          focusable="false"
        >
          {isOpen ? (
            <path d="M6 6l12 12M18 6L6 18" />
          ) : (
            <path d="M4 7h16M4 12h16M4 17h16" />
          )}
        </svg>
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
