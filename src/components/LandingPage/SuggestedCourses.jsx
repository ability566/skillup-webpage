const SuggestedCourses = () => {
    const courses = [
      {
        title: "Advanced Data Visualization",
        description: "Master the art of presenting data with compelling visuals.",
      },
      {
        title: "Machine Learning for Beginners",
        description: "Learn the fundamentals of machine learning with hands-on examples.",
      },
      {
        title: "SQL for Data Analysis",
        description: "Improve your data querying skills with structured query language.",
      },
      {
        title: "Python for Data Science",
        description: "A beginner-friendly course to harness Python's power in data science.",
      },
    ];
  
    return (
      <section className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-semibold text-center text-blue-800">
          Explore More Courses
        </h2>
        <p className="text-lg text-center text-gray-600 mt-2">
          Expand your skill set with these additional courses.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mt-6 max-w-6xl mx-auto">
          {courses.map((course, index) => (
            <div key={index} className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-700">{course.title}</h3>
              <p className="text-gray-600 mt-2">{course.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default SuggestedCourses;
  