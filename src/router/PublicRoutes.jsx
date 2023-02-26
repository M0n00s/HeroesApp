import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const PublicRoutes = ({ children }) => {
  const { authstate } = useContext(AuthContext);
  return <>{!authstate.logged ? children : <Navigate to="/marvel" />}</>;
};
