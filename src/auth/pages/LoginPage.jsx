import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../heroes/hooks/useForm";
import Swal from "sweetalert2";

export const LoginPage = () => {
  const { authlogin } = useContext(AuthContext);

  const { name, onInputChange, onResetForm } = useForm({ name: "" });

  const navigate = useNavigate();

  const onLogin = (e) => {
    e.preventDefault();
    const lastPath = localStorage.getItem("last-path") || "/";

    if (name.trim().length <= 1) {
      Swal.fire({
        title: "Error!",
        text: "Do you please enter a name",
        icon: "error",
        confirmButtonText: "Cool",
      });
    } else {
      authlogin({
        id: 123,
        name: name,
      });
      navigate(lastPath, { replace: true });
      onResetForm();
    }
  };
  return (
    <>
      <div className="container mt-5 d-flex justify-content-center gap-3">
        <h1>Login</h1>
        <hr />
        <form className="col-3 d-flex gap-2">
          <input
            name="name"
            value={name}
            onChange={onInputChange}
            type="text"
            className="form-control "
            placeholder="Your Name Here"
          />
          <button className="btn btn-outline-success" onClick={onLogin}>
            Login
          </button>
        </form>
      </div>
    </>
  );
};
