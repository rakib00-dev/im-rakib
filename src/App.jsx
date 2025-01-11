import { useEffect, useRef } from 'react';

function App() {
  // cursor follower
  const cursor = useRef();

  // window onLoad Entry
  // const navBarFix = document.getElementById('navBarFix');
  const navBarFix = useRef();
  // const header_section = document.getElementById('header-section');
  const header_section = useRef();

  console.log(navBarFix.current, header_section.current);

  useEffect(() => {
    window.addEventListener('mousemove', (e) => {
      if (cursor) {
        cursor.current.setAttribute(
          'style',
          `top: ${e.pageY - 40}px; left:${e.pageX - 30}px`
        );
      } else {
        console.log('Error faced');
      }
    });

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
        navBarFix.style.top = '5px';
        navBarFix.style.position = null;
      }
    });
  }, []);

  // const form = document.getElementById('form');
  // form.addEventListener('submit', (e) => {
  //   e.preventDefault();
  //   const formBody = e.target;
  //   const name = e.target.name.value;
  //   const email = e.target.email.value;
  //   const message = e.target.message.value;
  //   form.reset();
  //   const body = { name, email, message };
  //   console.log(body);
  // });

  return (
    <>
      <div class="cursor" ref={cursor}></div>
      <div class="wrapper" id="navBarFix" ref={navBarFix}>
        <nav id="nav">
          <div class="blur"></div>
          <div id="logo">
            <a href="#">
              <img src="./images/skills/js.png" alt="" loading="lazy" /> Rakib
              Developer
            </a>
          </div>
          <div id="menu">
            <ul id="menuUl">
              <li class="menuLi">
                <a href="#skills-section">Skills</a>
              </li>
              <li class="menuLi">
                <a href="#services-section">Services</a>
              </li>
              <li class="menuLi">
                <a href="#benefits-section">Benefits</a>
              </li>
              <li class="menuLi">
                <a href="#about-section">About</a>
              </li>
              <li class="menuLi">
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
        <div class="wrapper">
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
              <img
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
              />
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

      <section id="skills-section">
        <div class="wrapper">
          <h1 id="section-tittle">Skills</h1>
          <div id="skills-wrap">
            <div class="skill-box">
              <img src="./images/skills/html-5.png" alt="" loading="lazy" />
            </div>
            <div class="skill-box">
              <img src="./images/skills/css3.png" alt="" loading="lazy" />
            </div>
            {/* <div class="skill-box">
            <img src="./images/skills/bootstrap.png" alt="" loading="lazy" />
          </div>  */}
            <div class="skill-box">
              <img
                src="./images/skills/react-1-logo-png-transparent.png"
                alt="react js"
                loading="lazy"
              />
            </div>
            <div class="skill-box">
              <img src="./images/skills/tailwind.png" alt="" loading="lazy" />
            </div>
            <div class="skill-box">
              <img src="./images/skills/js.png" alt="" loading="lazy" />
            </div>
            <div class="skill-box">
              <img src="./images/skills/social.png" alt="" loading="lazy" />
            </div>
            <div class="skill-box">
              <img src="./images/skills/github.png" alt="" loading="lazy" />
            </div>
            <div class="skill-box">
              <img src="./images/skills/bug.png" alt="" loading="lazy" />
            </div>
            <div class="skill-box">
              <img src="./images/skills/photoshop.png" alt="" loading="lazy" />
            </div>
            <div class="skill-box">
              <img src="./images/skills/daisyui.png" alt="" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section id="testimonial-section">
        <div class="wrapper">
          <h1 id="section-tittle">Testimonial</h1>
          <div id="testimonial-wrap">
            <img src="./images/testimonial/review.png" alt="review" />
          </div>
        </div>
      </section>

      <section id="services-section">
        <div class="wrapper">
          <h1 id="section-tittle">services</h1>
          <div id="service-cards">
            <div class="service-card">
              <img
                src="./images/services/programming1.png"
                alt=""
                loading="lazy"
              />
              <h3>Website Development</h3>
              <p>
                I will build a fully functional website responsive on all
                devices (mobile, tablet, or desktop).
              </p>
              <div id="contact">
                <a class="btn" href="#footer">
                  Get in touch
                </a>
              </div>
            </div>
            <div class="service-card">
              <img src="./images/services/coding.png" alt="" loading="lazy" />
              <h3>Redevelop/Redesign Debug Website</h3>
              <p>
                I will be a web developer to fix your website bug to debug or
                redesign (add new features) your website.
              </p>
              <div id="contact">
                <a class="btn" href="#footer">
                  Get in touch
                </a>
              </div>
            </div>
            <div class="service-card">
              <img
                src="./images/services/screwdriver.png"
                alt=""
                loading="lazy"
              />
              <h3>Website Maintenance</h3>
              <p>
                I will build a fully functional website responsive on all
                devices (mobile, tablet, or desktop).
              </p>
              <div id="contact">
                <a class="btn" href="#footer">
                  Get in touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="benefits-section">
        <div class="card-blur"></div>
        <div class="wrapper">
          <h1 id="section-tittle">Benefits</h1>
          <div id="benefits-wrap">
            <div class="benefits-card">
              {/* <!-- <div class="card-blur"></div> --> */}
              <img src="./images/benefits/24-hours.png" alt="" loading="lazy" />
              <p>24/7 service</p>
            </div>
            <div class="benefits-card">
              <img
                src="./images/benefits/fast-delivery (1).png"
                alt=""
                loading="lazy"
              />
              <p>Extra fast delivery</p>
            </div>
            <div class="benefits-card">
              <img src="./images/benefits/customer.png" alt="" loading="lazy" />
              <p>100% Satisfaction</p>
            </div>
            <div class="benefits-card">
              <img
                src="./images/benefits/help-desk.png"
                alt=""
                loading="lazy"
              />
              <p>️30 days of Free Support after project delivery</p>
            </div>
            <div class="benefits-card">
              <img
                src="./images/benefits/rating (1).png"
                alt=""
                loading="lazy"
              />
              <p>Expert website developer</p>
            </div>
            <div class="benefits-card">
              <img src="./images/benefits/no-fee.png" alt="" loading="lazy" />
              <p>️Consultation has no charges.</p>
            </div>
            <div class="benefits-card">
              <img
                src="./images/benefits/video-call (1).png"
                alt=""
                loading="lazy"
              />
              <p>Free video call meeting</p>
            </div>
            <div class="benefits-card">
              <img
                src="./images/benefits/meeting (1).png"
                alt=""
                loading="lazy"
              />
              <p>Good communication skill</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about-section">
        <div class="wrapper">
          <h1 id="section-tittle">About</h1>
          <div id="about-content">
            <div id="about-img-wrap">
              <img
                src="./images/about/rakib_web_developer.png"
                alt=""
                loading="lazy"
              />
            </div>
            <div id="about-text">
              <h1>Md Rejoyanul Hasan Rakib</h1>
              <p>A bit about me.</p>
              <p>
                I'm Pursuing a Comput Science & Technology Degree in diploma
                polytechnic. I have my own rules and aims for my life. I want to
                be a perfect Web engineer who can contribute to society and help
                others to grow their business.
              </p>

              <span>
                Email:
                <a href="mailto:rakib00.dev@gmail.com">rakib00.dev@gmail.com</a>
              </span>
            </div>
          </div>
        </div>
      </section>

      <footer id="footer">
        <div class="wrapper">
          <h1 id="section-tittle">Let's Talk</h1>

          <div id="footer-content">
            <p>
              Let's talk and set our meeting time through Calendly and meeting
              platforms like Zoom and Google meet. boost your business. Please
              message me with any of this platform to get a 300 second quick
              meeting.
            </p>
          </div>

          <form
            id="form"
            action="https://api.web3forms.com/submit"
            method="POST"
          >
            <input
              type="hidden"
              name="access_key"
              value="976bc72c-dbf7-4ac7-8528-24eeb7f396a8"
            />
            <div id="name-email-container">
              <div id="name-container">
                <label for="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter Your Name"
                  required
                />
              </div>
              <div id="email-container">
                <label for="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter Your Email"
                  required
                />
              </div>
            </div>
            <div id="message-container">
              <label for="message">Message</label>
              <textarea
                type="text"
                id="message"
                name="message"
                placeholder="Enter Your Message"
                required
                spellcheck="false"
              ></textarea>
            </div>
            <button type="submit" class="btn submit">
              Submit
            </button>
          </form>

          <div class="social-media">
            <a target="_blank" href="https://www.linkedin.com/in/rakib-dev/">
              <img
                src="./images/social-media/linkedin.png"
                alt=""
                loading="lazy"
              />
            </a>
            <a
              target="_blank"
              href="https://www.facebook.com/profile.php?id=100022715043732&mibextid=ZbWKwL"
            >
              <img
                src="./images/social-media/facebook.png"
                alt=""
                loading="lazy"
              />
            </a>
            <a target="_blank" href="https://www.instagram.com/rakib.developer">
              <img
                src="./images/social-media/instagram.png"
                alt=""
                loading="lazy"
              />
            </a>
            <a target="_blank" href="mailto:rakib00.dev@gmail.com">
              <img
                src="./images/social-media/gmail.png"
                alt=""
                loading="lazy"
              />
            </a>
            <a target="_blank" href="https://wa.me/+8801904285606">
              <img
                src="./images/social-media/whatsapp.png"
                alt=""
                loading="lazy"
              />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
