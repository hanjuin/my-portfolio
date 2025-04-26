import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="pt-24 flex flex-col items-center w-full px-6 text-gray-900">
      
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-24 w-full">
        <h1 className="text-5xl font-bold mb-4">Hi, I'm Han</h1>
        <p className="text-xl text-gray-600 mb-8">Developer & Research Enthusiast</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/projects">
            <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
              View Projects
            </button>
          </Link>
          <a href="/assets/resume.pdf" target="_blank" rel="noopener noreferrer">
            <button className="px-6 py-2 border-2 border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition">
              Download Resume
            </button>
          </a>
        </div>
      </section>

      {/* About Me Preview */}
      <section className="text-center py-16 w-full max-w-3xl">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-gray-600 mb-6">
          I'm passionate about building software solutions and conducting research in AI, traffic prediction, and currency recognition. 
          I love combining creativity and logic to solve real-world problems.
        </p>
        <Link to="/about" className="text-blue-600 hover:underline font-semibold">
          Learn more →
        </Link>
      </section>

      {/* Featured Projects */}
      <section className="py-16 w-full max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Project Cards */}
          <div className="p-6 border rounded-lg bg-white shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Assignment Management System</h3>
            <p className="text-gray-500 mb-4">React + Node.js</p>
            <Link to="/projects" className="text-blue-600 hover:underline text-sm">
              View Project
            </Link>
          </div>

          <div className="p-6 border rounded-lg bg-white shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Mobile Scanning Application</h3>
            <p className="text-gray-500 mb-4">React Native + Python</p>
            <Link to="/projects" className="text-blue-600 hover:underline text-sm">
              View Project
            </Link>
          </div>

          <div className="p-6 border rounded-lg bg-white shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Currency Recognition (CNN)</h3>
            <p className="text-gray-500 mb-4">MATLAB + YOLO</p>
            <Link to="/projects" className="text-blue-600 hover:underline text-sm">
              View Project
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Preview */}
      <section className="text-center py-20 w-full max-w-2xl">
        <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
        <p className="text-gray-600 mb-8">
          Feel free to reach out if you're interested in working together or just want to connect!
        </p>
        <Link to="/contact">
          <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            Contact Me
          </button>
        </Link>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500 text-sm w-full">
        © 2025 Han Juin Wong. All rights reserved.
      </footer>

    </div>
  );
};

export default Home;
