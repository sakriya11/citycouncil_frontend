import React from "react";
import "../css/header.css";
import { Link } from "react-router-dom";

function header() {
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

export default header;
