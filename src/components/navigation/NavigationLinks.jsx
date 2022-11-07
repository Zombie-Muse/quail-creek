import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationLinks = () => {
  const links = [
    { name: 'About', submenu: false, link: '/about' },
    { name: 'Covey Call', submenu: false, link: '/covey-call' },
    {
      name: 'Community',
      submenu: true,
      sublinks: [
        { name: 'Neighborhood Watch', link: '/neighborhood-watch' },
        { name: 'Bulletin Board', link: '/' },
        { name: 'Forms', link: '/' },
        { name: 'Calendar', link: '/' },
      ],
    },
    { name: 'Contact', submenu: false, link: '/contact' },
    { name: 'FAQ', submenu: false, link: '/faq' },
  ];

  return (
    <>
      {links.map((Link) => (
        <div>
          <div className="px-3 text-left md:cursor-pointer">
            <NavLink to={Link.link}>{Link.name}</NavLink>
            {Link.submenu && (
              <div className="absolute top-20 p-3.5">
                <div className="bg-white">
                  <li className="text-sm text-gray-600 my-2.5">
                    {Link.sublinks.map((subs) => (
                      <NavLink to={subs.link}>{subs.name}</NavLink>
                    ))}
                  </li>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavigationLinks;
