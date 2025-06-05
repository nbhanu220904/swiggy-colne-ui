import React from "react";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <section className="topBarSection">
      <div className="companyTitle">
        <Link to="/" className="link">
          <h2>Swiggy</h2>
        </Link>
      </div>
      <div className="searchBar">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="userAuth">
        <span className="login" onClick={showLoginHandler}>
          Login
        </span>
        <span className="register" onClick={showRegisterHandler}>
          Register
        </span>
      </div>
    </section>
  );
};

export default TopBar;
