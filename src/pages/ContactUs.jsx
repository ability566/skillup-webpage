import React from "react";

const ContactUs = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-3xl">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
        <p className="text-gray-700 mb-4">For any inquiries, feel free to reach out to us:</p>
        <ul className="text-gray-700 space-y-2">
          <li><strong>Email:</strong> skillupacademy@gmail.com</li>
          <li><strong>Phone:</strong> +123 456 7890</li>
          <li><strong>Location:</strong> 123 SkillUp Street, Tech City, Accra - Ghana</li>
        </ul>
      </div>
    </div>
  );
};

export default ContactUs;
