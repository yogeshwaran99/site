import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';


import './about.css';

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        
        <div className="about__content">
        <p>I am an aspiring Software Developer with a strong passion for contributing to innovative and dynamic teams. My enthusiasm for continuous learning drives me to stay updated with the latest industry trends and advancements. I thrive on tackling new challenges and am dedicated to honing my skills to deliver high quality software solutions. With a solid foundation in programming and a keen interest in emerging technologies, I am eager to bring my creativity and problem solving abilities to impactful projects.</p>
        
            <article className="about__card">
              <FaGraduationCap className="about__icon" />
              <h5>Education</h5>
              <small>Bachelor of Engineering</small><br></br>
              <small> Electronics and Communication Engineering</small>
            </article>            
          </div>                    
        </div>    
    </section>
  )
}

export default About