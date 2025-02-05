import './about.css';

const About = () => {
  return (
    <section id="about-section" class="py-16">
      <div class="container mx-auto px-4">
        <h1 id="section-tittle">About</h1>
        <div
          id="about-content"
          class="flex flex-wrap justify-center items-center gap-8"
        >
          <div
            id="about-img-wrap"
            class="border border-gray-300 rounded-full w-64 h-64 flex justify-center items-center overflow-hidden"
          >
            <img
              src="./images/about/rakib_web_developer.png"
              alt=""
              class="h-[348px] -mb-12"
              loading="lazy"
            />
          </div>
          <div id="about-text" class="w-96 grid gap-4">
            <h1 class="text-3xl font-bold mb-2">Md Rejoyanul Hasan Rakib</h1>
            <p class="text-gray-600">A bit about me.</p>
            <p class="text-gray-700">
              I'm pursuing a Computer Science & Technology degree in diploma
              polytechnic. I have my own rules and aims for my life. I want to
              be a perfect Web engineer who can contribute to society and help
              others grow their business.
            </p>
            <span class="text-gray-600">
              Email:{' '}
              <a
                href="mailto:rakib00.dev@gmail.com"
                class="text-blue-500 hover:underline"
              >
                rakib00.dev@gmail.com
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
