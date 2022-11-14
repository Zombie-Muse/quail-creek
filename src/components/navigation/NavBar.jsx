import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import CommunityDropdown from './CommunityDropdown';
import { FiMenu, FiX } from 'react-icons/fi';
import qcLogo from '../../assets/qcLogo.png';
import NavigationLinks from './NavigationLinks';

const Navigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-100">
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <img src={qcLogo} alt="logo" className="md:cursor-pointer h-20" />
          <div className="text-3xl" onClick={() => setOpen(!open)}>
            <ion-icon
              name={`${open ? 'close-outline' : 'menu-outline'}`}
            ></ion-icon>
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-8 ">
          <li className="py-3 px-4">
            <NavLink to="/" className="py-7 px-3 inline-block">
              Home
            </NavLink>
          </li>
          <NavigationLinks />
        </ul>
        {/*--------------------- MOBILE NAV --------------------*/}
        <ul
          className={`md:hidden bg-white absolute w-full h-full bottom-0 py-24 pl-4 duration-500 ${
            open ? 'left-0' : 'left-[-100%]'
          }`}
        >
          <li>
            <NavLink to="/" className="py-7 px-3 inline-block">
              Home
            </NavLink>
            <NavigationLinks />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
