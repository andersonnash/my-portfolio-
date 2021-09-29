import React from "react";
import vagary from "../../Assests/vagary.png";
import sqills from "../../Assests/sqills.png";
import git from "../../Assests/github.png";
import computer from '../../Assests/computer.png'

const Vagary = () => {
  return (
    <div>
      <img className="rounded-t-lg h-60 w-full object-cover" src={vagary} />
      <header className="bg-gray-100 rounded-t-lg py-3 px-8 text-xl font-extrabold">
        Vagary
      </header>
      <div className="p-8">
        <p className="mb-6">
          This full-stack MERN application allows users to create an itinerary
          and create a todo list within each trip. General users have the
          abbility to browse and select trips, while authenticated used can
          creat, update, and delete their tiprs from the inventory.
        </p>
        <p>
          This project was a group effort developed over 7 days with the primary
          focus on gaining experience with project management through tools such
          as GitHub and Kanban boards.
        </p>
        {/* <button className='bg-blue-400 text-blue-50 rounded-lg py-3 px-4 mt-5'>Get Started</button> */}
      </div>
      <footer className="bg-gray-100 rounded-b-lg py-6 flex items-center justify-center ">
        <a href="https://github.com/andersonnash/vagary">
          <img className="mr-6" src={git} />
        </a>
        <a href="https://dazzling-ramanujan-14f249.netlify.app">
          <img src={computer} />
        </a>
      </footer>
    </div>
  );
};

export default Vagary;
