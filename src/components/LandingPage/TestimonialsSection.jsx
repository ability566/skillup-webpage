const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "This course helped me land my first data analytics job!",
      author: "Joe Carrington",
    },
    {
      quote: "The hands-on approach made learning so easy!",
      author: "Michael Okonkwo",
    },
    {
      quote: "I gained real-world skills that made me job-ready in weeks!",
      author: "Tallulah Jackson",
    },
    {
      quote: "The instructors are top-notch, and the course structure is excellent.",
      author: "Eric Yeboah",
    },
    {
      quote: "The projects challenged me to think critically and apply my skills effectively.",
      author: "Sandra Williams",
    },
    {
      quote: "I love how the course adapts to real-world scenarios—highly recommended!",
      author: "Joseph Trinity",
    },
  ];

  return (
    <section className="py-16 px-6 bg-gray-100">
      <h2 className="text-3xl font-semibold text-center text-blue-800">
        Loved By the Community!
      </h2>
      <h4 className="text-lg font-semibold text-center text-blue-800">
        Don't take our word for it - Listen to what the graduates of SkillUp Academy have to say!
      </h4>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mt-6 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <blockquote
            key={index}
            className="p-6 bg-blue-100 rounded-lg shadow-md text-gray-800 italic border-l-4 border-blue-500"
          >
            “{testimonial.quote}” –{" "}
            <span className="font-semibold">{testimonial.author}</span>
          </blockquote>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
