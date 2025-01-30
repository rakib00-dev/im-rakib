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
      <div
        class="relative -top-24 z-20 transition-opacity duration-1000 opacity-30"
        id="navBarFix"
        ref={navBarFix}
      >
        <nav
          id="nav"
          class="relative flex justify-between items-center px-6 py-4 mt-5 border border-gray-300 rounded-full overflow-hidden"
        >
          <div class="absolute inset-0 bg-white opacity-50 backdrop-blur-md z-[-1]"></div>
          <div id="logo" class="text-lg font-medium">
            <a href="#" class="flex items-center">
              <img
                src="./images/skills/js.png"
                alt=""
                class="h-4 w-4 mr-2"
                loading="lazy"
              />
              Rakib Developer
            </a>
          </div>
          <div id="menu">
            <ul class="flex justify-center items-center gap-7">
              <li class="relative py-7 text-lg font-semibold cursor-pointer transition-all duration-300 hover:text-yellow-500">
                <a href="#skills-section">Skills</a>
              </li>
              <li class="relative py-7 text-lg font-semibold cursor-pointer transition-all duration-300 hover:text-yellow-500">
                <a href="#services-section">Services</a>
              </li>
              <li class="relative py-7 text-lg font-semibold cursor-pointer transition-all duration-300 hover:text-yellow-500">
                <a href="#benefits-section">Benefits</a>
              </li>
              <li class="relative py-7 text-lg font-semibold cursor-pointer transition-all duration-300 hover:text-yellow-500">
                <a href="#about-section">About</a>
              </li>
              <li class="relative py-7 text-lg font-semibold cursor-pointer transition-all duration-300 hover:text-yellow-500">
                <a href="#footer">Let's Talk</a>
              </li>
            </ul>
          </div>
          <div id="contact">
            <a
              href="#footer"
              class="text-lg py-2 px-4 bg-yellow-400 text-black font-semibold rounded-full border-2 border-yellow-300 transition-all duration-300 hover:bg-yellow-500 hover:text-white"
            >
              Contact
            </a>
          </div>
        </nav>
      </div>

      <header
        id="header-section"
        ref={header_section}
        class="relative -top-[500px] pt-0 transition-opacity duration-2000 opacity-0"
      >
        <div class="wrapper px-6 py-16 flex justify-between items-center">
          <div
            id="header-img"
            class="relative flex justify-center items-center w-96 h-96 rounded-full border border-gray-500 bg-white shadow-md"
          >
            <div
              id="header-img-contianer"
              class="w-full h-full flex justify-center items-center overflow-hidden rounded-full"
            >
              <img
                id="profile"
                src="./images/profile.png"
                alt=""
                class="h-[450px] mask-image-gradient"
                loading="lazy"
              />
            </div>
          </div>
          <div id="header-para" class="w-[43%] relative">
            <h1 class="text-5xl mb-0 mask-image-gradient">Hi, It's Rakib</h1>
            <h2 class="text-3xl relative">
              I'm a <span class="text-yellow-500">Website Developer</span>
            </h2>
            <p class="text-gray-600 mask-image-gradient">
              A website developer who loves to build websites. I specialize in
              creating responsive and user-friendly websites tailored to meet
              your unique needs. My services include website design, front-end
              and back-end development, and ongoing maintenance to ensure
              optimal performance.
            </p>
            <div id="contact" class="mt-10">
              <a
                href="#footer"
                class="bg-white text-yellow-500 font-semibold py-2 px-4 rounded-full border-3 border-yellow-300 shadow-lg transition-all duration-300 hover:bg-yellow-500 hover:text-white"
              >
                Hire Me
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
