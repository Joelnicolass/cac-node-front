import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../views/Home/Home";
import Login from "../views/Login/Login";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoute from "./PublicRoute";

const AppRouter = () => {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />
      <Route
        path="*"
        element={
          <PrivateRoutes>
            <Routes>
              <Route path="/home" element={<Home />} />
            </Routes>
          </PrivateRoutes>
        }
      />
    </Routes>
  );
};

export default AppRouter;
