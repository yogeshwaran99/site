import React from 'react';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import './skills.css';

const Skills = () => {
  return (
    <section id="skills"> 
      <h5>Explore My</h5>
      <h2>Skills</h2>
      <div className="container skills__container"> 
        <div className="skills__tech"> 
        <h3>Skills</h3>
          <div className="skills__content">
            <article className="skills__details"> 
            <BsFillPatchCheckFill className="skills__details-icon" />
              <h4>C</h4>
            </article>

            <article className="skills__details">
            <BsFillPatchCheckFill className="skills__details-icon" />
  <h4>JAVA</h4>
</article>
<article className="skills__details">
<BsFillPatchCheckFill className="skills__details-icon" />
              <h4>Springboot</h4>
            </article>            
            <article className="skills__details">
            <BsFillPatchCheckFill className="skills__details-icon" />
              <h4>REST API</h4>
            </article>  
            <article className="skills__details">
            <BsFillPatchCheckFill className="skills__details-icon" />
              <h4>MySQL</h4>
            </article>
            <article className="skills__details">
            <BsFillPatchCheckFill className="skills__details-icon" />
              <h4>MongoDB</h4>
            </article>
            <article className="skills__details">
            <BsFillPatchCheckFill className="skills__details-icon" />
  <h4>HTML</h4>
</article>

            <article className="skills__details">
            <BsFillPatchCheckFill className="skills__details-icon" />
              <h4>CSS</h4>
            </article>
            <article className="skills__details">
            <BsFillPatchCheckFill className="skills__details-icon" />
              <h4>Javascript</h4>
            </article>                       
            <article className="skills__details">
            <BsFillPatchCheckFill className="skills__details-icon" />
              <h4>React</h4>
            </article> 
          </div>
        </div>
        <div className="skills__tools"> 
          <h3>Tools</h3>
          <div className="skills__content">
            <article className="skills__details">
            <BsFillPatchCheckFill className="skills__details-icon" />
              <h4>Eclipse</h4>
            </article>
            <article className="skills__details">
            <BsFillPatchCheckFill className="skills__details-icon" />
              <h4>IntelliJ IDEA</h4>
            </article>
            <article className="skills__details">
            <BsFillPatchCheckFill className="skills__details-icon" />
              <h4>VS Code</h4>
            </article>
            <article className="skills__details">
            <BsFillPatchCheckFill className="skills__details-icon" />
              <h4>Spring Tools</h4>
            </article>
            <article className="skills__details">
            <BsFillPatchCheckFill className="skills__details-icon" />
              <h4>Postman</h4>
            </article>
            <article className="skills__details">
            <BsFillPatchCheckFill className="skills__details-icon" />
              <h4>Git/GitHub</h4>
            </article>          
            <article className="skills__details">
            <BsFillPatchCheckFill className="skills__details-icon" />
              <h4>Docker</h4>
            </article>       
            <article className="skills__details">
            <BsFillPatchCheckFill className="skills__details-icon" />
              <h4>Vim</h4>
            </article>   
            <article className="skills__details">
            <BsFillPatchCheckFill className="skills__details-icon" />
              <h4>Bash</h4>
            </article>       
          </div>
        </div>        
      </div>
    </section>
  );
}

export default Skills;
