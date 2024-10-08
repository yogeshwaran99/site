import React from 'react';
import Profile from './components/profile/Profile';
import Header from './components/header/Header';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Project from './components/project/Project';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';


const App = () => {
  return (
    <>      
      <Header />      
      <Profile />
      <About />
      <Skills />
      <Project />      
      <Contact />
      <Footer />
    </>
  )
}

export default App
