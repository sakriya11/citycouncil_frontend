import React from "react";
import { Link } from "react-router-dom";
import "../css/registration.css";

function registration() {
  return (
    <div className="login-container">
      <div className="second-container">
        <div className="login-logo"></div>
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
            <input type="text"></input>
          </div>
          <div className="input-container">
            <label>Email address</label>
            <input type="text"></input>
          </div>
          <div className="input-container">
            <label>Password</label>
            <input type="text"></input>
          </div>
          <div className="input-container">
            <label>Confirm password</label>
            <input type="text"></input>
          </div>

          <button className="transparent-button" type="submit">
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default registration;
