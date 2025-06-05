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
        <span className="login">Login</span>
        <span className="register">Register</span>
      </div>
    </section>
  );
};

export default TopBar;
