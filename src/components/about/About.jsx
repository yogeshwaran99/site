import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';


import './about.css';

const About = () => {
  return (
    <section id="about">
      <h5>Get to know more</h5>
      <h2>About Me</h2>
      <div className="container about__container">        
        <div className="about__content">
        <p>I am an aspiring Software Developer with a strong passion for contributing to innovative and dynamic teams. My enthusiasm for continuous learning drives me to stay updated with the latest industry trends and advancements. I am eager to bring my creativity and problem solving abilities to impactful projects.</p>        
        <div id="code-container">
  <h4>Coding Profiles:</h4>
  <a
    className="code"
    target="_blank"
    href="https://hackerrank.com/profile/yogeshwaran99"
    rel="noopener noreferrer"
  >
    <strong>Hackerrank profile</strong>
    <li-icon aria-hidden="true" type="link-external" size="small">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        data-supported-dps="16x16"
        fill="currentColor"
        width="16"
        height="16"
        focusable="false"
      >
        <path d="M15 1v6h-2V4.41L7.41 10 6 8.59 11.59 3H9V1zm-4 10a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1h2V3H5a3 3 0 00-3 3v5a3 3 0 003 3h5a3 3 0 003-3V9h-2z"></path>
      </svg>
    </li-icon>
  </a>
  <a
    className="code"
    target="_blank"
    href="https://leetcode.com/u/yogeshwaran99"
    rel="noopener noreferrer"
  >
    <strong>Leetcode profile</strong>
    <li-icon aria-hidden="true" type="link-external" size="small">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        data-supported-dps="16x16"
        fill="currentColor"
        width="16"
        height="16"
        focusable="false"
      >
        <path d="M15 1v6h-2V4.41L7.41 10 6 8.59 11.59 3H9V1zm-4 10a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1h2V3H5a3 3 0 00-3 3v5a3 3 0 003 3h5a3 3 0 003-3V9h-2z"></path>
      </svg>
    </li-icon>
  </a>
  <a
    className="code"
    target="_blank"
    href="https://geeksforgeeks.org/user/yogeshwaran99/"
    rel="noopener noreferrer"
  >
    <strong>Geeksforgeeks profile</strong>
    <li-icon aria-hidden="true" type="link-external" size="small">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        data-supported-dps="16x16"
        fill="currentColor"
        width="16"
        height="16"
        focusable="false"
      >
        <path d="M15 1v6h-2V4.41L7.41 10 6 8.59 11.59 3H9V1zm-4 10a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1h2V3H5a3 3 0 00-3 3v5a3 3 0 003 3h5a3 3 0 003-3V9h-2z"></path>
      </svg>
    </li-icon>
  </a>
</div>

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