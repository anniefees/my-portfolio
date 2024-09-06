import React from 'react';

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <h2>Resume</h2>
      <h3>Education</h3>
      <p><strong>B.S. in Software Engineering</strong> - Western Governors University (Expected: Jan 2025)</p>

      <h3>Experience</h3>
      <ul>
        <li><strong>Full Stack Developer</strong> - Brigham Young University (2019 – 2021)</li>
        <li><strong>German-Qualified Flight Attendant</strong> - United Airlines (2021 – Present)</li>
        <li><strong>Barista</strong> - My Mom's Cafe (2021)</li>
      </ul>

      <h3>Skills</h3>
      <ul>
        <li>React, Angular, AWS, Python, JavaScript, TypeScript</li>
        <li>Cloud Platforms: AWS S3, EC2, RDS</li>
        <li>Fluent in English and German</li>
      </ul>
    </section>
  );
};

export default Resume;