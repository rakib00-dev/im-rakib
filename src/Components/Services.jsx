import Card from './Card';
import './services.css';

const Services = () => {
  return (
    <section id="services-section" className="mt-[4.125rem] lg:mt-[8.125rem]">
      <div className="wrapper">
        <h1 id="section-title">services</h1>
        <div id="service-cards">
          <div className="p-1 w-full flex justify-center items-center gap-12 flex-col m-auto md:p-6 lg:flex-row">
            {/* card1 */}
            <Card title="Basic">
              <li>{'>'} Cutting and trimming clips</li>
              <li>{'>'} Arranging video footage in a timeline</li>
              <li>{'>'} Adding transitions between clips</li>
              <li>{'>'} Basic color correction</li>
              <li>{'>'} Audio enhancements</li>
            </Card>

            {/* card2 */}
            <Card title="Standard" price={70}>
              <li>
                {'>'} <span className="text-[#e6b243] font-bold">Basic</span>{' '}
              </li>
              <li>{'>'} Cutting and trimming clips</li>
              <li>{'>'} Arranging video footage in a timeline</li>
              <li>{'>'} Adding transitions between clips</li>
              <li>
                {'>'} Basic color correction{'  '}
                <span className="text-[#e6b243]">...& More</span>{' '}
              </li>
            </Card>

            {/* card3 */}
            <Card title="Premium" crown={'👑'} price={200}>
              <li>
                {'>'}{' '}
                <span className="text-[#e6b243] font-bold">
                  Basic + Standerd
                </span>{' '}
              </li>
              <li>{'>'} Special effects and animations</li>
              <li>{'>'} Advanced color grading</li>
              <li>{'>'} Custom transitions and effects</li>
              <li>
                {'>'} (VFX){' '}
                <span className="text-[#e6b243]">...& Much More</span>{' '}
              </li>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
