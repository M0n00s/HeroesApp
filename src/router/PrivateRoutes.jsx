import React, { useContext, useMemo } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const PrivateRoutes = ({ children }) => {
  const { authstate } = useContext(AuthContext);
  const { pathname, search } = useLocation();
  const lastPath = useMemo(() => pathname + search, [pathname, search]);
  localStorage.setItem("last-path", lastPath);

  return <>{authstate.logged ? children : <Navigate to="/login" />}</>;
};
