import React, { useState } from "react";
import "../css/login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function Login() {
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handelChange = async (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };
  const handelSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://127.0.0.1:3000/api/user/login",
        login
      );
      if (response.data) {
        localStorage.setItem("accessToken", response.data.accessToken);
        toast.success(response.data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        navigate("/");
      }
    } catch (error) {
      if (error.response && error.response.data.message) {
        toast.error(error.response.data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        console.log(error);
      }
    }
  };
  return (
    <div className="login-container">
      <div className="second-container">
        <div className="login-logo">logo</div>
        <div className="title">
          <b>Kathmandu City Council</b>
        </div>
        <div className="discription">
          Once signed in you can track the progress of your cases and
          collaborate in real time.
          <br /> <br /> Don't have an account?{" "}
          <Link to={"/register"}>Register</Link>, it takes less than a minute.
        </div>
        <div className="input-container">
          <label>Email address</label>
          <input
            type="text"
            name="email"
            value={login.email}
            onChange={handelChange}
          ></input>
        </div>
        <div className="input-container">
          <label>Password</label>
          <input
            type="text"
            name="password"
            value={login.password}
            onChange={handelChange}
          ></input>
        </div>

        <button
          className="transparent-button"
          type="submit"
          onClick={handelSubmit}
        >
          login
        </button>
      </div>
    </div>
  );
}

export default Login;
