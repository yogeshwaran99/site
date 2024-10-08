import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  
  return (
    <footer>
      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/99yogeshwaran/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/yogeshwaran99" target="_blank" rel="noreferrer" ><FaGithub /></a>      
      </div>
      
    </footer>
  )
}

export default Footer