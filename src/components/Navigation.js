import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState('');

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header>
      <nav className="relative p-6 bg-gray-100">
        <div className="flex content-between justify-between">
          <div
            id="hamburger"
            className="flex justify-end px-3 -my-4 rounded text-gray-900 hover:text-gray-500 cursor-pointer sm:hidden"
            onClick={handleClick}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </div>
          <ul
            className={
              isOpen
                ? 'text-center sm:-my-8 pb-8 sm:items-center sm:flex sm:justify-end'
                : 'text-center sm:-my-8 pb-8 sm:items-center sm:flex sm:justify-end hidden'
            }
          >
            <li className="py-3 px-4">
              <NavLink
                to="/"
                className=" rounded text-gray-900 hover:text-gray-500"
                onClick={closeMenu}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="rounded text-gray-900 hover:text-gray-500"
                onClick={closeMenu}
              >
                About
              </NavLink>
            </li>
            <li className="py-3 px-4">
              <NavLink
                to="/covey-call"
                className=" rounded text-gray-900 hover:text-gray-500"
                onClick={closeMenu}
              >
                Covey Call
              </NavLink>
            </li>
            <li className="py-3 px-4">
              <NavLink
                to="/neighborhood-watch"
                className=" rounded text-gray-900 hover:text-gray-500"
                onClick={closeMenu}
              >
                Neighborhood Watch
              </NavLink>
            </li>
            <li className="py-3 px-4">
              <NavLink
                to="/community"
                className=" rounded text-gray-900 hover:text-gray-500"
                onClick={closeMenu}
              >
                Community
              </NavLink>
            </li>
            <li className="py-3 px-4">
              <NavLink
                to="/documents"
                className=" rounded text-gray-900 hover:text-gray-500"
                onClick={closeMenu}
              >
                Documents
              </NavLink>
            </li>
            <li className="py-3 px-4">
              <NavLink
                to="/contact"
                className=" rounded text-gray-900 hover:text-gray-500"
                onClick={closeMenu}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
