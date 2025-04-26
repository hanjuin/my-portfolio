import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="bg-white w-full shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          Han Juin Wong
        </Link>
        <div className="flex space-x-6 text-gray-700 font-medium">
          <Link to="/about" className="hover:text-blue-600 transition">About</Link>
          <Link to="/resume" className="hover:text-blue-600 transition">Resume</Link>
          <Link to="/papers" className="hover:text-blue-600 transition">Papers</Link>
          <Link to="/projects" className="hover:text-blue-600 transition">Projects</Link>
          <Link to="/skills" className="hover:text-blue-600 transition">Skills</Link>
          <Link to="/contact" className="hover:text-blue-600 transition">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
