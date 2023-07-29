import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import About from "./components/about/About";
import "./header.css";
import Skills from "./components/skills/Skills"
import Qualification from "./components/qualification/Qualification"
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollup/ScrollUp";
import Work from "./components/work/Work";
import Services from "./components/services/Services"

function App() {
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header")
})

  /* Toggle Menu */
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");
  const [theme, setTheme] = useState('light-mode');

  const toggleTheme = () => {
    if(theme === 'light-mode') {
      setTheme('dark-mode')
    }

    else {
      setTheme('light-mode')
    }
  }


  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme])

  return (
    <div>
      <header className="header">
        <nav className="nav container">
          <a href="index.html" className="nav__logo">
            SJ
          </a>
          <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
            <ul className="nav__list grid">
              <li className="nav__item">
                <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'nav__link active-link':"nav__link"}>
                  <i className="bx bx-home-alt nav__icon active-link"></i> Home
                </a>
              </li>
              <li className="nav__item">
                <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#home' ? 'nav__link active-link':"nav__link"}>
                  <i className="bx bx-user nav__icon"></i> About
                </a>
              </li>
              <li className="nav__item">
                <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === '#home' ? 'nav__link active-link':"nav__link"}>
                  <i className="bx bx-file nav__icon"></i> Skills
                </a>
              </li>
              <li className="nav__item">
                <a href="#portfolio" className="nav__link">
                  <i className="bx bx-image nav__icon"></i> Portfolio
                </a>
              </li>
              <li className="nav__item">
                <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#home' ? 'nav__link active-link':"nav__link"}>
                  <i className="bx bx-send nav__icon"></i> Contact
                </a>
              </li>
            </ul>

            <i
              className="bx bx-x nav__close"
              onClick={() => showMenu(!Toggle)}
            ></i>
          </div>

          <div className="toggle_icon" onClick={toggleTheme}>
          {theme === 'dark-theme' ? (
            <i className='bx bx-sun'></i>
            ) : (
              <i className='bx bx-moon'></i>
            )}
          </div>
          <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
            <i className="bx bx-grid-alt"></i>
          </div>
        </nav>
      </header>

      <main className="main">
        <Home />
        <About />
        <Skills />
        <Qualification />
        <Services />
        <Work />
        <Contact />
        
      </main>


      <Footer />
      <ScrollUp />
    </div>
  );
}

export default App;
