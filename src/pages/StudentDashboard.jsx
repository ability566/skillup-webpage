import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const StudentDashboard = () => {
  const [studentData, setStudentData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    course: "",
  });
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("signupData")) || {};
    setStudentData({
      firstName: storedData.firstName || "",
      lastName: storedData.lastName || "",
      email: storedData.email || "",
      course: storedData.course || "",
    });
  }, []);

  const capitalizeName = (name) => name.replace(/\b\w/g, (char) => char.toUpperCase());

  const courseDescriptions = {
    "Foundation of Data Analysis": "Learn the basics of data analysis, including data types, visualization, and statistical insights.",
    "Ask Questions to Make Data-Driven Decisions": "Master the art of framing questions that lead to actionable data-driven insights.",
    "Process Data from Dirty to Clean": "Learn how to clean and prepare raw data for meaningful analysis.",
    "Preparing Data for Exploration": "Understand techniques to preprocess and structure data for better insights.",
    "Analyze Data to Answer Questions": "Use statistical methods and programming to extract answers from data.",
    "Share Data through the Art of Visualization": "Create compelling data visualizations to communicate findings effectively.",
    "Data Analysis with R Programming and Python": "Learn how to analyze and visualize data using R and Python.",
  };

  const completedCourses = ["Introduction to Data Analysis", "Data Cleaning Basics", "Statistical Methods"];

  const resources = [
    { name: "Data Analysis Guide", link: "#" },
    { name: "Data Visualization Tips", link: "#" },
    { name: "Python for Data Science", link: "#" },
  ];

  const handleDownloadCertificate = (course) => {
    alert(`Downloading certificate for ${course}`);
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-gray-100 p-6 mt-20">
      <div className="bg-white w-full max-w-4xl p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-blue-600">
          Welcome, {capitalizeName(studentData.firstName)}!
        </h1>
        <p className="text-center text-gray-600 mt-2">
          Your email: <span className="font-semibold">{studentData.email}</span>
        </p>

        {/* Course Details */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800">Your Course:</h2>
          <p className="text-lg font-medium text-blue-500">{studentData.course}</p>
          <p className="mt-2 text-gray-600">{courseDescriptions[studentData.course] || "No description available."}</p>
        </div>

        {/* Progress Bar */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-800">Course Progress:</h2>
          <div className="w-full bg-gray-300 h-5 rounded-md mt-2">
            <div className="bg-blue-500 h-5 rounded-md" style={{ width: `${progress}%` }}></div>
          </div>
          <p className="text-sm text-gray-600 mt-1">{progress}% Completed</p>
        </div>

        {/* Completed Courses & Certificates */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-800">Courses Completed:</h2>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            {completedCourses.map((course, index) => (
              <li key={index} className="mt-1 flex justify-between">
                <span>{course}</span>
                <button
                  className="bg-green-600 text-white py-1 px-3 rounded-lg text-sm hover:bg-green-700"
                  onClick={() => handleDownloadCertificate(course)}
                >
                  Download Certificate
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Download Resources */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-800">Download Resources:</h2>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            {resources.map((resource, index) => (
              <li key={index} className="mt-1">
                <a href={resource.link} className="text-blue-500 hover:underline" download>
                  {resource.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Logout Button */}
        <div className="mt-6 text-center">
          <button onClick={() => { localStorage.removeItem("signupData"); navigate("/"); }} className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
