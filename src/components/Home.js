import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section className="home">
      <div className="home-content">
        <div className="headshot-container">
          <img src={require('../images/AnnistonFAHeadshot.jpeg')} alt="Anniston Fees Headshot" className="headshot" />
        </div>
        <div className="text-container">
          <h1>Welcome to Anniston Fees' Portfolio</h1>
          <p>Explore my projects, experience, and skills. I'm a software engineering student passionate about building efficient and user-friendly applications.</p>
        </div>
      </div>
    </section>
  );
};

export default Home;