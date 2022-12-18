import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationLinks = () => {
  const links = [
    { name: 'About', link: '/about' },
    { name: 'Covey Call', link: '/covey-call' },
    { name: 'Community', link: '/community' },
    { name: 'Contact', link: '/contact' },
    { name: 'Login', link: '/login' },
    { name: 'PostUpdate', link: '/post-update' },
  ];

  return (
    <ul className="text-center uppercase font-bold md:-my-8  items-center md:flex md:justify-end">
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
