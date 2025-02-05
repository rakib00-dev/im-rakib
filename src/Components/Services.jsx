import Card from './Card';
// import './services.css';

const Services = () => {
  return (
    <section id="services-section" className="mt-[4.125rem] lg:mt-[8.125rem]">
      <div className="wrapper">
        <h1 id="section-title">services</h1>
        <div id="service-cards">
          <div className="p-1 w-full flex justify-center items-center gap-12 flex-col m-auto md:p-6 lg:flex-row">
            {/* card1 */}
            <Card title="Basic">
              <li>{'>'} Custom designs tailored to your brand</li>
              <li>{'>'} Mobile-friendly, responsive layouts</li>
              <li>{'>'} Built with modern web technologies</li>
              <li>{'>'} Easy-to-manage CMS integration</li>
              <li>{'>'} SEO optimized for better visibility</li>
            </Card>

            {/* card2 */}
            <Card title="Standard" price={70}>
              <li>
                {'>'} <span className="text-[#e6b243] font-bold">Basic</span>
              </li>
              <li>{'>'} Setup and customization of platforms</li>
              <li>{'>'} Integration of secure payment gateways</li>
              <li>{'>'} Product catalog management</li>
              <li>{'>'} Smooth animation and transition</li>
            </Card>

            {/* card3 */}
            <Card title="Premium" crown={'👑'} price={200}>
              <li>
                {'>'}{' '}
                <span className="text-[#e6b243] font-bold">
                  Basic + Standerd
                </span>{' '}
              </li>
              <li>{'>'} Bug fixing, performance optimization</li>
              <li>{'>'} 24/7 support for any technical issues</li>
              <li>{'>'} Features for better user interaction</li>
              <li>{'>'} Frontent + Backend</li>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
