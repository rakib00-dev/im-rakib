import './benefits.css';

const Benefits = () => {
  return (
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
            <img src="./images/benefits/help-desk.png" alt="" loading="lazy" />
            <p>️30 days of Free Support after project delivery</p>
          </div>
          <div className="benefits-card">
            <img src="./images/benefits/rating (1).png" alt="" loading="lazy" />
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
  );
};

export default Benefits;
