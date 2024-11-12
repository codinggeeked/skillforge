import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import SkillsLab from './components/SkillsLab';
import Clients from './components/Clients';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skillslab">
        <SkillsLab />
      </section>
      <section id="contact">
        <Newsletter />  {/* Assuming the contact form or info is here */}
      </section>
      <Clients />
      <Footer />
    </div>
  );
}

export default App;
