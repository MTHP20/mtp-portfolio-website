import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './sections/home';
import About from './sections/about';
import Projects from './sections/projects';
import Skills from './sections/skills';
import CV from './sections/cv';
import './App.css';
import { BsLinkedin, BsGithub, BsEnvelope } from "react-icons/bs";

function App() {
  const location = useLocation();

  // Function to determine the button's class based on active route
  const getButtonClass = (path) => {
    return location.pathname === path ? "btn btn-warning" : "btn btn-dark";
  };

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top of the page
  }, [location]);

  return (
    <>
      <header>
        <div className="nav1">
          <Link to="/"><button className={getButtonClass("/")}>HOME</button></Link>
          <Link to="/about"><button className={getButtonClass("/about")}>ABOUT</button></Link>
          <Link to="/projects"><button className={getButtonClass("/projects")}>PROJECTS</button></Link>
          <Link to="/skills"><button className={getButtonClass("/skills")}>SKILLS</button></Link>
          <Link to="/cv"><button className={getButtonClass("/cv")}>CV</button></Link>
        </div>
        <div className="nav2">
          <button className="btn btn-dark"><BsEnvelope /></button>
          <a href="https://www.linkedin.com/in/mthp/" target="_blank" rel="noopener noreferrer">
            <button className="btn btn-dark"><BsLinkedin /></button>
          </a>
          <a href="https://github.com/mthp20" target="_blank" rel="noopener noreferrer">
            <button className="btn btn-dark"><BsGithub /></button>
          </a>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/cv" element={<CV />} />
      </Routes>
    </>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
