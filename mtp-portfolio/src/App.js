import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './sections/home';
import About from './sections/about';
import Projects from './sections/projects';
import Skills from './sections/skills';
import CV from './sections/cv';
import './App.css';

function App() {
  return (
    <Router>
      <header>
        <div className="nav1">
          <Link to="/"><button className="btn btn-dark">HOME</button></Link>
          <Link to="about"><button className="btn btn-dark">ABOUT</button></Link>
          <Link to="projects"><button className="btn btn-dark">PROJECTS</button></Link>
          <Link to="skills"><button className="btn btn-dark">SKILLS</button></Link>
          <Link to="cv"><button className="btn btn-dark">CV</button></Link>
        </div>
        <div className="nav2">
          <button className="btn btn-dark">EMAIL</button>
          <a href="https://www.linkedin.com/in/mthp/" target="_blank" rel="noopener noreferrer">
            <button className="btn btn-dark">LINKEDIN</button>
          </a>
          <a href="github.com/mthp20" target="_blank" rel="noopener noreferrer">
            <button className="btn btn-dark">GITHUB</button>
          </a>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="skills" element={<Skills />} />
        <Route path="cv" element={<CV />} />
      </Routes>
    </Router>
  );
}

export default App;
