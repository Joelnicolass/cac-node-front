import React, { useContext } from "react";
import { AuthContext } from "../auth/AuthContext";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const { auth } = useContext(AuthContext);

  if (auth.isAuthenticated) {
    return <Navigate to="/home" />;
  } else {
    return children;
  }
};

export default PublicRoute;
