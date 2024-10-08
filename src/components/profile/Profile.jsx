import React from 'react';
import CTA from './CTA';

import './profile.css';

const Profile = () => {
  return (
    <section id="profile">

      <div className="container profile__container">
        <h3>Hello, I'm</h3>
        <h1>Yogeshwaran</h1>
        <h4 className="text-light">Software Developer</h4>
        <CTA />       
      </div>
    </section>
  );
};

export default Profile;
