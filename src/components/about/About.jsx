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
        <p>Aspiring Software Developer with a<span className="highlight"> Bachelor of Engineering
      </span> degree in <span className="highlight">
      Electronics and Communication Engineering.
      </span> Passionate about technology and innovation, focused on staying current with trends. Skilled in problem-solving and creative thinking, eager to collaborate with teams to develop effective, innovative solutions.
    </p>
        </div>
      </div>  
      <Code />
    </section>
  )
}

export default About