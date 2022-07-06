import {
  SearchIcon,
  MenuIcon,
  UserCircleIcon,
} from "@heroicons/react/outline";
import { Link } from "react-router-dom";

const Horizontal = () => {
  return (
    <div className="flex flex-col fixed z-100 w-screen border-violet-500 bg-white">
      {/* Logo */}
      <div className="flex border-violet-500 justify-around p-1">
        <Link to="/">
          <MenuIcon className="w-full h-8 text-violet-400 stroke-[1px]" />
        </Link>
      </div>
      {/* Navbar Items */}
      <ul className="flex justify-around items-center bg-violet-500">
        <li>
          <Link to="/" className="hover:bg-white p-[0.39rem] pb-[0.4rem] rounded px-3 text-white hover:text-black transition-all duration-1000 ease-in-out delay-100">
            Home
          </Link>
        </li>
        <li>
          <Link to="/politics" className="hover:bg-white p-[0.39rem] pb-[0.4rem] rounded px-3 text-white hover:text-black transition-all duration-1000 ease-in-out delay-100">Politics</Link>
        </li>
        <li>
          <Link to="/entertainment" className="hover:bg-white p-[0.39rem] pb-[0.4rem] rounded px-3 text-white hover:text-black transition-all duration-1000 ease-in-out delay-100">Entertainment</Link>
        </li>
        <li>
          <Link to="/bollywood" className="hover:bg-white p-[0.39rem] pb-[0.4rem] rounded px-3 text-white hover:text-black transition-all duration-1000 ease-in-out delay-100">Bollywood</Link>
        </li>
        <li>
          <Link to="/sports" className="hover:bg-white p-[0.39rem] pb-[0.4rem] rounded px-3 text-white hover:text-black transition-all duration-1000 ease-in-out delay-100">Sports</Link>
        </li>
        <li>
          <Link to="#">
            <SearchIcon className="w-full h-6 text-white stroke-[1px] hover:stroke-2 transition-all delay-100 ease-in-out duration-1000" />
          </Link>
        </li>
        <li>
          <Link to="#">
            <UserCircleIcon className="w-full h-8 text-white stroke-[1px] hover:stroke-2 transition-all delay-100 ease-in-out duration-1000" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Horizontal;
