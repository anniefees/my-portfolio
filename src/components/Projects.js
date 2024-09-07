import React from 'react';
import './Projects.css'; // Use a separate CSS file for styling

const Projects = () => {
  return (
    <section className="projects">
      <h2>My Projects</h2>

      <div className="github-button">
        <a href="https://github.com/anniefees" className="button">Visit My GitHub</a>
      </div>

      {/* Professional Projects */}
      <h3>Professional Projects</h3>
      <div className="project-item">
        <h4>BYU On-Campus Housing System</h4>
        <p>
          I contributed to the BYU On-Campus Housing ecosystem, where I created several icons and small components 
          still in use today. We used Mendix, along with JavaScript, HTML, CSS, Bootstrap, Angular, and React to build 
          solutions necessary for the housing system.
        </p>
        <a href="https://housing.byu.edu/secure/services/c_main/default.aspx" target="_blank" rel="noopener noreferrer" className="button">
          Visit the site
        </a>
      </div>

      {/* Class Projects */}
      <h3>Class Projects</h3>
      <div className="project-item">
        <h4>Angular World Map Application (JavaScript Fundamentals)</h4>
        <p>
          Developed a functional Angular application for my JavaScript Fundamentals class that integrates an SVG-based world map. 
          Users can click on countries to view dynamically retrieved information from an external API.
        </p>
      </div>

      <div className="project-item">
        <h4>State Government Website (Front-End Web Development)</h4>
        <p>
          Created a website with multiple pages for a state government office, featuring information about cities, 
          population data, and navigation menus. The website includes HTML lists, tables, and a form with email verification.
        </p>
        <a href="https://anniefees.github.io/AnnieD479Task1/" target="_blank" rel="noopener noreferrer" className="button">
          Visit the project
        </a>
      </div>

      <div className="project-item">
        <h4>User Experience Design Website</h4>
        <p>
          Developed a rough draft prototype for stakeholders to demonstrate user experience design, including wireframes, 
          mockups, and user testing feedback. This project was created with HTML5 and CSS.
        </p>
        <a href="https://anniefees.github.io/AnnieD479Task1/" target="_blank" rel="noopener noreferrer" className="button">
          Visit the project
        </a>
      </div>

      {/* Relevant Courses */}
      <h3>Relevant Courses</h3>
      <div className="course-item">
        <h4>Network and Security Foundations</h4>
        <p>
          Introduced concepts of network classifications (LAN, WAN, WLAN), protocols, physical devices, and basic security 
          measures. Covered network vulnerabilities and mitigation techniques.
        </p>
      </div>

      <div className="course-item">
        <h4>Data Management Foundations</h4>
        <p>
          Covered data management concepts, SQL, DDL, DML, and differentiations of data (structured, unstructured, relational, etc.). 
          Introduced foundational data security practices.
        </p>
      </div>

      <div className="course-item">
        <h4>Java Fundamentals</h4>
        <p>
          Introduced object-oriented programming in Java, covering method creation, class design, and object-oriented principles 
          to solve real-world business problems.
        </p>
      </div>
      {/* You can add more courses as needed */}

      {/* Certificates */}
      <h3>Certificates</h3>
      <ul className="certificates-list">
        <li>
          <strong>AWS Certified Cloud Practitioner</strong>: Demonstrates knowledge of AWS Cloud services and architecture.
        </li>
        <li>
          <strong>CompTIA Project+</strong>: Validates project management skills in technology environments.
        </li>
        <li>
          <strong>Google IT Support Certificate</strong>: Provides foundational knowledge in IT support and networking.
        </li>
        <li>
          <strong>Deutsch B2 (Goethe-Institut)</strong>: Certification of advanced German language proficiency from the prestigious Goethe-Institut.
        </li>
      </ul>
    </section>
  );
};

export default Projects;