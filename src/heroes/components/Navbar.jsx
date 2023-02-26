import { NavLink, useNavigate } from "react-router-dom";
import { CgLogOut } from "react-icons/cg";

import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export const Navbar = () => {
  const { authstate, authLogout } = useContext(AuthContext);
  const navigate = useNavigate();

  const onLogout = () => {
    authLogout();
    navigate("/login", { replace: true });
  };

  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary bg-dark"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <NavLink to="/marvel" className="navbar-brand">
          HeroApp
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                to="/marvel"
                className={({ isActive }) =>
                  ` nav-link ${isActive ? "active" : ""}`
                }
                aria-current="page"
              >
                Marvel
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/dc"
                className={({ isActive }) =>
                  ` nav-link ${isActive ? "active" : ""}`
                }
                aria-current="page"
              >
                Dc
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/search"
                className={({ isActive }) =>
                  ` nav-link ${isActive ? "active" : ""}`
                }
                aria-current="page"
              >
                Search
              </NavLink>
            </li>
          </ul>
          <div className="d-flex navbar-nav ">
            <span className="nav-link ">
              <b>Hola!</b> {authstate.user?.name.toUpperCase()}
            </span>
            <button
              onClick={onLogout}
              className="btn btn-outline-danger"
              type="submit"
            >
              <CgLogOut /> Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
