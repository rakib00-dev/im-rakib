const Testimonial = () => {
  return (
    <section
      id="testimonial-section"
      className="mt-[4.125rem] lg:mt-[8.125rem] max-w-7xl mx-auto bg-gray-100/70 pb-10"
    >
      <div className="p-4 py-10 w-full">
        <h1 id="section-title">Testimonial</h1>
        <div
          // id="testimonial-wrap"
          className="flex flex-col justify-center items-center "
        >
          <img
            src="./images/testimonial/review.png"
            alt="review"
            className="w-full border border-black/10 rounded-lg shadow-xl md:w-[60%]"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
