import { useState, useEffect } from "react";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const [adminData, setAdminData] = useState({
    email: "",
    role: "Administrator",
    totalStudents: 0,
    activeCourses: 0,
    retentionRate: 0,
  });

  useEffect(() => {
    // Retrieve admin data from Local Storage
    const storedAdmin = localStorage.getItem("adminData");

    if (storedAdmin) {
      try {
        const parsedAdmin = JSON.parse(storedAdmin);

        setAdminData({
          email: parsedAdmin.email || "No Email",
          role: "Administrator",
          totalStudents: 1200,
          activeCourses: 35,
          retentionRate: 85,
        });

      } catch (error) {
        console.error("Error parsing admin data from Local Storage:", error);
      }
    }
  }, []); // Runs only once when the component mounts

  return (
    <>
      {/* Toggle Button */}
      <button
        className="fixed top-4 left-5 z-50 p-2 bg-gray-600 text-white rounded-md shadow-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white p-6 shadow-lg transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-64"
        }`}
      >
        <h2 className="text-xl font-semibold mt-12">Admin Dashboard</h2>
        <hr className="my-4 border-gray-600" />

        {/* Admin Info */}
        <div className="mt-6">
          <p><strong>Email:</strong> {adminData.email}</p>
          <p><strong>Role:</strong> {adminData.role}</p>
        </div>

        {/* System Stats */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold">System Stats</h3>
          <p><strong>Total Students:</strong> {adminData.totalStudents}</p>
          <p><strong>Active Courses:</strong> {adminData.activeCourses}</p>
          <p><strong>Retention Rate:</strong> {adminData.retentionRate}%</p>
        </div>

        {/* Quick Actions */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold">Quick Actions</h3>
          <ul className="mt-2">
            <li className="py-1 cursor-pointer hover:underline">Manage Students</li>
            <li className="py-1 cursor-pointer hover:underline">Manage Courses</li>
            <li className="py-1 cursor-pointer hover:underline">View Reports</li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
