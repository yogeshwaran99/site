import React from 'react';
import CV from '../../assets/Yogeshwaran.pdf';

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} target="_blank" rel="noopener noreferrer" className="btn1">
        Resume
      </a>
    </div>
  );
};

export default CTA;
