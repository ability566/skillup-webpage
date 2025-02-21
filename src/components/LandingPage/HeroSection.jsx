const HeroSection = () => {
    // Scroll to the Sign-Up form when the button is clicked
    const scrollToForm = () => {
      const formSection = document.getElementById("signup-form");
      if (formSection) {
        formSection.scrollIntoView({ behavior: "smooth" });
      }
    };
    
  
    return (
      <section className="relative bg-gray-600 text-white text-center py-60">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/images/heroSectionPicture.jpg" 
            alt="Data Analysis Visualization" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
  
        {/* Overlay Content */}
        <div className="relative z-10">
          <h1 className="text-5xl font-bold">Master Data Analytics with SkillUp Academy</h1>
          <p className="text-lg mt-4">Join thousands of learners worldwide.</p>
  
          {/* Enroll Now Button with Transition & Scroll */}
          <button onClick={scrollToForm} className="bg-blue-500 text-white mt-7 px-4 py-4 rounded-md hover:bg-blue-600
                                                                                  transition-transform transform hover:scale-105 active:scale-95">
              Enroll Now
          </button>

        </div>
      </section>
    );
  };
  
  export default HeroSection;
  