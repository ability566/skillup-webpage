import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    course: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First Name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.course) newErrors.course = "Please select a course";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    localStorage.setItem("signupData", JSON.stringify(formData));
    navigate("/student-dashboard"); // Navigate to StudentDashboard
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4 text-center">Sign Up</h2>

      <div className="mb-4">
        <label className="block text-gray-700">First Name</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
        />
        {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Last Name</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
        />
        {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Course of Interest</label>
        <select
          name="course"
          value={formData.course}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
        >
          <option value="">Select a course</option>
          <option value="Foundation of Data Analysis">Foundation of Data Analysis</option>
          <option value="Ask Questions to Make Data-Driven Decisions">Ask Questions to Make Data-Driven Decisions</option>
          <option value="Process Data from Dirty to Clean">Process Data from Dirty to Clean</option>
          <option value="Preparing Data for Exploration">Preparing Data for Exploration</option>
          <option value="Analyze Data to Answer Questions">Analyze Data to Answer Questions</option>
          <option value="Share Data through the Art of Visualization">Share Data through the Art of Visualization</option>
          <option value="Data Analysis with R Programming and Python">Data Analysis with R Programming and Python</option>
        </select>
        {errors.course && <p className="text-red-500 text-sm">{errors.course}</p>}
      </div>

      <button type="submit" className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600">
        Submit
      </button>
    </form>
  );
};

export default SignupForm;
