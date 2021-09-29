import vagary from "../../Assests/vagary.png";
import sqills from "../../Assests/sqills.png";
import git from "../../Assests/github.png";
import computer from "../../Assests/computer.png";

const Projects = () => {
  return (
    <div>
      <h1 className="text-6xl mt-4">Projects</h1>
      <div className=" flex items-center justify-center m-20">
        <div className="bg-white rounded-lg shadow-2xl w-3/4 h-auto mr-6">
          <img
            className="rounded-t-lg h-60 w-full object-cover"
            src={vagary}
            alt=""
          />
          <header className="bg-gray-100 rounded-t-lg py-3 px-8 text-xl font-extrabold">
            Vagary
          </header>
          <div className="p-8">
            <p className="mb-6">
              This full-stack MERN application allows users to create an
              itinerary and create a todo list within each trip. General users
              have the abbility to browse and select trips, while authenticated
              used can create, update, and delete their trips from the inventory.
            </p>
            <p>
              This project was a group effort developed over 7 days with the
              primary focus on gaining experience with project management
              through tools such as GitHub and Kanban boards.
            </p>
          </div>
          <footer className="bg-gray-100 rounded-b-lg py-6 flex items-center justify-center ">
            <a href="https://github.com/andersonnash/vagary">
              <img className="mr-6" src={git} alt="" />
            </a>
            <a href="https://dazzling-ramanujan-14f249.netlify.app">
              <img src={computer} alt="" />
            </a>
          </footer>
        </div>

        <div className="bg-white rounded-lg shadow-2xl w-3/4">
          <img
            className="rounded-t-lg h-60 w-full object-cover"
            src={sqills}
            alt=""
          />
          <header className="bg-gray-100 rounded-t-lg py-3 px-8 text-xl font-extrabold">
            Sqills
          </header>
          <div className="p-8">
            <p className="mb-6">
              This full-stack MERN application allows users to add activites to
              their profile. General users have the abbility to browse activies
              from the whol userbase, while authenticated used can create,
              update, and delete their activities from the inventory.
            </p>
            <p>
              This project was a solo effort developed over 7 days. The primary
              motivation fo rthis project was the gain experience using CSS
              library and was mainly styled with Tailwind CSS.
            </p>
          </div>
          <footer className="bg-gray-100 rounded-b-lg py-6 flex items-center justify-center ">
            <a href="https://github.com/andersonnash/sqills">
              <img className="mr-6" src={git} alt="" />
            </a>
            <a href="https://goofy-newton-526a48.netlify.app">
              <img src={computer} alt="" />
            </a>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Projects;