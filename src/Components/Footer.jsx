import './footer.css';

const Footer = () => {
  return (
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

        <form id="form" action="https://api.web3forms.com/submit" method="POST">
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
            <img src="./images/social-media/gmail.png" alt="" loading="lazy" />
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
  );
};

export default Footer;
