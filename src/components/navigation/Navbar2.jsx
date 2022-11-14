import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import CommunityDropdown from './CommunityDropdown';
import { FiMenu, FiX } from 'react-icons/fi';
import qcLogo from '../../assets/qcLogo.png';
import NavigationLinks from './NavigationLinks';
// import NavigationLinks from './NavigationLinks';

const Navigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="top-0">
        <div className="w-full overflow-hidden uppercase bg-white shadow-md">
          <NavLink to={'/'}>
            <img
              src={qcLogo}
              alt="logo"
              className="md:cursor-pointer hover:bg-gray-200 max-h-16 px-8 py-4 float-left w-auto border-none inline-block outline-0"
            />
          </NavLink>
          <div
            className="text-3xl md:hidden align-right px-8 py-8"
            onClick={() => setOpen(!open)}
          >
            <ion-icon
              name={`${open ? 'close-outline' : 'menu-outline'}`}
            ></ion-icon>
          </div>
          {/* -------------------links on right---------------- */}
          <NavigationLinks />
          {/* <div className="">
            <NavLink className="md:cursor-pointer hover:bg-gray-200 tracking-wide p-8 float-right md:w-auto hidden border-none md:block flex outline-0">
              About
            </NavLink>
            <NavLink className="md:cursor-pointer hover:bg-gray-200 tracking-wide p-8 float-right md:w-auto hidden border-none md:block flex outline-0">
              Covey Call
            </NavLink>
            <NavLink className="md:cursor-pointer hover:bg-gray-200 tracking-wide p-8 float-right md:w-auto hidden border-none md:block flex outline-0">
              Community
            </NavLink>
            <NavLink className="md:cursor-pointer hover:bg-gray-200 tracking-wide p-8 float-right md:w-auto hidden border-none md:block flex outline-0">
              Contact
            </NavLink>
            <NavLink className="md:cursor-pointer hover:bg-gray-200 tracking-wide p-8 float-right md:w-auto hidden border-none md:block flex outline-0">
            FAQ
          </NavLink>
          </div> */}
        </div>
      </nav>
      <nav>
        <ul
          className={` bg-blue absolute w-full h-full bottom-0 py-24 pl-4 duration-500 ${
            open ? 'left-0' : 'left-[-100%]'
          }`}
        >
          <li>
            <NavigationLinks />
            {/* <NavLink className="md:cursor-pointer hover:bg-gray-200 tracking-wide p-8 float-right border-none md:block flex outline-0">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="md:cursor-pointer hover:bg-gray-200 tracking-wide p-8 float-right  border-none md:block flex outline-0">
              Covey Call
            </NavLink>
          </li>
          <li>
            <NavLink className="md:cursor-pointer hover:bg-gray-200 tracking-wide p-8 float-right  border-none md:block flex outline-0">
              Community
            </NavLink>
          </li>
          <li>
            <NavLink className="md:cursor-pointer hover:bg-gray-200 tracking-wide p-8 float-right  border-none md:block flex outline-0">
              Contact
            </NavLink> */}
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
