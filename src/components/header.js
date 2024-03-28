import React from "react";
import "../css/header.css";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const handelLogout = () => {
    localStorage.clear();
    navigate("/login");
    console.log(localStorage);
  };
  return (
    <div className="container">
      <div className="top-container">
        <div className="logo">Logo</div>
        <div className="user-option">
          <Link to={"/login"}>
            <div className="sign">sign</div>
          </Link>
          <div className="register">register</div>
          <div className="menu">menu</div>
          <div className="logout" onClick={handelLogout}>
            logout
          </div>
        </div>
      </div>
      <div className="bottom-container">
        <div className="search-bar">
          <input type="text" placeholder="search"></input>
          <button type="submit">Search</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
