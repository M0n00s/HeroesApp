import { types } from "./types";

export const ActionLogin = (user) => {
  return {
    type: types.login,
    payload: user,
  };
};

export const ActionLogout = () => {
  return {
    type: types.logout,
  };
};
