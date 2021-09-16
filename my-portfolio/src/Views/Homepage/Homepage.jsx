import React from "react";
import Skills from "../Skills/Skills";
import About from "../About/About";

const Homepage = () => {
  return (
    <div className=" justify-center place-content-center block my-20">
      <h3 className='text-8xl font-bold transition-opacity'>Hello! I am,</h3>
      <h2 className="mb-6 animate-pulse text-8xl"> Nash Anderson</h2>
      <h3 className="text-8xl">Full-Stack Web Developer</h3>
      <hr className='mt-20'/>
      <Skills />
      <hr className='mb-20'/>
      <About />
    </div>
  );
};

export default Homepage;
