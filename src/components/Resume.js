import React from 'react';

const Resume = () => {
  return (
    <section className="resume">
      <h2>Professional Summary</h2>
      <p>
        Ambitious and adaptable Software Engineering student set to graduate in January 2025, eager to transition fully into a technology-focused career. With hands-on experience as a Full Stack Web Developer and a background as a German-qualified Flight Attendant, I bring both technical expertise and a unique operational perspective.
      </p>

      <h2>Experience</h2>

      {/* Flight Attendant Experience */}
      <h3>Flight Attendant – German Qualified (United Airlines)</h3>
      <p>March 2023 – Present</p>
      <ul>
        <li>Served nearly 300 passengers per flight, averaging two long-haul flights per week, primarily between Washington, D.C., and Europe.</li>
        <li>Completed over 150 long-haul flights, managing the needs of 250-300 economy passengers or 50 first-class passengers per flight.</li>
        <li>Developed insights into operational challenges for crew members, leveraging this knowledge to provide feedback on crew-related technology.</li>
      </ul>

      {/* Italki Experience */}
      <h3>English Teacher (Italki)</h3>
      <p>January 2022 – Present</p>
      <ul>
        <li>Developed personalized lesson plans for students worldwide, teaching an average of 21 students per week.</li>
        <li>Conducted over 850 online classes, achieving a 40% improvement in student performance and a 75% student retention rate.</li>
      </ul>

      {/* Barista Experience */}
      <h3>Barista (My Mom's Cafe, Salzburg)</h3>
      <p>April 2021 – September 2021</p>
      <ul>
        <li>Provided customer service excellence and managed up to 50 customers per shift.</li>
        <li>Fluently communicated in both German and English, offering recommendations on seasonal drinks and preparing a variety of coffee and tea beverages.</li>
        <li>Recognized as 'Employee of the Month' for exceptional service based on customer feedback and product knowledge.</li>
      </ul>

      {/* Tour Guide Experience */}
      <h3>Tour Guide (Fraulein Maria’s Bicycle Tours, Salzburg)</h3>
      <p>April 2021 – September 2021</p>
      <ul>
        <li>Led private and group bicycle tours with an average group size of 10, tailoring experiences based on guests' interests and abilities.</li>
        <li>Provided local historical and cultural insights in both English and German, while ensuring guest safety and satisfaction.</li>
      </ul>

      {/* Full Stack Web Developer Experience */}
      <h3>Full Stack Web Developer (Brigham Young University)</h3>
      <p>July 2020 – December 2020</p>
      <ul>
        <li>Collaborated in a team of 10 to design, develop, and maintain a campus housing management system used by over 8,000 students.</li>
        <li>Configured REST APIs to integrate web applications, increasing operational efficiency by 20%.</li>
        <li>Developed a cloud-based database on AWS S3, improving data accessibility by 30%.</li>
        <li>Resolved technical issues and provided customer support, ensuring compliance with FERPA standards.</li>
      </ul>

      <h2>Education</h2>
      <p>B.S. Software Engineering, Western Governors University (Expected: January 2025)</p>
      <p>High School Diploma, [Your High School Name], 2015</p>

      <h2>Certificates</h2>
      <ul>
        <li>ITIL4 Foundation</li>
        <li>CompTIA Project+</li>
        <li>AWS Certified Cloud Practitioner</li>
        <li>Google IT Support Certificate</li>
        <li>Deutsch B2 (German B2)</li>
      </ul>

      <h2>Skills</h2>
      <ul>
        <li>Full Stack Web Development (React, Angular, Python, JavaScript)</li>
        <li>AWS Cloud Services</li>
        <li>Agile/Scrum Methodology</li>
        <li>German and English Fluency</li>
      </ul>

      <h2>Hobbies</h2>
      <ul>
        <li>Snowboarding (experience in Colorado, Utah, Switzerland, and more)</li>
        <li>Golf (High School State Champion, casual player now)</li>
        <li>Ballroom Dancing (former competitive dancer, now a creative outlet)</li>
        <li>Travel & Culinary Tourism (visited 42 countries)</li>
        <li>Running (Half marathon completed, with more races planned)</li>
      </ul>
    </section>
  );
};

export default Resume;