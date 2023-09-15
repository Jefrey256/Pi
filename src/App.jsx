import React, { useState } from 'react';
import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [nsfwOpen, setNsfwOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleNsfw = () => {
    setNsfwOpen(!nsfwOpen);
  };

  return (
    <div className="App">
      <div className={`menu ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#">Página Inicial</a></li>
          <li className={`has-submenu ${nsfwOpen ? 'open' : ''}`}>
            <a href="" onClick={toggleNsfw}>NSFW</a>
            <ul className={`submenu ${nsfwOpen ? 'open' : ''}`}>
              <li><a href="#">Gay</a></li>
              <li><a href="#">Hétero</a></li>
            </ul>
          </li>
        </ul>
      </div>
      <button className="hamburger" onClick={toggleMenu}>
        &#9776;
      </button>
      <div className="content">
        {/* Conteúdo da sua página */}
      </div>
    </div>
  );
}

export default App;
