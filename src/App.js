import React, { useState } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import About from "./components/about/About";
import "./components/header/header.css";

import useLocalStorage from "use-local-storage";

function App() {
  const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  /* Toggle Menu */
  const [Toggle, showMenu] = useState(false);
  return (
    <div data-theme={theme}>
      <header className="header">
        <nav className="nav container">
          <a href="index.html" className="nav__logo">
            SJ
          </a>
          <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
            <ul className="nav__list grid">
              <li className="nav__item">
                <a href="#home" className="nav__link">
                  <i className="bx bx-home-alt nav__icon active-link"></i> Home
                </a>
              </li>
              <li className="nav__item">
                <a href="#about" className="nav__link">
                  <i className="bx bx-user nav__icon"></i> About
                </a>
              </li>
              <li className="nav__item">
                <a href="#skills" className="nav__link">
                  <i className="bx bx-file nav__icon"></i> Skills
                </a>
              </li>
              <li className="nav__item">
                <a href="#services" className="nav__link">
                  <i className="bx bx-briefcase-alt-2 nav__icon"></i> Services
                </a>
              </li>
              <li className="nav__item">
                <a href="#portfolio" className="nav__link">
                  <i className="bx bx-image nav__icon"></i> Portfolio
                </a>
              </li>
              <li className="nav__item">
                <a href="#contact" className="nav__link">
                  <i className="bx bx-send nav__icon"></i> Contact
                </a>
              </li>
            </ul>

            <i
              className="bx bx-x nav__close"
              onClick={() => showMenu(!Toggle)}
            ></i>
          </div>

          <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
            <i className="bx bx-grid-alt"></i>
          </div>

          <div onClick={switchTheme} className="toggle_icon">
            {theme === "dark" ? (
              <i className='bx bx-moon' ></i>
            ) : (
              <i className='bx bx-sun' ></i>
            )}
          </div>
        </nav>
      </header>

      <main className="main" da-theme={theme}>
        <Home />
      </main>
    </div>
  );
}

export default App;
