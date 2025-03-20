import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/authSlice";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
    setMenuOpen(false); 
  };

  return (
    <nav className="bg-white shadow-md border-b border-gray-300 py-4 px-6 md:px-12 top-0 w-full z-50 flex items-center justify-between">

      <div className="text-2xl font-bold text-blue-600 cursor-pointer">
        BrandLogo
      </div>

      <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
        <li>
          <NavLink to="/" className={({ isActive }) =>
            isActive ? "text-blue-600 font-bold border border-blue-600 px-3 py-2 rounded-lg" : "hover:text-blue-600"
          }>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) =>
            isActive ? "text-blue-600 font-bold border border-blue-600 px-3 py-2 rounded-lg" : "hover:text-blue-600"
          }>
            About
          </NavLink>
        </li>
      </ul>

      <div className="flex items-center gap-4">
        {/* Authentication Buttons - Always Visible */}
        {token ? (
          <button onClick={handleLogout} className="text-red-600 font-medium border border-red-600 px-4 py-2 rounded-lg hover:bg-red-100">
            Logout
          </button>
        ) : (
          <>
            <NavLink to="/login" className={({ isActive }) =>
              isActive ? "text-blue-600 font-bold border border-blue-600 px-4 py-2 rounded-lg" : "text-blue-600 font-medium border border-blue-600 px-4 py-2 rounded-lg hover:bg-blue-100"
            }>
              Login
            </NavLink>
            <NavLink to="/register" className={({ isActive }) =>
              isActive ? "bg-blue-600 text-white font-bold px-4 py-2 rounded-lg" : "bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            }>
              Sign Up
            </NavLink>
          </>
        )}


        <div className="md:hidden text-2xl cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {menuOpen && (
        <ul className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center gap-6 py-6 md:hidden">
          <li>
            <NavLink to="/" onClick={() => setMenuOpen(false)} className="text-gray-700 font-medium hover:text-blue-600">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={() => setMenuOpen(false)} className="text-gray-700 font-medium hover:text-blue-600">
              About
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
