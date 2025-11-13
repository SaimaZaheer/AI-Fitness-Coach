import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md py-4 px-8 flex justify-between items-center z-50">
      <h1 className="text-2xl font-bold text-orange-500">AI Fitness Coach</h1>
      <ul className="flex space-x-6 text-gray-700 font-medium">
        <li>
          <Link to="/" className="hover:text-orange-500 transition duration-200">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-orange-500 transition duration-200">
            About
          </Link>
        </li>
        <li>
          <Link to="/login" className="hover:text-orange-500 transition duration-200">
            Login
          </Link>
        </li>

        <li>
          <Link to="/signup" className="hover:text-orange-500 transition duration-200">
            SignUp
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
