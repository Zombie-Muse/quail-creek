import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth();

  return (
    <Outlet
      {...rest}
      render={(props) => {
        return currentUser ? (
          <Component {...props} />
        ) : (
          <Navigate to="/login" />
        );
      }}
    />
  );
}
