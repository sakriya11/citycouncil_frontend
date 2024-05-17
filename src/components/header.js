import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/header.css";
import { jwtDecode } from "jwt-decode";

function Headertest() {
  const navigate = useNavigate();

  const handelLogout = () => {
    localStorage.clear();
    navigate("/");
    console.log(localStorage);
  };

  const handelSignIn = () => {
    navigate("/login");
  };

  const handelRegister = () => {
    navigate("/register");
  };

  const navigateToHome = () => {
    navigate("/");
  };

  const navigateToCalender = () => {
    navigate("/calender");
  };

  const navigateToTax = () => {
    navigate("/tax");
  };
  const navigateToAboutus = () => {
    navigate("/about");
  };
  let userName = "";
  const loginToken = localStorage.getItem("accessToken");
  console.log(loginToken);

  if (loginToken) {
    const decodeToken = jwtDecode(loginToken);
    userName = decodeToken.userExist.fullName;
  }

  return (
    <div className="header-container">
      <div className="header-top-container">
        <div
          className="header-logo"
          onClick={navigateToHome}
          style={{ cursor: "pointer" }}
        >
          City Council
          <i class="fab fa-typo3" />
        </div>
        {loginToken ? (
          <div className="header-user-option">
            <div className="username">Welcome, {userName}</div>
            <div class="paste-button">
              <button class="button">Menu &nbsp; ▼</button>
              <div class="dropdown-content">
                <a id="first" href="#" onClick={navigateToCalender}>
                  Calender
                </a>
                <a id="second" href="#" onClick={navigateToAboutus}>
                  About us
                </a>
                <a id="second" href="#" onClick={navigateToTax}>
                  Tax
                </a>
                <a id="second" href="#">
                  News
                </a>

                <a id="third" href="#" onClick={handelLogout}>
                  Logout
                </a>
              </div>
            </div>
          </div>
        ) : (
          <div className="header-user-option">
            <i
              className="fa-regular fa-user "
              style={{ color: "#ffffff", marginTop: 13, marginRight: 5 }}
            ></i>

            <div className="sign" onClick={handelSignIn}>
              Sign in
            </div>
            <div class="paste-button">
              <button class="button">Menu &nbsp; ▼</button>
              <div class="dropdown-content">
                <a id="first" href="#" onClick={navigateToCalender}>
                  Calender
                </a>
                <a id="second" href="#" onClick={navigateToAboutus}>
                  About us
                </a>
                <a id="second" href="#" onClick={navigateToTax}>
                  Tax
                </a>

                <a id="third" href="#" onClick={handelRegister}>
                  Register
                </a>
              </div>
            </div>
          </div>
        )}
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
