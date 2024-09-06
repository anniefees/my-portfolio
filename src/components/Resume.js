import React from 'react';

const Resume = () => {
  return (
    <section className="resume">
      <h2>Professional Summary</h2>
      <p>
        Ambitious and adaptable Software Engineering student set to graduate in December 2024, eager to transition fully into a
        technology-focused career. With hands-on experience as a Full Stack Web Developer and a background as a German-qualified
        Flight Attendant, I bring both technical expertise and a unique operational perspective.
      </p>

      <h2>Experience</h2>
      <h3>Flight Attendant – German Qualified (United Airlines)</h3>
      <p>March 2023 – Present</p>
      <ul>
        <li>Provided exceptional customer service and ensured passenger safety.</li>
        <li>Developed understanding of technology integration in airline operations.</li>
        <li>Managed responsibilities in high-pressure environments.</li>
      </ul>

      <h3>Full Stack Web Developer (Brigham Young University)</h3>
      <p>July 2020 – December 2020</p>
      <ul>
        <li>Designed and maintained a campus housing system using Python, JavaScript, and AWS.</li>
        <li>Developed a cloud-based database for 8,000+ students, improving data accessibility.</li>
        <li>Configured REST APIs to streamline user experience and operational efficiency.</li>
      </ul>

      <h2>Education</h2>
      <p>B.S. Software Engineering, Western Governors University (Expected: Dec 2024)</p>
    </section>
  );
};

export default Resume;