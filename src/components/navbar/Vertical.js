import {
  HomeIcon,
  BellIcon,
  BookmarkIcon,
  MenuIcon,
  PencilAltIcon,
  UserCircleIcon,
} from "@heroicons/react/outline";
import { Link } from "react-router-dom";

const Vertical = () => {
  return (
    <div className="fixed z-100 w-[5rem] h-screen border-violet-500 border-r-[1px]">
      <ul className="flex flex-col items-center justify-evenly mb-[2rem] h-screen space-y-5 ">
        {/* Logo */}
        <Link to="/">
          <li>
            <MenuIcon className="w-full h-8 text-violet-400 stroke-[1px]" />
          </li>
        </Link>
        {/* Navbar Items */}
        <li>
          <ul className="space-y-6">
            <li>
              <Link to="/" className="font-light">
                <HomeIcon className="w-full h-8 text-violet-400 stroke-[1px] hover:text-violet-600" />
              </Link>
            </li>
            <li>
              <Link to="#">
                <BellIcon className="w-full h-8 text-violet-400 stroke-[1px] hover:text-violet-600" />
              </Link>
            </li>
            <li>
              <Link to="#">
                <BookmarkIcon className="w-full h-8 text-violet-400 stroke-[1px] hover:text-violet-600" />
              </Link>
            </li>
            <li>
              <Link to="#">
                <MenuIcon className="w-full h-8 text-violet-400 stroke-[1px] hover:text-violet-600" />
              </Link>
            </li>
            <li>
              <Link to="#">
                <PencilAltIcon className="w-full h-8 text-violet-400 stroke-[1px] hover:text-violet-600" />
              </Link>
            </li>
          </ul>
        </li>
        <li className="flex justify-center">
          <hr className="w-[40px] bg-black" />
        </li>
         {/* Profile */}
        <li>
          <Link to="#">
            <UserCircleIcon className="w-full h-8 text-violet-400 stroke-[1px] hover:text-violet-600" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Vertical;
