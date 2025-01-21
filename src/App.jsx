import { useEffect, useRef } from 'react';
import Header from './Components/Header';
import Skills from './Components/Skills';

function App() {
  // cursor follower
  const cursor = useRef();

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
  }, [cursor]);

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
      <div className="cursor" ref={cursor}></div>
      <Header />
      <Skills />
      <section id="testimonial-section">
        <div className="wrapper">
          <h1 id="section-tittle">Testimonial</h1>
          <div id="testimonial-wrap">
            <img src="./images/testimonial/review.png" alt="review" />
          </div>
        </div>
      </section>

      <section id="services-section">
        <div className="wrapper">
          <h1 id="section-tittle">services</h1>
          <div id="service-cards">
            <div className="service-card">
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
                <a className="btn" href="#footer">
                  Get in touch
                </a>
              </div>
            </div>
            <div className="service-card">
              <img src="./images/services/coding.png" alt="" loading="lazy" />
              <h3>Redevelop/Redesign Debug Website</h3>
              <p>
                I will be a web developer to fix your website bug to debug or
                redesign (add new features) your website.
              </p>
              <div id="contact">
                <a className="btn" href="#footer">
                  Get in touch
                </a>
              </div>
            </div>
            <div className="service-card">
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
                <a className="btn" href="#footer">
                  Get in touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="benefits-section">
        <div className="card-blur"></div>
        <div className="wrapper">
          <h1 id="section-tittle">Benefits</h1>
          <div id="benefits-wrap">
            <div className="benefits-card">
              {/* <!-- <div className="card-blur"></div> --> */}
              <img src="./images/benefits/24-hours.png" alt="" loading="lazy" />
              <p>24/7 service</p>
            </div>
            <div className="benefits-card">
              <img
                src="./images/benefits/fast-delivery (1).png"
                alt=""
                loading="lazy"
              />
              <p>Extra fast delivery</p>
            </div>
            <div className="benefits-card">
              <img src="./images/benefits/customer.png" alt="" loading="lazy" />
              <p>100% Satisfaction</p>
            </div>
            <div className="benefits-card">
              <img
                src="./images/benefits/help-desk.png"
                alt=""
                loading="lazy"
              />
              <p>️30 days of Free Support after project delivery</p>
            </div>
            <div className="benefits-card">
              <img
                src="./images/benefits/rating (1).png"
                alt=""
                loading="lazy"
              />
              <p>Expert website developer</p>
            </div>
            <div className="benefits-card">
              <img src="./images/benefits/no-fee.png" alt="" loading="lazy" />
              <p>️Consultation has no charges.</p>
            </div>
            <div className="benefits-card">
              <img
                src="./images/benefits/video-call (1).png"
                alt=""
                loading="lazy"
              />
              <p>Free video call meeting</p>
            </div>
            <div className="benefits-card">
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
        <div className="wrapper">
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
        <div className="wrapper">
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
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter Your Name"
                  required
                />
              </div>
              <div id="email-container">
                <label htmlFor="email">Email</label>
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
              <label htmlFor="message">Message</label>
              <textarea
                type="text"
                id="message"
                name="message"
                placeholder="Enter Your Message"
                required
                spellCheck="false"
              ></textarea>
            </div>
            <button type="submit" className="btn submit">
              Submit
            </button>
          </form>

          <div className="social-media">
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
