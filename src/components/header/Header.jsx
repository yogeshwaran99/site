import React, { useState, useEffect } from 'react';
import './header.css';

const Header = () => {
  const [activeNav, setActiveNav] = useState('#header');

  const navLinks = [
    { id: '#profile', label: 'Home' },
    { id: '#about', label: 'About' },
    { id: '#skills', label: 'Skills' },
    { id: '#project', label: 'Projects' },
    { id: '#contact', label: 'Contact' },
  ];


  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop - sectionHeight / 3) {
        const currentSectionId = `#${section.getAttribute('id')}`;
        setActiveNav(currentSectionId);
      }
    });
  };

  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); 
  }, []);

  return (
    <nav>
      {navLinks.map(({ id, label }) => (
        <a
          key={id}
          href={id}
          onClick={() => setActiveNav(id)}
          className={activeNav === id ? 'active' : ''}
          role="navigation"
          tabIndex={0}
        >
          {label}
        </a>
      ))}
    </nav>
  );
};

export default Header;
