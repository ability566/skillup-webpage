import PieChart from "../charts/PieChart";
import LineChart from "../charts/LineChart";
import BarChart from "../charts/BarChart";
import { useState, useRef, useEffect } from "react";
import { useReactToPrint } from "react-to-print";

const DashboardOverview = () => {
  // Retrieve stored admin login data
  const [adminFirstName, setAdminFirstName] = useState("");

  useEffect(() => {
    const adminData = JSON.parse(localStorage.getItem("adminData"));
    if (adminData && adminData.firstName) {
      setAdminFirstName(adminData.firstName);
    }
  }, []);

  // Dummy Data for Pie Chart
  const pieChartData = [
    { name: "Completed", value: 82 },
    { name: "In Progress", value: 10 },
    { name: "Not Started", value: 8 },
  ];

  // Dummy Data for Line Chart (Enrollment Trends)
  const lineChartData = [
    { month: "Aug", enrollments: 200 },
    { month: "Sep", enrollments: 218 },
    { month: "Oct", enrollments: 198 },
    { month: "Nov", enrollments: 230 },
    { month: "Dec", enrollments: 268 },
    { month: "Jan", enrollments: 280 },
    { month: "Feb", enrollments: 240 },
  ];

  // Dummy Data for Bar Chart (Course Engagement Metrics)
  const barChartData = [
    { course: "Data Analysis", activeStudents: 400, avgTimeSpent: 2.5, completionRate: 75 },
    { course: "Python Programming", activeStudents: 350, avgTimeSpent: 3.2, completionRate: 80 },
    { course: "Machine Learning", activeStudents: 280, avgTimeSpent: 4.1, completionRate: 85 },
    { course: "Web Development", activeStudents: 500, avgTimeSpent: 3.8, completionRate: 90 },
  ];

  // Simulated recent sign-ups (Dummy Data)
  const recentSignUps = [
    { name: "Alice Johnson", course: "Data Analysis with Python" },
    { name: "Mark Smith", course: "Foundation of Data Analysis" },
    { name: "Sophia Lee", course: "Share Data through Visualization" },
    { name: "Daniel Brown", course: "Analyze Data to Answer Questions" },
    { name: "Emma Wilson", course: "Preparing Data for Exploration" },
    { name: "James Anderson", course: "Process Data from Dirty to Clean" },
  ];

  // State for Report Toggle
  const [reportType, setReportType] = useState("weekly");

  // Dummy Report Data
  const reportData = {
    weekly: [
      { metric: "New Enrollments", value: 120 },
      { metric: "Course Completions", value: 45 },
      { metric: "Active Students", value: 320 },
    ],
    monthly: [
      { metric: "New Enrollments", value: 480 },
      { metric: "Course Completions", value: 200 },
      { metric: "Active Students", value: 1250 },
    ],
  };

  // Reference for PDF Export
  const reportRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => reportRef.current,
    documentTitle: "SkillUp_Academy_Report",
  });

  return (
    <section className="pt-4 px-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-semibold mb-3 ml-3 text-blue-800">
        Welcome, {adminFirstName}!
      </h2>
      <h2 className="text-2xl font-semibold ml-3 text-blue-800">Dashboard Overview</h2>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h3 className="text-xl font-semibold text-blue-700">Total Enrollments</h3>
          <p className="text-2xl font-bold text-gray-900">4,250</p>
        </div>

        <div className="p-6 bg-white shadow-md rounded-lg">
          <h3 className="text-xl font-semibold text-blue-700">Active Courses</h3>
          <p className="text-2xl font-bold text-gray-900">7</p>
        </div>

        <div className="p-6 bg-white shadow-md rounded-lg">
          <h3 className="text-xl font-semibold text-blue-700">Completion Rate</h3>
          <p className="text-2xl font-bold text-gray-900">92%</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <LineChart data={lineChartData} />
        <PieChart data={pieChartData} />
      </div>

      {/* Bar Chart - Course Engagement Metrics */}
      <div className="w-3/4 mx-auto mt-6 p-6 bg-white shadow-md rounded-lg">
        <h3 className="text-xl font-semibold text-blue-700 mb-3">Course Engagement Metrics</h3>
        <BarChart data={barChartData} />
      </div>

      {/* Recent Student Sign-ups */}
      <div className="w-3/4 mx-auto mt-6 p-6 bg-white shadow-md rounded-lg">
        <h3 className="text-xl font-semibold text-blue-700 mb-3">Recent Student Sign-ups</h3>
        <ul className="space-y-2">
          {recentSignUps.map((student, index) => (
            <li key={index} className="flex justify-between p-2 bg-gray-200 rounded-md">
              <span className="font-medium">{student.name}</span>
              <span className="text-gray-600">{student.course}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Reports Section */}
      <div id="reports" ref={reportRef} className="w-3/4 mx-auto mt-6 p-6 bg-white shadow-md rounded-lg">
        <h3 className="text-xl font-semibold text-blue-700 mb-3">Weekly & Monthly Reports</h3>
        <div className="flex gap-4 mb-4">
          <button className={`px-4 py-2 rounded-lg ${reportType === "weekly" ? "bg-blue-700 text-white" : "bg-gray-300"}`} onClick={() => setReportType("weekly")}>
            Weekly Report
          </button>
          <button className={`px-4 py-2 rounded-lg ${reportType === "monthly" ? "bg-blue-700 text-white" : "bg-gray-300"}`} onClick={() => setReportType("monthly")}>
            Monthly Report
          </button>
        </div>
        <ul>
          {reportData[reportType].map((report, index) => (
            <li key={index} className="p-2 border-b border-gray-300 flex justify-between">
              <span className="font-medium">{report.metric}:</span>
              <span className="text-gray-700">{report.value}</span>
            </li>
          ))}
        </ul>
        <button onClick={handlePrint} className="mt-4 px-4 py-2 bg-green-700 text-white rounded-lg">Export PDF</button>
      </div>
    </section>
  );
};

export default DashboardOverview;
