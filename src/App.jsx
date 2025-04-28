import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import Papers from './pages/Papers';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';

const App = () => {
  return (
    <div className="bg-white min-h-screen w-full">
      <Router>
        {/* Navbar outside the content box */}
        <Navbar />

        {/* Main content box */}
        <div className="max-w-7xl mx-auto bg-white-50 min-h-screen flex flex-col px-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/papers" element={<Papers />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

      </Router>
    </div>
  );
};

export default App;
