import { useEffect, useRef } from 'react';
import './header.css';

const Header = () => {
  // window onLoad Entry
  const navBarFix = useRef();
  const header_section = useRef();

  useEffect(() => {
    window.addEventListener('load', () => {
      navBarFix.current.style.top = '5px';
      navBarFix.current.style.opacity = '1';
      header_section.current.style.top = '0';
      header_section.current.style.opacity = '1';
    });

    // header NavBar onScroll
    window.addEventListener('scroll', () => {
      const scrollValue = window.scrollY;
      if (scrollValue >= 82) {
        navBarFix.current.style.top = '20px';
        navBarFix.current.style.position = 'sticky';
      } else {
        navBarFix.current.style.top = '5px';
        navBarFix.current.style.position = null;
      }
    });
  }, []);
  return (
    <>
      <div className="wrapper" id="navBarFix" ref={navBarFix}>
        <nav id="nav">
          <div className="blur"></div>
          <div id="logo">
            <a href="#">
              <img src="./images/skills/js.png" alt="" loading="lazy" /> Rakib
              Developer
            </a>
          </div>
          <div id="menu">
            <ul id="menuUl">
              <li className="menuLi">
                <a href="#skills-section">Skills</a>
              </li>
              <li className="menuLi">
                <a href="#services-section">Services</a>
              </li>
              <li className="menuLi">
                <a href="#benefits-section">Benefits</a>
              </li>
              <li className="menuLi">
                <a href="#about-section">About</a>
              </li>
              <li className="menuLi">
                <a href="#footer">Let's Talk</a>
              </li>
            </ul>
          </div>
          <div id="contact">
            <a href="#footer">Contact</a>
          </div>
        </nav>
      </div>
      <header id="header-section" ref={header_section}>
        <div className="wrapper">
          <div id="headerContent">
            <div id="header-img">
              <div id="header-img-contianer">
                <img
                  id="profile"
                  src="./images/profile.png"
                  alt=""
                  loading="lazy"
                />
              </div>
              {/* <img
                id="cloud1"
                src="./images/white-cloud.png"
                alt=""
                loading="lazy"
              />
              <img
                id="cloud2"
                src="./images/white-cloud2.png"
                alt=""
                loading="lazy"
              /> */}
            </div>
            <div id="header-para">
              <h1>Hi, It's Rakib</h1>
              <h2>
                I'm a <span></span>
              </h2>
              <p>
                A website developer who love to build website. I specialize in
                creating responsive and user-friendly websites tailored to meet
                your unique needs. My services include website design, front-end
                and back-end development, and ongoing maintenance to ensure
                optimal performance.
              </p>
              <div id="contact">
                <a href="#footer">Hire Me</a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
