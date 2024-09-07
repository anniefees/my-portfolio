import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <section className="container">
      
      {/* Summary Section without Header */}
      <div className="summary-container">
        <p>
          I am a software engineering student with a strong background in full-stack web development, 
          cloud platforms (AWS), and experience working in Agile environments. I have also completed 
          several high-level software engineering projects, and my time as a German-qualified flight attendant 
          gives me unique insight into real-world user needs for airline industry applications.
        </p>
      </div>

      {/* Professional Experience Section */}
      <div className="section-container">
        <h3>Professional Experience</h3>

        <div className="experience-item">
          <h4>Flight Attendant (German Qualified) - United Airlines</h4>
          <p>
            <strong>Responsibilities:</strong> Served nearly 300 passengers per flight on long-haul international flights, 
            flying between Washington, D.C., and Europe. Managed in-flight services, ensured customer satisfaction, and 
            provided safety support.
            <br />
            <strong>Key Accomplishments:</strong> Completed over 150 long-haul flights, managing service for 250-300 economy passengers 
            or 50 first-class passengers per flight.
          </p>
        </div>

        <div className="experience-item">
          <h4>Web Developer - Brigham Young University</h4>
          <p>
            Collaborated with a team of 10 developers to design, develop, and maintain the On-Campus Housing system. 
            I created icons and several components still in use today, using technologies such as Mendix, JavaScript, HTML, CSS, 
            Angular, and React.
            <br />
            Built temporary functionality to support operations while permanent solutions were being developed, 
            streamlining the user experience for over 8,000 students.
          </p>
        </div>

        <div className="experience-item">
          <h4>Barista - My Mom's Cafe, Salzburg, Austria</h4>
          <p>
            Provided exceptional customer service, communicated fluently in both German and English, and 
            promoted seasonal beverages. Managed cash transactions and maintained a clean, efficient working environment.
            <br />
            <strong>Key Accomplishment:</strong> Awarded 'Employee of the Month' for exceptional performance based on positive customer feedback.
          </p>
        </div>

        <div className="experience-item">
          <h4>Tour Guide - Fraulein Maria’s Bicycle Tours, Salzburg, Austria</h4>
          <p>
            Led private and group bicycle tours, sharing insights on local history and culture while ensuring guest safety.
            Provided personalized tours based on guests’ interests and abilities, enhancing their overall experience.
          </p>
        </div>

        <div className="experience-item">
          <h4>English as a Foreign Language Teacher - Italki</h4>
          <p>
            Delivered personalized English lessons to students worldwide, enhancing language proficiency and cultural understanding. 
            Conducted over 850 online classes with a 75% student retention rate and improved student performance by 40%.
          </p>
        </div>
      </div>

      {/* Education Section */}
      <div className="section-container">
        <h3>Education</h3>
        <div className="education-item">
          <h4>B.S. in Software Engineering (Expected Early Spring 2025) - Western Governors University</h4>
        </div>
        <div className="education-item">
          <h4>B.S. Informatik (not complete) Paris Lodron Universitaet Salzburg -- Salzburg, Austria</h4>
          <p>
            Completed approximately 2.5 years of coursework in Informatics with a focus on data management and 
            software development. The program emphasized hands-on learning in programming and problem-solving, 
            preparing students for practical applications in technology.
          </p>
        </div>
        <div className="education-item">
          <h4>Vilseck High School - Vilseck, Germany</h4>
        </div>
      </div>

      {/* Skills and Hobbies Section in Two Columns */}
      <div className="section-container two-column">
        <div className="skills-column">
          <h3>Skills</h3>
          <ul className="skills-list">
            <li><strong>Technical Skills</strong>: Proficient in AWS, React, Angular, Python, Java, JavaScript, HTML, CSS, Bootstrap, and Mendix.</li>
            <li><strong>Cloud Platforms</strong>: Hands-on experience with AWS, including EC2, S3, and Lambda.</li>
            <li><strong>Version Control</strong>: Expertise in Git and GitHub for version control, branching strategies, and collaborative workflows.</li>
            <li><strong>Agile Methodology</strong>: Skilled in Agile/Scrum environments, including sprint planning, daily stand-ups, and retrospective meetings.</li>
            <li><strong>Problem Solving</strong>: Strong analytical and troubleshooting skills, with a focus on optimizing performance and user experience.</li>
            <li><strong>UI/UX Design</strong>: Experience in wireframing, prototyping, and usability testing to enhance user experience in web applications.</li>
            <li><strong>Communication</strong>: Fluent in both English and German (B2 certified), with experience in international customer service and technical documentation.</li>
          </ul>
        </div>

        <div className="hobbies-column">
          <h3>Hobbies</h3>
          <ul className="hobbies-list">
            <li><strong>Snowboarding</strong>: Explored slopes in Colorado, Utah, West Virginia, Wyoming, Switzerland, Austria, Germany, and France.</li>
            <li><strong>Golf</strong>: State champion in high school, now plays casually.</li>
            <li><strong>Running</strong>: Completed a half marathon.</li>
            <li><strong>Ballroom Dancing</strong>: Competitively danced as a child, continues as a creative outlet.</li>
            <li><strong>Culinary Tourism</strong>: Explored culinary traditions in over 42 countries.</li>
            <li><strong>Travel</strong>: Visited 42 countries, embracing cultural exchanges and adventure.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Resume;