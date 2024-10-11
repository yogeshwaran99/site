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
        <p>I am an aspiring Software Developer with a strong passion for contributing to innovative and dynamic teams. My enthusiasm for continuous learning drives me to stay updated with the latest industry trends and advancements. I am eager to bring my creativity and problem solving abilities to impactful projects.</p>        
        </div>
      </div>  
      <Code />
    </section>
  )
}

export default About