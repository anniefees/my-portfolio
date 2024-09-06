import React from 'react';

const Projects = () => {
  return (
    <section className="projects">
      <h2>My Projects</h2>
      <ul>
        <li>
          <strong>Campus Housing Management System</strong> (Python, AWS, Angular)
          <p>A cloud-based system to manage housing assignments for over 8,000 students.</p>
        </li>
        <li>
          <strong>Portfolio Website</strong> (React, JavaScript, CSS)
          <p>A responsive personal portfolio website to showcase my experience and skills.</p>
        </li>
        <li>
          <strong>E-Commerce Website</strong> (React, Node.js, MongoDB)
          <p>A full-stack e-commerce application with user authentication and payment processing.</p>
        </li>
      </ul>
    </section>
  );
};

export default Projects;