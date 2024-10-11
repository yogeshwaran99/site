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
        <p>
      I am an aspiring Software Developer with a{' '}
      <span className="highlight">
        Bachelor of Engineering 
      </span> in <span className="highlight">
      Electronics and Communication Engineering.
      </span>
      My passion for technology and innovation keeps me updated on industry trends. I look forward to working with teams to use my problem-solving skills and creativity to create effective solutions.
    </p>
        </div>
      </div>  
      <Code />
    </section>
  )
}

export default About