import { useState, useEffect } from 'react';
import { NavLink, Navigate, useNavigate } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import qcLogo from '../../assets/qcLogo.png';
import NavigationLinks from './NavigationLinks';
import { useAuth } from '../../context/AuthContext';
// import NavigationLinks from './NavigationLinks';

const Navigation = () => {
  const { currentUser, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser != null) {
      navigate('/');
    }
  }, [currentUser]);

  async function buttonSubmit(e) {
    e.preventDefault();

    try {
      await logout();
      navigate('/');
    } catch (e) {
      alert('Failed to logout');
    }
  }

  return (
    <>
      <nav
        className="relative p-6 bg-gray-100 shadow-md bg-gray-500 sm:bg-gray-200"
        // className="flex items-center justify-between bg-gray-200 px-20 py-10 shadow-md"
      >
        <div className="flex items-center justify-between py-0 ">
          <NavLink to={'/'}>
            <svg
              id="logo-15"
              width="49"
              height="48"
              viewBox="0 0 49 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {' '}
              <path
                d="M24.5 12.75C24.5 18.9632 19.4632 24 13.25 24H2V12.75C2 6.53679 7.03679 1.5 13.25 1.5C19.4632 1.5 24.5 6.53679 24.5 12.75Z"
                className="ccustom"
                fill="#17CF97"
              ></path>{' '}
              <path
                d="M24.5 35.25C24.5 29.0368 29.5368 24 35.75 24H47V35.25C47 41.4632 41.9632 46.5 35.75 46.5C29.5368 46.5 24.5 41.4632 24.5 35.25Z"
                className="ccustom"
                fill="#17CF97"
              ></path>{' '}
              <path
                d="M2 35.25C2 41.4632 7.03679 46.5 13.25 46.5H24.5V35.25C24.5 29.0368 19.4632 24 13.25 24C7.03679 24 2 29.0368 2 35.25Z"
                className="ccustom"
                fill="#17CF97"
              ></path>{' '}
              <path
                d="M47 12.75C47 6.53679 41.9632 1.5 35.75 1.5H24.5V12.75C24.5 18.9632 29.5368 24 35.75 24C41.9632 24 47 18.9632 47 12.75Z"
                className="ccustom"
                fill="#17CF97"
              ></path>{' '}
            </svg>
          </NavLink>
          <div
            className="flex justify-end px-3 -my-4 rounded text-gray-900 hover:text-black cursor-pointer sm:hidden text-xl"
            onClick={() => setOpen(!open)}
          >
            {open ? <FiX /> : <FiMenu />}
          </div>
        </div>

        <NavigationLinks />
        {console.log(open)}
        <button onClick={buttonSubmit}>Logout</button>
      </nav>
    </>
  );
};

export default Navigation;
