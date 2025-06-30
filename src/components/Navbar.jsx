import { Link } from "react-router-dom";
import { PlusIcon, HomeIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  return (
    <nav className="bg-orange-400 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              {/* <div className="w-8 h-8 bg-orange-200 rounded-full flex items-center justify-center">
                <span className="text-orange-800 font-bold text-lg">T</span>
              </div> */}
              <span className="text-xl font-bold text-orange-100">
                Task Manager
              </span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              to="/"
              className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium text-orange-100  hover:bg-orange-300 hover:text-white transition-colors"
            >
              <HomeIcon className="h-6 w-6 text-orange-100"/>
              <span>Home</span>
            </Link>
            <Link
              to="/create"
              className="flex items-center space-x-2 hover:bg-orange-300 text-orange-100 hover:text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
              <PlusIcon className="h-5 w-5" />
              <span>New Task</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
