const FAQsPage = () => {
    return (
      <div className="min-h-screen bg-gray-100 px-6 py-12">
        {/* Adjusted margin-top to create space below the navbar */}
        <h1 className="text-3xl font-bold text-center text-blue-800 mt-20">
          Frequently Asked Questions
        </h1>
  
        <div className="max-w-4xl mx-auto mt-8">
          <details className="mb-4 bg-white p-4 rounded-lg shadow-md">
            <summary className="font-semibold cursor-pointer">What courses do you offer?</summary>
            <p className="mt-2 text-gray-600">We offer a variety of data analysis and programming courses.</p>
          </details>
  
          <details className="mb-4 bg-white p-4 rounded-lg shadow-md">
            <summary className="font-semibold cursor-pointer">Is there a certification?</summary>
            <p className="mt-2 text-gray-600">Yes, all courses come with a certification upon completion.</p>
          </details>
  
          <details className="mb-4 bg-white p-4 rounded-lg shadow-md">
            <summary className="font-semibold cursor-pointer">How do I enroll?</summary>
            <p className="mt-2 text-gray-600">You can enroll by signing up on our website and selecting a course.</p>
          </details>
  
          <details className="mb-4 bg-white p-4 rounded-lg shadow-md">
            <summary className="font-semibold cursor-pointer">Are the courses self-paced?</summary>
            <p className="mt-2 text-gray-600">Yes, you can learn at your own pace and revisit lessons anytime.</p>
          </details>
  
          <details className="mb-4 bg-white p-4 rounded-lg shadow-md">
            <summary className="font-semibold cursor-pointer">Do I need prior experience to enroll?</summary>
            <p className="mt-2 text-gray-600">No prior experience is required. We offer beginner-friendly courses.</p>
          </details>
  
          <details className="mb-4 bg-white p-4 rounded-lg shadow-md">
            <summary className="font-semibold cursor-pointer">Are the courses free?</summary>
            <p className="mt-2 text-gray-600">Some courses are free, while others require a one-time payment.</p>
          </details>
  
          <details className="mb-4 bg-white p-4 rounded-lg shadow-md">
            <summary className="font-semibold cursor-pointer">Can I access the course material after completion?</summary>
            <p className="mt-2 text-gray-600">Yes, you will have lifetime access to the course materials.</p>
          </details>
  
          <details className="mb-4 bg-white p-4 rounded-lg shadow-md">
            <summary className="font-semibold cursor-pointer">How do I get support if I have questions?</summary>
            <p className="mt-2 text-gray-600">You can reach out through our support center or community forums.</p>
          </details>
  
          <details className="mb-4 bg-white p-4 rounded-lg shadow-md">
            <summary className="font-semibold cursor-pointer">Are there any assignments or projects?</summary>
            <p className="mt-2 text-gray-600">Yes, our courses include hands-on projects and quizzes to test your skills.</p>
          </details>
  
          <details className="mb-4 bg-white p-4 rounded-lg shadow-md">
            <summary className="font-semibold cursor-pointer">Do you offer refunds?</summary>
            <p className="mt-2 text-gray-600">Yes, we offer a 7-day money-back guarantee for paid courses.</p>
          </details>
        </div>
      </div>
    );
  };
  
  export default FAQsPage;
  