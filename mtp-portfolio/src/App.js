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
          <Link to="/"><button className="btn btn-outline-dark">HOME</button></Link>
          <Link to="about"><button className="btn btn-outline-dark">ABOUT</button></Link>
          <Link to="projects"><button className="btn btn-outline-dark">PROJECTS</button></Link>
          <Link to="skills"><button className="btn btn-outline-dark">SKILLS</button></Link>
          <Link to="cv"><button className="btn btn-outline-dark">CV</button></Link>
        </div>
        <div className="nav2">
          <button className="btn btn-outline-dark">EMAIL</button>
          <button className="btn btn-outline-dark">LINKEDIN</button>
          <button className="btn btn-outline-dark">GITHUB</button>
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
