import React from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-md py-4 px-6 md:px-12 flex justify-between items-center">
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-600 cursor-pointer" onClick={() => navigate("/")}>
        BrandLogo
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
        <li className="hover:text-blue-600 cursor-pointer" onClick={() => navigate("/")}>Home</li>
        <li className="hover:text-blue-600 cursor-pointer"><a href="#">Service</a></li>
        <li className="hover:text-blue-600 cursor-pointer"><a href="#">About</a></li>
        <li className="hover:text-blue-600 cursor-pointer"><a href="#">Contact</a></li>
      </ul>

      {/* Buttons */}
      <div className="hidden md:flex space-x-4">
        <button className="text-blue-600 font-medium border border-blue-600 px-4 py-2 rounded-lg hover:bg-blue-100" onClick={() => navigate("/login")}>
          Login
        </button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700" onClick={() => navigate("/register")}>
          Sign Up
        </button>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden text-gray-700 text-2xl cursor-pointer">☰</div>
    </nav>
  );
};

export default NavBar;
