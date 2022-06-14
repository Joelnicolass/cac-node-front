import React, { useContext } from "react";
import { AuthContext } from "../auth/AuthContext";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { auth } = useContext(AuthContext);

  if (auth.isAuthenticated) {
    return children;
  } else {
    return <Navigate to="/login" replace={true} />;
  }
};

export default PrivateRoutes;
