import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import Logout from '../Auth/Logout';
import { useAuth } from '../../context/AuthContext';
import Logo from './Logo';

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const { currentUser } = useAuth();

  return (
    <>
      <nav className="md:flex md:flex-row justify-between p-5 shadow-md bg-gray-50 md:bg-gray-50">
        <div className="flex items-center justify-between py-0 ">
          <NavLink to={'/'}>
            <div className="flex items-center justify-center">
              <Logo />
            </div>
          </NavLink>
          <div
            className="flex justify-end px-3 -my-4 rounded text-gray-900 hover:text-black cursor-pointer md:hidden text-xl"
            onClick={() => {
              setOpen(!open);
            }}
          >
            {open ? <FiX /> : <FiMenu />}
          </div>
        </div>
        <div className={`${open ? 'block transition-all' : 'hidden md:flex'}`}>
          {/* <NavigationLinks currentUser={currentUser} /> */}
          <ul className="text-center uppercase font-bold md:-my-8  items-center md:flex md:justify-end">
            <li className="py-3 px-4">
              <NavLink
                to={'/about'}
                className="rounded text-slate-800 hover:text-green-600 justify-center"
              >
                About
              </NavLink>
            </li>
            {currentUser && (
              <li className="py-3 px-4">
                <NavLink
                  to={'/covey-call'}
                  className="rounded text-slate-800 hover:text-green-600 justify-center"
                >
                  Covey Call
                </NavLink>
              </li>
            )}
            {currentUser && (
              <li className="py-3 px-4">
                <NavLink
                  to={'/community'}
                  className="rounded text-slate-800 hover:text-green-600 justify-center"
                >
                  Community
                </NavLink>
              </li>
            )}
            <li className="py-3 px-4">
              <NavLink
                to={'/contact'}
                className="rounded text-slate-800 hover:text-green-600 justify-center"
              >
                Contact
              </NavLink>
            </li>
            {currentUser && (
              <li className="py-3 px-4">
                <NavLink
                  to={'/post-update'}
                  className="rounded text-slate-800 hover:text-green-600 justify-center"
                >
                  Updates
                </NavLink>
              </li>
            )}
            {!currentUser && (
              <li className="py-3 px-4">
                <NavLink
                  to={'/login'}
                  className="rounded text-slate-800 hover:text-green-600 justify-center"
                >
                  Login
                </NavLink>
              </li>
            )}
            {currentUser && (
              <li className="py-3 px-4">
                <Logout />
                {/* <NavLink
                  to={'/logout'}
                  className="rounded text-slate-800 hover:text-green-600 justify-center"
                >
                  Logout
                </NavLink> */}
              </li>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
