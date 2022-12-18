import { useState, useEffect } from 'react';
import { currentUser, logout } from '../../context/AuthContext';

import { NavLink, Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
const Logout = () => {
  const { currentUser, logout } = useAuth();

  const navigate = useNavigate();
  useEffect(() => {
    if (currentUser) {
      navigate('/');
    }
    navigate('/login');
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
  if (currentUser) {
    return (
      <div className="border justify-start items-start rounded cursor-auto">
        {/* {currentUser ? <span>{currentUser.email}</span> : <span></span>} */}
        {currentUser ? (
          <button
            className="border rounded cursor-pointer"
            onClick={buttonSubmit}
          >
            {currentUser.email}
          </button>
        ) : (
          <button>?</button>
        )}
        {/* <button */}
        {/* className="border rounded cursor-pointer" */}
        {/* onClick={buttonSubmit} */}
        {/* > */}
        {/* Logout */}
        {/* </button> */}
      </div>
    );
  }
  // else {
  // return <div>none</div>;
  // }
};

export default Logout;
