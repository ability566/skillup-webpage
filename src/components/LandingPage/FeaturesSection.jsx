const FeaturesSection = () => {
  const features = [
    {
      title: "Expert Instructors",
      description: "Learn from industry professionals with real-world experience.",
    },
    {
      title: "Hands-on Project Work",
      description: "Work on real-world case studies using Python and R programming.",
    },
    {
      title: "Career Support",
      description: "Receive resume reviews, job placement assistance, and interview coaching.",
    },
    {
      title: "Flexible Learning",
      description: "Access courses anytime, anywhere with self-paced and live sessions.",
    },
    {
      title: "Certification",
      description: "Earn a recognized certificate upon course completion to boost your career.",
    },
    {
      title: "Community & Networking",
      description: "Join a supportive community of learners and industry professionals.",
    },
  ];

  return (
    <section className="bg-white py-20 px-6">
      <h2 className="text-3xl font-semibold text-center text-blue-800">Key Features</h2>
      <div className="grid md:grid-cols-3 gap-6 mt-6 max-w-5xl mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="p-6 bg-gray-100 shadow-md rounded-lg text-center">
            <h3 className="text-xl font-semibold text-blue-700">{feature.title}</h3>
            <p className="text-gray-700 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
