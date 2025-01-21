const About = () => {
  return (
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
  );
};

export default About;
