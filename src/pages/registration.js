import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/registration.css";
import axios from "axios";
import { toast } from "react-toastify";
// import { successnotification } from "../components/notifications";

function Registration() {
  const navigate = useNavigate();
  const [registerFormData, setRegisterFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    // gender:'',
  });

  // const [notifications, setNotification] = useState(null);

  const handelChange = async (e) => {
    setRegisterFormData({
      ...registerFormData,
      [e.target.name]: e.target.value,
    });
  };

  const navigateToHome = () => {
    navigate("/");
  };
  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://kathmandu-citycouncil.vercel.app//api/user/registration",
        // "http://127.0.0.1:3000/api/user/registration",
        registerFormData
      );
      if (response.data) {
        // setNotification({
        //   message: "Registered successfully!",
        //   type: "success",
        // });
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
        navigate("/registercode");
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
      }
      console.log(error);
    }
  };
  return (
    <div className="login-container">
      <div className="second-container">
        <div className="login-logo" onClick={navigateToHome}>
          City Council
          <i class="fab fa-typo3" />
        </div>
        <div className="registration-title"> Kathmandu City Council</div>
        <div className="registration-discription">
          Once registered you can track the progress of your cases and
          collaborate in real time
        </div>

        <div className="register-form">
          <div className="heading">Create an account </div>
          <div className="heading-discription">
            It only takes a few minutes. If you already have an account{" "}
            <Link to={"/login"}>Sign in</Link>
          </div>
          <div className="input-container">
            <label>Full name</label>
            <input
              type="text"
              name="fullName"
              value={registerFormData.fullName}
              onChange={handelChange}
            ></input>
          </div>
          <div className="input-container">
            <label>Email address</label>
            <input
              type="text"
              name="email"
              value={registerFormData.email}
              onChange={handelChange}
            ></input>
          </div>
          <div className="input-container">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={registerFormData.password}
              onChange={handelChange}
            ></input>
          </div>
          <div className="input-container">
            <label>Confirm password</label>
            <input
              type="password"
              name="confirmPassword"
              value={registerFormData.confirmPassword}
              onChange={handelChange}
            ></input>
          </div>
          <button
            className="transparent-button"
            type="submit"
            onClick={handelSubmit}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default Registration;
