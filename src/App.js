import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <Router basename="/my-portfolio"> {/* Use basename for GitHub Pages */}
      <div className="App">
        <Header />
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li> {/* Link for client-side routing */}
            <li><Link to="/resume">Resume</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        
        {/* Define routes for different pages */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home is the default page */}
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;