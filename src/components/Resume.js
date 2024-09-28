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
          <h4>Flight Attendant (German Qualified) - United Airlines, Washington D.C.</h4>
          <p><em>2023 – Present</em></p>
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
          <h4>English as a Foreign Language Teacher - Italki, Remote</h4>
          <p><em>2022 – 2023</em></p>
          <p>
            Delivered personalized English lessons to students worldwide, enhancing language proficiency and cultural understanding. 
            Conducted over 850 online classes with a 75% student retention rate and improved student performance by 40%.
          </p>
        </div>

        <div className="experience-item">
          <h4>Tour Guide - Fraulein Maria’s Bicycle Tours, Salzburg, Austria</h4>
          <p><em>2022</em></p>
          <p>
            Led private and group bicycle tours, sharing insights on local history and culture while ensuring guest safety.
            Provided personalized tours based on guests’ interests and abilities, enhancing their overall experience.
          </p>
        </div>

        <div className="experience-item">
          <h4>Barista - My Mom's Cafe, Salzburg, Austria</h4>
          <p><em>2021</em></p>
          <p>
            Provided exceptional customer service, communicated fluently in both German and English, and 
            promoted seasonal beverages. Managed cash transactions and maintained a clean, efficient working environment.
            <br />
            <strong>Key Accomplishment:</strong> Awarded 'Employee of the Month' for exceptional performance based on positive customer feedback.
          </p>
        </div>

        <div className="experience-item">
          <h4>Web Developer - Brigham Young University, Provo, Utah</h4>
          <p><em>2020</em></p>
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
          <h4>Gas Attendant - Fabulous Freddy's Car Wash, St. George, Utah</h4>
          <p><em>2018</em></p>
          <p>
            Provided customer service at a full-service car wash, handled fueling, and maintained safety standards.
          </p>
        </div>

        <div className="experience-item">
          <h4>Student Dance Instructor - Body Motion Dance Company, Park City, Utah</h4>
          <p><em>2015 – 2017</em></p>
          <p>
            Taught dance classes to 10-30 students three times per week, fostering technical skills and performance growth.
          </p>
        </div>
      </div>

      {/* Education Section */}
      <div className="section-container">
        <h3>Education</h3>
        <div className="education-item">
          <h4>B.S. in Software Engineering (Expected Early 2025) - Western Governors University</h4>
          <p><em>2023 – Present</em></p>
        </div>
        <div className="education-item">
          <h4>B.S. in Computer Science - Paris Lodron Universität Salzburg, Austria</h4>
          <p><em>2019 – 2021</em></p>
          <p>
            Completed 2 years of coursework in Computer Science with a focus on data management and 
            software development. The program emphasized hands-on learning in programming and problem-solving, 
            preparing students for practical applications in technology.
          </p>
        </div>
        <div className="education-item">
          <h4>Brigham Young University - Provo, Utah</h4>
          <p><em>Fall 2020</em></p>
          <p>Studied Computer Science for one semester, focusing on foundational programming concepts and systems design.</p>
        </div>
        <div className="education-item">
          <h4>Vilseck High School - Vilseck, Germany</h4>
          <p><em>Graduated 2020</em></p>
          <p><strong>Accolades:</strong> Graduated as salutatorian with a 4.3 GPA.
            <br />
            - Girls Golf DoDEA European Champion, 2019
            <br />
            - Cheer Captain, European All-State Team (2019–2020)
            <br />
            - Bavarian Military Youth of the Year, 2019
            <br />
            - Best Female Golfer, 2018
            <br />
            - Utah State 2A Drill Showmanship Award, 2017
          </p>
        </div>
      </div>

      {/* Certificates Section */}
      <div className="section-container">
        <h3>Certificates</h3>
        <ul className="certificates-list">
          <li><strong>AWS Certified Cloud Practitioner</strong> - Obtained 2023</li>
          <li><strong>CompTIA Project+</strong> - Obtained 2023</li>
          <li><strong>ITIL 4 Foundation</strong> - Obtained 2023</li>
          <li><strong>Google IT Support Certificate</strong> - Obtained 2022</li>
          <li><strong>Deutsch B2 (Goethe-Institut)</strong> - Obtained 2020</li>
        </ul>
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
            <li><strong>Golf</strong>: <a href="https://www.stripes.com/sports/fees-shenk-hold-onto-leads-to-become-european-champs-1.602542" target="_blank" rel="noopener noreferrer">2019 DoDEA European Girls Golf Champion</a></li>
            <li><strong>Running</strong>: Completed the DC Half Marathon, September 2024.</li>
            <li><strong>Ballroom Dancing</strong>: Competitively danced as a child, continues as a creative outlet.</li>
            <li><strong>Travel</strong>: Visited 42 countries across 4 continents, embracing cultural exchanges and adventure.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Resume;