const Projects = () => {
  return (
    <>
      <section className="bg-gray-2 pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
        <div className="p-4 m-auto ">
          <h1 id="section-title">Projects</h1>

          <div className="flex justify-center items-center flex-wrap gap-9 flex-col lg:flex-row">
            <SingleCard
              image="./images/projects/digital-agency.gif"
              CardTitle="Digital Agency | Website Development"
              CardDescription="This template has the key feature of a digital agency, ideal for those looking to convert a design file into a live website"
              Button="View Details"
              btnHref={
                'https://contra.com/p/bMZvkmAN-digital-agency-or-website-development'
              }
            />

            <SingleCard
              image="./images/projects/rakib-portfolio.gif"
              CardTitle="Portfolio Website | Design + Development"
              titleHref="/#"
              CardDescription="This is my personal portfolio website. This also represents me. Here I've tried to showcase what am I capable of."
              Button="View Details"
              btnHref="https://contra.com/p/qk3lBXkR-rakibs-portfolio-or-website-development"
            />
            <SingleCard
              image="./images/projects/video-editing.gif"
              CardTitle="The Editing Studio | Portfolio Website"
              CardDescription="This portfolio website showcases the professional skills and services of a talented video editor based in Bangladesh, he runs a successful video editing agency."
              className={'h-[225px]'}
              Button={'View Deails'}
              btnHref={
                'https://contra.com/p/k3g6OOgN-the-editing-studio-or-portfolio-website'
              }
            />
            <SingleCard
              image="./images/projects/chess-bug.gif"
              CardTitle="Chess Game | Design + Development"
              CardDescription="This portfolio website showcases the professional skills and services of a talented video editor based in Bangladesh, he runs a successful video editing agency."
              className={'h-[225px]'}
              Button={'View Deails'}
              btnHref={
                'https://contra.com/p/MqOrEgPE-web-based-chess-game-or-bug-fixed-and-built-it-again'
              }
            />

            <SingleCard
              image="./images/projects/farinha-portfolio.gif"
              CardTitle="RealEstate Portfolio | Design + Development"
              CardDescription="This portfolio website showcases the professional skills and services of a talented video editor based in Bangladesh, he runs a successful video editing agency."
              className={'h-[225px]'}
              Button={'View Deails'}
              btnHref={
                'https://contra.com/p/6cqBgRmg-real-estate-agent-portfolio-or-portfolio-website'
              }
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;

const SingleCard = ({
  image,
  Button,
  CardDescription,
  CardTitle,
  titleHref,
  btnHref,
  className,
}) => {
  return (
    <>
      {/*  */}
      <div
        className={`flex justify-center items-center flex-col flex-wrap w-full mb-10 overflow-hidden rounded-lg bg-white shadow-xl  duration-300 hover:shadow-3 dark:bg-dark-2 dark:shadow-card dark:hover:shadow-3 min-[425px]:w-[300px] `}
      >
        <div
          className=" h-60 w-60 blur-[180px] absolute opacity-50"
          style={{
            background:
              'linear-gradient(41deg,rgb(236, 161, 0) 0%,rgb(255, 229, 190) 100%)',
          }}
        ></div>
        <img src={image} alt="" className={`w-full ${className}`} />

        <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
          <h3>
            <a
              href={titleHref ? titleHref : '/#'}
              className="mb-4 block text-xl font-semibold text-dark hover:text-primary dark:text-white sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
            >
              {CardTitle}
            </a>
          </h3>

          {/* <p className="mb-7 text-base leading-relaxed text-body-color dark:text-dark-6">
            {CardDescription}
          </p> */}

          {Button && (
            <a
              href={btnHref ? btnHref : '#'}
              target="_black"
              className="inline-block rounded-full border border-gray-3 px-7 py-2 text-base font-medium text-body-color transition hover:border-primary hover:bg-yellow-500 hover:text-white dark:border-dark-3 dark:text-dark-6"
            >
              {Button}
            </a>
          )}
        </div>
      </div>
      {/*  */}
    </>
  );
};
