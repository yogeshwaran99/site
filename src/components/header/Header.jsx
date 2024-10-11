import React, { useState } from 'react';
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
}

export default Header;
