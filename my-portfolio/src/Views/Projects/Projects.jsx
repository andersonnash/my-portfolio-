import vagary from "../../Assests/vagary.png";
import sqills from "../../Assests/sqills.png";
import git from "../../Assests/github.png";
import computer from '../../Assests/computer.png'

const Projects = () => {
  return (
    <div>
      <h1 className='text-6xl mt-4'>Projects</h1>
    <div className=" flex items-center justify-center m-20">
      <div className="bg-white rounded-lg shadow-2xl w-3/4 h-auto mr-6">
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
            This project was a group effort developed over 7 days with the
            primary focus on gaining experience with project management through
            tools such as GitHub and Kanban boards.
          </p>
        </div>
        <footer className="bg-gray-100 rounded-b-lg py-6 flex items-center justify-center ">
          <a href="https://github.com/andersonnash/vagary">
            <img className='mr-6'src={git} />
          </a>
          <a href='https://dazzling-ramanujan-14f249.netlify.app'>
            <img src={computer} />
            </a>
        </footer>
        </div>
        

      <div className="bg-white rounded-lg shadow-2xl w-3/4">
        <img className="rounded-t-lg h-60 w-full object-cover" src={sqills} />
        <header className="bg-gray-100 rounded-t-lg py-3 px-8 text-xl font-extrabold">
          Sqills
        </header>
        <div className="p-8">
          <p className="mb-6">
            This full-stack MERN application allows users to create an itinerary
            and create a todo list within each trip. General users have the
            abbility to browse and select trips, while authenticated used can
            creat, update, and delete their tiprs from the inventory.
          </p>
          <p>
            This project was a group effort developed over 7 days with the
            primary focus on gaining experience with project management through
            tools such as GitHub and Kanban boards.
          </p>
        </div>
        <footer className="bg-gray-100 rounded-b-lg py-6 flex items-center justify-center ">
          <a href="https://github.com/andersonnash/sqills">
            <img className='mr-6'src={git} />
          </a>
          <a href='https://goofy-newton-526a48.netlify.app'>
            <img src={computer} />
            </a>
        </footer>
      </div>
    </div>
    </div>
  );
};

export default Projects;
