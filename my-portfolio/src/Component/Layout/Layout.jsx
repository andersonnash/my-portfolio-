import React from "react";
import { Link } from "react-router-dom";

const Layout = () => {
  return (
    <div className=''>
    <div className=" text-white font-extrabold flex justify-end m-6">
      <nav className="">
        <Link className="mr-6" to="/">
          Homepage
        </Link>
        <Link to="/resume">
          Resume
        </Link>
        <a href='#about-me'className='ml-6'>About Me</a>
      </nav>
      </div>
      </div>
  );
};

export default Layout;
