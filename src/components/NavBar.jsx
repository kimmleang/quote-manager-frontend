import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-white shadow-md border-b border-gray-300 py-4 px-6 md:px-12 top-0 w-full z-50 flex items-center">
      <div className="text-2xl font-bold text-blue-600 cursor-pointer flex-1">
        BrandLogo
      </div>
      <ul className="hidden md:flex gap-6 text-gray-700 font-medium absolute left-1/2 transform -translate-x-1/2">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-bold border border-blue-600 px-3 py-2 rounded-lg"
                : "hover:text-blue-600"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/service"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-bold border border-blue-600 px-3 py-2 rounded-lg"
                : "hover:text-blue-600"
            }
          >
            Service
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-bold border border-blue-600 px-3 py-2 rounded-lg"
                : "hover:text-blue-600"
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-bold border border-blue-600 px-3 py-2 rounded-lg"
                : "hover:text-blue-600"
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>

      {/* Buttons (Pushes to the right) */}
      <div className="hidden md:flex gap-4 flex-1 justify-end">
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-bold border border-blue-600 px-4 py-2 rounded-lg"
              : "text-blue-600 font-medium border border-blue-600 px-4 py-2 rounded-lg hover:bg-blue-100"
          }
        >
          Login
        </NavLink>
        <NavLink
          to="/register"
          className={({ isActive }) =>
            isActive
              ? "bg-blue-600 text-white font-bold px-4 py-2 rounded-lg"
              : "bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          }
        >
          Sign Up
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
