import React, { useEffect, useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { ActionLogin, ActionLogout } from "./AuthReducer/AuthAction";
import { AuthReducer } from "./AuthReducer/AuthReducer";

const init = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user) return { logged: true, user };
  return { logged: false };
};

export const AuthProvider = ({ children }) => {
  const [authstate, authDispatch] = useReducer(AuthReducer, {}, init);

  const authlogin = (user) => {
    localStorage.setItem("user", JSON.stringify(user));

    authDispatch(ActionLogin(user));
  };

  const authLogout = () => {
    localStorage.removeItem("user");
    authDispatch(ActionLogout());
  };

  return (
    <AuthContext.Provider value={{ authstate, authlogin, authLogout }}>
      {children}
    </AuthContext.Provider>
  );
};
