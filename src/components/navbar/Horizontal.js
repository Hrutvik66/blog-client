import { SearchIcon, MenuIcon, UserCircleIcon } from "@heroicons/react/outline";
import { Link, useNavigate } from "react-router-dom";
import { menuItems } from "../../utils";

const Horizontal = () => {
  const Navigate = useNavigate();


  const handleClick = (link) => {
    Navigate(link);
  };

  return (
    <div className="flex flex-col fixed z-100 w-screen border-red-500 bg-white">
      {/* Logo */}
      <div className="flex border-red-500 justify-around p-1">
        <Link to="/">
          <MenuIcon className="w-full h-8 text-red-400 stroke-[1px]" />
        </Link>
      </div>
      {/* Navbar Items */}
      <div className="">
        <ul className="flex justify-around items-center bg-red-500">
          {menuItems.map((item, i) => (
            <li
              className="hover:bg-white p-[0.39rem] pb-[0.4rem] rounded px-3 text-white hover:text-black transition-all duration-1000 ease-in-out delay-100"
              key={i}
              onClick={() => handleClick(item.link)}
            >
              {item.name}
            </li>
          ))}
          <li>
            <Link to="#">
              <SearchIcon className="w-full h-6 text-white stroke-[1px] hover:stroke-2 transition-all delay-100 ease-in-out duration-1000" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Horizontal;
