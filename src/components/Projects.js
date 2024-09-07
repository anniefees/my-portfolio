import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section className="container">
      <h2 className="section-title">My Projects</h2>

      <div className="github-button">
        <a href="https://github.com/anniefees" className="button">Visit My GitHub</a>
      </div>

      {/* Certificates Section (Moved Above Professional Projects) */}
      <div className="section-container">
        <h3>Certificates</h3>
        <div className="certificate-item">
          <strong>AWS Certified Cloud Practitioner</strong>: Demonstrates knowledge of AWS Cloud services and architecture.
        </div>
        <div className="certificate-item">
          <strong>CompTIA Project+</strong>: Validates project management skills in technology environments.
        </div>
        <div className="certificate-item">
          <strong>Google IT Support Certificate</strong>: Provides foundational knowledge in IT support and networking.
        </div>
        <div className="certificate-item">
          <strong>Deutsch B2 (Goethe-Institut)</strong>: Certification of advanced German language proficiency from the prestigious Goethe-Institut.
        </div>
      </div>

      {/* Professional Projects Section */}
      <div className="section-container">
        <h3>Professional Projects</h3>
        <div className="projects-grid">
          <div className="project-item">
            <h4>BYU On-Campus Housing System</h4>
            <p>
              Contributed to the BYU On-Campus Housing ecosystem, creating icons and components still in use today. 
              Used Mendix, JavaScript, HTML, CSS, Angular, and React to build temporary functionality for the housing system.
              <br />
              <strong>Note:</strong> Much of the work involved Sensitive Security Information (SSI) and FERPA-protected information and systems. Due to confidentiality, specifics of the work cannot be shared.
            </p>
            <a href="https://housing.byu.edu/secure/services/c_main/default.aspx" target="_blank" rel="noopener noreferrer" className="button">
              Visit the site
            </a>
          </div>
        </div>
      </div>

      {/* Class Projects Section */}
      <div className="section-container">
        <h3>Class Projects</h3>
        <div className="projects-grid">
          <div className="project-item">
            <h4>Angular World Map Application (JavaScript Fundamentals)</h4>
            <p>
              Developed a functional Angular application that integrates an SVG-based world map. 
              Users can click on countries to view dynamically retrieved information from an external API.
            </p>
          </div>

          <div className="project-item">
            <h4>State Government Website (Front-End Web Development)</h4>
            <p>
              Created a multi-page website for a state government office, including information about cities, 
              population data, and navigation menus. HTML lists, tables, and forms with email verification were also implemented.
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
        </div>
      </div>

      {/* Relevant Courses Section */}
      <div className="section-container">
        <h3>Relevant Courses</h3>
        <div className="course-item">
          <h4>Network and Security Foundations</h4>
          <p>
            Introduced network classifications, communication protocols, and security measures, covering vulnerabilities 
            and mitigation techniques for LAN, WAN, and VPN.
          </p>
        </div>
        <div className="course-item">
          <h4>Data Management Foundations</h4>
          <p>
            Covered the fundamentals of data management, SQL, and security practices, including relational and hierarchical data types.
          </p>
        </div>
        <div className="course-item">
          <h4>Data Management Applications</h4>
          <p>
            Learned to create complex SQL queries, modify databases, and understand MySQL principles for efficient data management.
          </p>
        </div>
        <div className="course-item">
          <h4>Java Fundamentals</h4>
          <p>
            Covered object-oriented programming in Java, focusing on method creation, class design, and solving real-world business problems.
          </p>
        </div>
        <div className="course-item">
          <h4>Data Structures and Algorithms</h4>
          <p>
            Explored dynamic data structures, including stacks, queues, trees, and hash tables, focusing on algorithm efficiency.
          </p>
        </div>
        <div className="course-item">
          <h4>Advanced Data Management</h4>
          <p>
            Focused on advanced relational data modeling and the creation of data lakes and warehouses for large-scale data processing.
          </p>
        </div>
        <div className="course-item">
          <h4>Java Frameworks</h4>
          <p>
            Covered Java exception handling, frameworks, and how to develop complete applications using object-oriented principles.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;