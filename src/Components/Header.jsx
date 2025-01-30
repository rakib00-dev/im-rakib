import { useEffect, useRef } from 'react';
import { TypeAnimation } from 'react-type-animation';

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
        className=" w-4/5 m-auto relative top-24 z-20"
        id="navBarFix"
        ref={navBarFix}
      >
        <nav
          id="nav"
          className="relative flex justify-between items-center px-6 py-0.5 mt-5 border border-gray-300 p-4 rounded-full overflow-hidden"
        >
          <div className="absolute inset-0 bg-white opacity-50 backdrop-blur-md z-[-1]"></div>
          <div id="logo" className="text-lg font-medium">
            <a href="#" className="flex items-center">
              <img
                src="./images/skills/js.png"
                alt=""
                className="h-4 w-4 mr-2"
                loading="lazy"
              />
              Rakib Developer
            </a>
          </div>
          <div id="menu">
            <ul className="flex justify-center items-center gap-7">
              <li className="relative py-7 text-lg font-semibold cursor-pointer transition-all duration-300 hover:text-yellow-500">
                <a href="#skills-section">Skills</a>
              </li>
              <li className="relative py-7 text-lg font-semibold cursor-pointer transition-all duration-300 hover:text-yellow-500">
                <a href="#services-section">Services</a>
              </li>
              <li className="relative py-7 text-lg font-semibold cursor-pointer transition-all duration-300 hover:text-yellow-500">
                <a href="#benefits-section">Benefits</a>
              </li>
              <li className="relative py-7 text-lg font-semibold cursor-pointer transition-all duration-300 hover:text-yellow-500">
                <a href="#about-section">About</a>
              </li>
              <li className="relative py-7 text-lg font-semibold cursor-pointer transition-all duration-300 hover:text-yellow-500">
                <a href="#footer">Let's Talk</a>
              </li>
            </ul>
          </div>
          <div id="contact">
            <a
              href="#footer"
              className="text-lg py-2 px-4 bg-yellow-400 text-black font-semibold rounded-full border-2 border-yellow-300 transition-all duration-300 hover:bg-yellow-500 hover:text-white"
            >
              Contact
            </a>
          </div>
        </nav>
      </div>

      <header
        id="header-section"
        ref={header_section}
        className="relative top-[500px] pt-0 w-full"
      >
        <div className="p-4 w-full py-6 flex justify-center flex-wrap flex-col m-auto gap-20 items-center md:gap-40 md:flex-row md:w-4/5">
          <div
            id="header-img"
            className="relative flex justify-center items-center h-[270px] w-[270px] rounded-full border border-gray-500/20 bg-white shadow overflow-hidden md:w-96 md:h-96 "
            style={{
              boxShadow: 'rgba(205, 205, 205, 0.52) 2px 2px 12px inset',
            }}
          >
            <img
              id="profile"
              src="./images/profile.png"
              alt=""
              className="h-[270px] mask-image-gradient md:h-[450px]"
              loading="lazy"
            />
          </div>

          <div id="header-para" className="w-full relative md:w-[43%]">
            <h1 className="text-4xl mb-0 mask-image-gradient leading-8 md:leading-16 md:text-5xl">
              Hi, It's Rakib
            </h1>
            <h2 className="text-xl relative leading-12 md:text-3xl">
              {/* I'm a <span className="text-yellow-500">Website Developer</span> */}
              I'm a{' '}
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  'Website Developer',
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  'Website Designer',
                  1000,
                  'Javascript Developer',
                  1000,
                  'React Developer',
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{
                  display: 'inline-block',
                }}
                className={'text-yellow-500'}
                repeat={Infinity}
              />
            </h2>
            <p className="text-md text-gray-600 mask-image-gradient ">
              A website developer who loves to build websites. I specialize in
              creating responsive and user-friendly websites tailored to meet
              your unique needs. My services include website design, front-end
              and back-end development, and ongoing maintenance to ensure
              optimal performance.
            </p>
            <div id="contact" className="mt-10">
              <a
                href="#footer"
                className="bg-white text-yellow-500 font-semibold py-2 px-4 rounded-full border-3 border-yellow-300 shadow-lg transition-all duration-300 hover:bg-yellow-500 hover:text-white"
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
