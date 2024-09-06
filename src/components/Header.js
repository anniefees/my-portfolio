import React from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="home" smooth={true}>Home</Link></li>
          <li><Link to="about" smooth={true}>About Me</Link></li>
          <li><Link to="resume" smooth={true}>Resume</Link></li>
          <li><Link to="projects" smooth={true}>Projects</Link></li>
          <li><Link to="contact" smooth={true}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;