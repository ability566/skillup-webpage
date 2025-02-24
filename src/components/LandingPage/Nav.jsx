import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Using icons from lucide-react

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State for managing hamburger menu
  const location = useLocation();
  const navigate = useNavigate();

  // Detect scroll event for transparency
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to section smoothly
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Navigate to Admin Login Page
  const handleAdminLogin = () => {
    navigate("/admin-login");
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 flex items-center px-6 py-3 ${
        location.pathname === "/" ? (scrolled ? "bg-gray-600 shadow-md" : "bg-transparent") : "bg-gray-600"
      }`}
    >
      {/* SkillUp Academy Button - Left Aligned */}
      <Link
        to="/"
        className="text-2xl font-bold text-white transition-transform transform hover:scale-105"
      >
        SkillUp Academy
      </Link>

      {/* Hamburger Menu for Small Screens */}
      <button
        className="md:hidden ml-auto"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? (
          <X className="text-white" size={30} />
        ) : (
          <Menu className="text-white" size={30} />
        )}
      </button>

      {/* Navigation Links */}
      <div className={`hidden md:flex items-center space-x-6 ml-auto ${menuOpen ? "block" : "hidden"} md:block`}>
        <button
          onClick={() => handleScroll("about")}
          className="hover:underline text-white transition-transform transform hover:scale-105"
        >
          About Us
        </button>
        <button
          onClick={() => handleScroll("testimonials")}
          className="hover:underline text-white transition-transform transform hover:scale-105"
        >
          Testimonials
        </button>
        <Link to="/faqs" className="hover:underline text-white transition-transform transform hover:scale-105">
          FAQs
        </Link>
        <Link to="/contact" className="hover:underline text-white transition-transform transform hover:scale-105">
          Contact Us
        </Link>

        {/* Login Button (Navigates to Admin Login Page) */}
        {location.pathname === "/" && (
          <button
            onClick={handleAdminLogin}
            className="bg-blue-500 text-white px-4 py-2 rounded-md transition-transform transform hover:scale-110 hover:bg-blue-600 ml-10"
          >
            Admin
          </button>
        )}
      </div>

      {/* Mobile Menu (displayed when hamburger is clicked) */}
      <div className={`md:hidden ${menuOpen ? "block" : "hidden"} absolute top-16 left-0 w-full bg-gray-600 text-white p-4`}>
        <button
          onClick={() => handleScroll("about")}
          className="block hover:underline py-2"
        >
          About Us
        </button>
        <button
          onClick={() => handleScroll("testimonials")}
          className="block hover:underline py-2"
        >
          Testimonials
        </button>
        <Link to="/faqs" className="block hover:underline py-2">
          FAQs
        </Link>
        <Link to="/contact" className="block hover:underline py-2">
          Contact Us
        </Link>

        {/* Login Button (Navigates to Admin Login Page) */}
        {location.pathname === "/" && (
          <button
            onClick={handleAdminLogin}
            className="bg-blue-500 text-white px-4 py-2 rounded-md transition-transform transform hover:scale-110 hover:bg-blue-600 mt-4"
          >
            Admin
          </button>
        )}
      </div>
    </nav>
  );
};

export default Nav;
