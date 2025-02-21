import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import FAQs from "./pages/FAQs";
import ContactUs from "./pages/ContactUs";
import StudentDashboard from "./pages/StudentDashboard";  // Student Dashboard Route
import AdminLoginPage from "./pages/AdminLoginPage"; // Import Admin Login Page
import AdminDashboard from "./pages/AdminDashboard"; // Import Admin Dashboard
import Nav from "./components/LandingPage/Nav";

function App() {
  return (
    <>
      <Nav />  {/* Navbar only appears once */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} /> 
        <Route path="/admin-login" element={<AdminLoginPage />} />  {/* Admin Login Page */}
        <Route path="/admin-dashboard" element={<AdminDashboard />} />  {/* Admin Dashboard */}
      </Routes>
    </>
  );
}

export default App;
