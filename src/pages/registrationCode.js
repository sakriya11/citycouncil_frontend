import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function RegistrationCode() {
  const navigate = useNavigate();

  const [code, setCode] = useState({
    verificationCode: "",
  });

  const handelChange = async (e) => {
    setCode({
      ...code,
      [e.target.name]: e.target.value,
    });
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:3000/api/user/email/verification",
        code
      );
      if (response.data) {
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
        navigate("/login");
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
      console.log("error", error);
    }
  };
  return (
    <div className="login-container">
      <div className="second-container">
        <div className="login-logo"></div>
        <div className="registration-title"> Kathmandu City Council</div>
        <div className="registration-discription">
          Enter the code provided in your email
        </div>

        <div className="register-form">
          <div className="input-container">
            <label>Enter the code</label>
            <input
              type="text"
              name="verificationCode"
              value={code.verificationCode}
              onChange={handelChange}
            ></input>
          </div>
          <button
            className="transparent-button"
            type="submit"
            onClick={handelSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default RegistrationCode;
