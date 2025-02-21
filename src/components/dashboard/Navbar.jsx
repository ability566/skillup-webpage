import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BellIcon } from "@heroicons/react/24/outline";


const Navbar = ({ isSidebarOpen, toggleSidebar }) => {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState([
    { id: 1, message: "New student enrolled: John Doe", read: false },
    { id: 2, message: "5 courses completed today", read: false },
    { id: 3, message: "System maintenance scheduled for tomorrow", read: false }
  ]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map((notif) => ({ ...notif, read: true })));
  };

  return (
    <nav
      className={`fixed top-0 left-0 h-16 bg-gray-800 text-white shadow-md flex items-center px-6 z-50 w-full transition-all duration-300 ${
        isSidebarOpen ? "md:ml-64 w-[calc(100%-16rem)]" : "ml-0 w-full"
      }`}
    >
      {/* Sidebar Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="mr-4 p-2 rounded-md bg-gray-200 hover:bg-gray-300 text-black"
      >
        ☰
      </button>

      {/* SkillUp Academy Button */}
      <button
        onClick={() => navigate("/")}
        className="text-xl font-bold transition-transform hover:scale-105 hover:text-gray-200"
      >
        SkillUp Academy
      </button>

      {/* Spacer to push items to the right */}
      <div className="flex-grow"></div>

      {/* Notification Bell */}
      <div className="relative mr-6">
        <button onClick={toggleDropdown} className="relative p-2 hover:text-gray-300">
          <BellIcon className="h-6 w-6" />
          {notifications.some((notif) => !notif.read) && (
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
              {notifications.filter((notif) => !notif.read).length}
            </span>
          )}
        </button>

        {/* Notification Dropdown */}
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-64 bg-white text-black shadow-lg rounded-lg overflow-hidden">
            <div className="p-2 border-b flex justify-between items-center">
              <span className="font-semibold">Notifications</span>
              <button
                onClick={markAllAsRead}
                className="text-blue-600 text-sm hover:underline"
              >
                Mark all as read
              </button>
            </div>
            <ul className="max-h-60 overflow-y-auto">
              {notifications.length > 0 ? (
                notifications.map((notif) => (
                  <li
                    key={notif.id}
                    className={`px-4 py-2 text-sm ${notif.read ? "text-gray-500" : "font-bold"}`}
                  >
                    {notif.message}
                  </li>
                ))
              ) : (
                <li className="px-4 py-2 text-sm text-gray-500">No new notifications</li>
              )}
            </ul>
          </div>
        )}
      </div>

      {/* Sign Out Button */}
      <button
        onClick={() => {
          localStorage.removeItem("signupData");
          navigate("/");
        }}
        className="p-2 bg-red-500 text-white rounded-md hover:bg-red-600 hover:scale-105 transition-transform"
      >
        Sign Out
      </button>
    </nav>
  );
};

export default Navbar;
