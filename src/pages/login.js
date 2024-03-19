import React from "react";
import "../css/login.css";
import { Link } from "react-router-dom";
function login() {
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
          <input type="text"></input>
        </div>
        <div className="input-container">
          <label>Password</label>
          <input type="text"></input>
        </div>

        <button className="transparent-button" type="submit">
          login
        </button>
      </div>
    </div>
  );
}

export default login;
