import React from "react";
import Skills from "../Skills/Skills";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Hero from '../Hero/Hero'

const Homepage = () => {
  return (
    
    <div className="">
      {/* <Layout/> */}
      {/* <h3 className='text-8xl font-bold transition-opacity'>Hello! I am,</h3> */}
      {/* <div className='hero-text'> */}
        {/* <div className='hero-banner'> */}
          <Hero/>
        {/* <img className='' src={climb} /> */}
        {/* </div> */}
        {/* <div className='text-on-image'> */}
      {/* <h2 className="mb-6 text-8xl"> Nash Anderson</h2> */}
        {/* <h3 className="text-4xl">Full-Stack Web Developer</h3> */}
        {/* </div> */}
      <About />
      <Skills />
      <Projects/>
      {/* </div> */}
     </div>
  
  );
};

export default Homepage;
