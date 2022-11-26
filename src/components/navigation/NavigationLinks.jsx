import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationLinks = () => {
  const links = [
    { name: 'Contact', link: '/contact' },
    { name: 'Community', link: '/community' },
    { name: 'Covey Call', link: '/covey-call' },
    { name: 'About', link: '/about' },
    { name: 'Login', link: '/login' },
  ];

  return (
    <ul className="text-center uppercase font-bold sm:-my-8 pb-8 items-center sm:flex sm:justify-end">
      {links.map((link, i) => (
        <li className="py-3 px-4" key={i}>
          <NavLink
            key={i}
            to={link.link}
            className="rounded text-slate-800 hover:text-green-600 justify-center"
            // className="border-none justify-center hover:font-semibold text-slate-800 hover:text-black"
          >
            {link.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavigationLinks;