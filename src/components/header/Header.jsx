import React, { useState } from 'react';
import './header.css';

const Header = () => {
  const [activeNav, setActiveNav] = useState('#home');
  
  return (
    <header id="home">
    <nav>
      <a 
        href="#home" 
        onClick={() => setActiveNav('#home')} 
        className={activeNav === '#home' ? 'active' : ''}
      >
        Home
      </a>
      <a 
        href="#about" 
        onClick={() => setActiveNav('#about')} 
        className={activeNav === '#about' ? 'active' : ''}
      >
        About
      </a>
      <a 
        href="#skills" 
        onClick={() => setActiveNav('#skills')} 
        className={activeNav === '#skills' ? 'active' : ''}
      >
       Skills
      </a>
      <a 
        href="#project" 
        onClick={() => setActiveNav('#project')} 
        className={activeNav === '#project' ? 'active' : ''}
      >
        Projects
      </a>
      <a 
        href="#contact" 
        onClick={() => setActiveNav('#contact')} 
        className={activeNav === '#contact' ? 'active' : ''}
      >
        Contact
      </a>
    </nav>
    </header>
  );
}

export default Header;
