import React from 'react';
import './Contact.css'; // Import the stylesheet

const Contact = () => {
  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <p>Feel free to reach out to me through the following platforms:</p>
      <div className="contact-buttons">
        <a href="https://github.com/anniefees" className="button">GitHub</a>
        <a href="https://www.linkedin.com/in/anniefees" className="button">LinkedIn</a>
        <a href="mailto:feesa@mac.com" className="button">Email</a>
      </div>
    </section>
  );
};

export default Contact;