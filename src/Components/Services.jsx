const Services = () => {
  return (
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
              I will build a fully functional website responsive on all devices
              (mobile, tablet, or desktop).
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
              I will build a fully functional website responsive on all devices
              (mobile, tablet, or desktop).
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
  );
};

export default Services;
