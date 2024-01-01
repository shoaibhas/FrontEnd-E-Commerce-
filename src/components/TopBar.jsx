// TopBar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import "./TopBar.css"; // Import the CSS file

const TopBar = () => {
  return (
    <header>
      <nav>
        <ul>
          {/* <li>
            <NavLink to="/">Home</NavLink>
          </li> */}
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/category">Category</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default TopBar;
