import {
  HomeIcon,
  BellIcon,
  BookmarkIcon,
  MenuIcon,
  PencilAltIcon,
  UserCircleIcon,
  XIcon,
} from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Tooltip from "../Tooltip";

const Vertical = () => {
  const [isMenuClicked, setIsMenuClicked] = useState(false);

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
              <Tooltip tooltipText="Home">
                <Link to="/" className="font-light">
                  <HomeIcon className="w-full h-8 text-violet-400 stroke-[1px] hover:text-violet-600" />
                </Link>
              </Tooltip>
            </li>
            <li>
              <Tooltip tooltipText="Notification">
                <Link to="#">
                  <BellIcon className="w-full h-8 text-violet-400 stroke-[1px] hover:text-violet-600" />
                </Link>
              </Tooltip>
            </li>
            <li>
              <Tooltip tooltipText="Bookmark">
                <Link to="/bookmarks">
                  <BookmarkIcon className="w-full h-8 text-violet-400 stroke-[1px] hover:text-violet-600" />
                </Link>
              </Tooltip>
            </li>
            <li>
              {!isMenuClicked && (
                <MenuIcon
                  className="w-full h-8 text-violet-400 stroke-[1px] hover:text-violet-600 transition-all duration-3000"
                  onClick={() => setIsMenuClicked(!isMenuClicked)}
                  id="menu-icon"
                />
              )}
              {isMenuClicked && (
                <XIcon
                  className="w-full h-8 text-violet-400 stroke-[1px] hover:text-violet-600"
                  onClick={() => setIsMenuClicked(!isMenuClicked)}
                  id="menu-icon"
                />
              )}
              {isMenuClicked && (
                <div
                  className="origin-top-right absolute top-[50%] left-[5rem] w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-icon"
                  tabIndex="-1"
                >
                  <div className="py-1" role="none">
                    <a
                      href="#"
                      class="text-gray-700 block px-4 py-2 text-sm"
                      role="menuitem"
                      tabindex="-1"
                      id="menu-item-0"
                    >
                      Account settings
                    </a>
                    <a
                      href="#"
                      className="text-gray-700 block px-4 py-2 text-sm"
                      role="menuitem"
                      tabindex="-1"
                      id="menu-item-1"
                    >
                      Support
                    </a>
                    <a
                      href="#"
                      className="text-gray-700 block px-4 py-2 text-sm"
                      role="menuitem"
                      tabindex="-1"
                      id="menu-item-2"
                    >
                      License
                    </a>
                    <form method="POST" action="#" role="none">
                      <button
                        type="submit"
                        className="text-gray-700 block w-full text-left px-4 py-2 text-sm"
                        role="menuitem"
                        tabindex="-1"
                        id="menu-item-3"
                      >
                        Sign out
                      </button>
                    </form>
                  </div>
                </div>
              )}
            </li>
            <li>
              <Tooltip tooltipText="Create News">
                <Link to="/add_document">
                  <PencilAltIcon className="w-full h-8 text-violet-400 stroke-[1px] hover:text-violet-600" />
                </Link>
              </Tooltip>
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
