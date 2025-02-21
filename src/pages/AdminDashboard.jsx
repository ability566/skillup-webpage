import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/dashboard/Navbar";
import Sidebar from "../components/dashboard/Sidebar";
import DashboardOverview from "../components/dashboard/DashboardOverview";

const AdminDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Helmet>
        <title>Dashboard - SkillUp Academy</title>
        <meta name="description" content="Access your SkillUp Academy dashboard to track progress and manage your courses." />
        <meta name="keywords" content="SkillUp Academy, Dashboard, Learning Management, Course Progress" />
        <meta name="author" content="SkillUp Academy Team" />
        <meta property="og:title" content="Dashboard - SkillUp Academy" />
        <meta property="og:description" content="Track your learning progress and explore new courses on SkillUp Academy." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.skillupacademy.com/dashboard" />
        <meta property="og:image" content="https://www.skillupacademy.com/dashboard-preview.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dashboard - SkillUp Academy" />
        <meta name="twitter:description" content="Manage your courses and track progress with the SkillUp Academy dashboard." />
        <meta name="twitter:image" content="https://www.skillupacademy.com/dashboard-preview.jpg" />
      </Helmet>

      <div className="flex h-screen">
        {/* Sidebar */}
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

        {/* Main Content */}
        <div 
          className={`flex-1 flex flex-col transition-all duration-300 ${
            isSidebarOpen ? "md:pl-64" : "pl-0"
          }`}
        >
          {/* Navbar */}
          <Navbar toggleSidebar={toggleSidebar} />

          {/* Main Dashboard Content */}
          <main className="p-6 bg-gray-100 flex-1 overflow-auto mt-16">
            <DashboardOverview />
          </main>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
