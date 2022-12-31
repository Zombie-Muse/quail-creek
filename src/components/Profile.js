import React from 'react';
import { currentUser } from '../context/AuthContext';

const Profile = () => {
  return (
    <div>
      <h1>Welcome, {currentUser.displayName}</h1>
    </div>
  );
};

export default Profile;
