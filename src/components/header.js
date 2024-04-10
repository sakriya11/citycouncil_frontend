import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/header.css";

function Headertest() {
  const navigate = useNavigate();
  const handelLogout = () => {
    localStorage.clear();
    navigate("/login");
    console.log(localStorage);
  };

  const handelSignIn = () => {
    navigate("/login");
  };

  const handelRegister = () => {
    navigate("/register");
  };
  return (
    <div className="header-container">
      <div className="header-top-container">
        <div className="header-logo">
          City Council
          <i class="fab fa-typo3" />
        </div>
        <div className="header-user-option">
          <i
            className="fa-regular fa-user "
            style={{ color: "#ffffff", marginTop: 2, marginRight: 5 }}
          ></i>

          <div className="sign" onClick={handelSignIn}>
            Sign in
          </div>
          <div className="header-register" onClick={handelRegister}>
            register
          </div>
          <div className="header-logout" onClick={handelLogout}>
            logout
          </div>
        </div>
      </div>
      <div className="header-bottom-container">
        <div className="header-search-bar">
          <input type="text" placeholder="search"></input>
          <button type="submit">Search</button>
        </div>
      </div>
    </div>
  );
}

export default Headertest;
