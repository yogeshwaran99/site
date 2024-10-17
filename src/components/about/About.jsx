import React from 'react';
import Code from './Code.jsx'
import './about.css';

const About = () => {
  return (
    <section id="about">
      
      <h5>Get to know more</h5>
      <h2>About Me</h2>
      <div className="container about__container">        
        <div className="about__content">
        <p>Aspiring Software Developer with a<span className="highlight"> Bachelor of Engineering</span> degree in Electronics and Communication Engineering. Driven by a passion for technology and innovation, particularly in <span className="highlight">Java</span>, I stay updated with the latest trends. My strength lies in problem-solving and creativity, and I am eager to work with teams to craft solutions.
    </p>
        </div>
      </div>  
      <Code />
    </section>
  )
}

export default About